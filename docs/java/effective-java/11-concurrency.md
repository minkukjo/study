---
id: 11-concurrency
title: 11. 동시성
---

> 멀티 스레드의 동시성 제어를 위한 방법에 대하여 알아보자

## 공유 중인 가변 데이터는 동기화해 사용하라

> item 78

- **synchronized** 키워드는 메서드나 블록을 한 번에 한 쓰레드씩 수행하는 것을 보장한다.

- 동기화의 중요한 기능 중 하나는, 동기화 없이는 한 스레드가 만든 변화를 다른 스레드에서 확인하지 못할 수 있다는 것이다.

- 동기화는 일관성이 깨진 상태를 볼 수 없게 하는 것은 물론, 동기화된 메서드나 블록에 들어간 스레드가 같은 락의 보호하에 수행된 모든 이전 수정의 최종 결과를 보게 해준다.

- 그래서 스레드가 저장한 값이 다른 스레드에게 보이는 것도 **동기화**가 있기에 가능하다.

- 동기화는 단순히 배타적 실행뿐 아니라 스레드 사이의 안정적인 통신에도 반드시 필요하다.

### 동기화를 하지 않는 경우

- 공유중인 가변 데이터를 원자적으로 읽고 쓸 때 동기화에 실패하면 심각한 결과로 이어지게 된다.

```java
public class StopThread {

    private static boolean stopRequested;

    public static void main(String[] args) throws InterruptedException {

        Thread backgroundThread = new Thread(() -> {
            int i = 0;
            while(!stopRequested) {
                i++;
            }
        });

        backgroundThread.start();

        TimeUnit.SECONDS.sleep(1);
        stopRequested = true;
    }
}
```

- 이 프로그램은 아타깝게도 1초 후에도 종료하지 않는다.

- 메인 스레드가 1초 후 stopRequested를 true로 설정하게 될 것 같지만 실상은 그렇지 않다.

- 이유는 동기화하지 않았기 때문인데, 동기화를 안하면 메인 스레드가 수정한 값을 백그라운드 스레드가 언제보게 될 지 보증할 수 없다.

- 동기화가 없는 코드에서 JVM은 다음과 같이 최적화를 수행한다.

```java
//원래 코드
while(!stopRequested) {
    i++;
}

// 최적화한 코드
if(!stopRequested) {
    while(true) {
        i++;
    }
}
```

- 이를 JVM의 호이스팅 기법이라 부른다.

### 동기화를 하는 경우

```java
public class StopThread {

    private static boolean stopRequested;

    private static synchronized void requestStop() {
        stopRequested = true;
    }

    private static synchronized boolean stopRequested() {
        return stopRequested;
    }

    public static void main(String[] args) throws InterruptedException {

        Thread backgroundThread = new Thread(() -> {
            int i = 0;
            while(!stopRequested()) {
                i++;
            }
        });

        backgroundThread.start();

        TimeUnit.SECONDS.sleep(1);
        requestStop();
    }
}
```

- **requestStop**과 **stopRequested**을 동기화한 것은, **쓰기**와 **읽기** 모두 동기화 되어야 동작을 보장하기 때문이다.

- 위와 같은 경우 매번 동기화하는 비용이 크진 않겠지만 속도가 더 빠른 **volatile**로 선언하면 동기화를 생략할 수 있다고 한다.

```java
public class StopThread {

    private static volatile boolean stopRequested;

    public static void main(String[] args) throws InterruptedException {

        Thread backgroundThread = new Thread(() -> {
            int i = 0;
            while(!stopRequested) {
                i++;
            }
        });

        backgroundThread.start();

        TimeUnit.SECONDS.sleep(1);
        stopRequested = true;
    }
}
```

![java-volatile](https://user-images.githubusercontent.com/43809168/124156650-d6671800-dad2-11eb-9490-f8efc59f2755.png)

- 자바 **volatile**은 변수를 읽어올 때 CPU 캐시가 아닌, 매 번 메인 메모리에서 가져온다.

- 즉, read/write 모두 메인 메모리에서 수행한다는 의미이다.

- **volatile**은 배타적 수행하는 것과 관계 없이, 항상 최근에 기록된 값을 읽어오기 때문에 위 프로그램이 1초 뒤에 종료되는 것이다. (쓰레드나 동기화와는 무관)

### volatile 사용시 주의할 점

```java
private static volatile int nextSerialNumber = 0;

public static int generateSerialNumber() {
    return nextSerialNumber++;
}
```

- 위 코드는 얼핏 봐서는 크게 문제가 없을 것으로 보인다.

- 그러나 nextSerialNumber 변수가 **volatile**이고, **nextSerialNumber++**로 인해 문제가 발생한다.

- `++` 연산자는 `nextSerialNumber = nextSerialNumber + 1`과 같은 의미를 갖다.

- 멀티 스레드 환경에서 첫 번째 스레드가 값을 읽고, 1을 증가한 새로운 값을 저장할 때 두 번째 스레드가 이 사이를 비집고 들어와서 값을 읽어가면 첫 번째 스레드와 동일한 값을 돌려받게 된다.

- 이러한 오류를 **safety failure**라고 부른다.

```java
private static volatile int nextSerialNumber = 0;

public static synchronized int generateSerialNumber() {
    return nextSerialNumber++;
}
```

- 문제를 해결하는 가장 쉬운 방법은 **synchronized** 키워드를 붙이는 것이다.

- 이 메서드를 더 견고하게 사용하려면 **int** 타입 대신 **long**을 사용하는 편이 더 낫다.

### java.util.concurrent.atomic

- 자바 표준 라이브러리에는 **concurrent** 패키지가 존재한다.

- 이 패키지에는 여러 동시성 보장 클래스들이 존재하는데, 특히 atomic 패키지의 **AtomicLong**이 대표적인 예이다.

```java
private static final AtomicLong nextSerialNum = new AtomicLong();

public static long generateSerialNumber() {
    return nextSerialNum.getAndIncrement();
}
```

- 이 패키지는 원자성을 지원해준다.

### 요약

- 동시성 문제를 피하는 가장 좋은 방법은 가변 데이터를 공유하지 않는 것이다.

- 가변 데이터는 **단일 스레드**에서만 쓰도록 하자.

- 불변 객체를 사용하면 이러한 문제를 만나지 않을 수 있다.

- 만약 여러 스레드가 가변 데이터를 공유한다면, 그 데이터를 읽고 쓰는 동작은 반드시 동기화해야 한다.

- 배타적 실행 (한번에 한스레드) 동작이 필요없고, 스레드 간 최신데이터만 읽는 거로도 충분하면 가변 변수에 volatile 키워드만으로도 동기화가 가능하다.

## 과도한 동기화는 피하라

> item 79

- 과도환 동기화는 성능을 떨어뜨리고, 교착상태에 빠뜨릴 수 있다.

- 응답 불가와 **safety failure**를 피하려면 동기화 메서드나 동기화 블록 안에서는 제어를 절대로 클라이언트에 양도해서는 안된다.

- 예를 들어, 동기화된 영역 안에서는 재정의할 수 있는 메서드를 호출해서는 안되며, 클라이언트가 넘겨준 함수 객체를 호출해서도 안된다.

- 동기화된 영역을 포함한 클래스 관점에서는 이 메서드들은 `Alien Method`이기 때문에 바깥 세상의 메서드들을 동기화 영역 내부에서 사용하는 것은 금지다.

```java
public class ObservableSet<E> extends ForwardingSet<E> {

    public ObservableSet(Set<E> set) {
        super(set);
    }

    private final List<SetObserver<E>> observers = new ArrayList<>();

    public void addObserver(SetObserver<E> observer) {
        synchronized (observers) {
            observers.add(observer);
        }
    }

    public boolean removeObserver(SetObserver<E> observer) {
        synchronized (observers) {
            return observers.remove(observer);
        }
    }

    private void notifyElementAdded(E element) {
        synchronized (observers) {
            for(SetObserver<E> observer : observers) {
                observer.added(this, element);
            }
        }
    }

    @Override
    public boolean add(E element) {
        boolean added = super.add(element);
        if(added) {
            notifyElementAdded(element);
        }
        return added;
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        boolean result = false;
        for (E element : c) {
            result |= add(element);
        }
        return result;
    }
}
```

- 디자인패턴 중의 하나인, 옵저버 패턴이다.

- addObserver와 removeObserver 메서드를 호출해 구독을 신청하거나 해지한다.

- 두 경우 다음 콜백 인터페이스를 메서드에 전달한다.

```java
@FunctionalInterface
public interface SetObserver<E> {
    void added(ObservableSet<E> set, E element);
}
```

- 이 인터페이스는 서로 다른 두 타입의 인자를 받아 소모하는 함수형 인터페이스 `BiConsumer<ObservableSet<E>, E>`와 완벽히 동일하다.

- 그럼에도 커스텀 함수형 인터페이스를 정의한 이유는 이름이 더 직관적이고 추후에 확장할 수 있기 때문이다.

- ObservableSet을 사용하는 것이 어떤 문제를 내포하고 있는지 다음을 봐보자.

### 외계인 메소드의 사용

```java
public static void main(String[] args) {
    ObservableSet<Integer> set = new ObservableSet<>(new HashSet<>());
    set.addObserver(new SetObserver<>() {
        public void added(ObservableSet<Integer> s, Integer e) {
            System.out.println(e);
            if(e == 23) {
                s.removeObserver(this);
            }
        }
    });

    for(int i = 0; i < 100; i++) {
        set.add(i);
    }
}
```

- 평상시에는 집합에 추가된 정숫 값을 출력하닥, 그 값이 23이면 자신을 제거하는 코드이다.

- 여기서 람다가 아닌 익명 객체를 사용한 이유는, `removeObserver` 메소드에 자기 자신을 넘겨야하는데 람다에서는 자기 자신을 참조할 수 단이 없기 때문이다.

- 이 프로그램은 23까지 출력한 다음 `ConcurrentModificationException`을 발생시킨다.

- 관찰자의 **added** 메서드 호출이 일어난 시점이 **notifyElementAdded**가 관찰자들의 리스트를 순회하는 도중이기 때문이다.

- **added** 메서드가 **removeObserver**를 호출하고, **remove** 메소드를 호출한다.

- 리스트에서 원소를 제거하려는데, 마침 지금은 이 리스트를 순회하는 중이다.

- **notifyElementAdded** 메서드에서 수행하는 순회는 동기화 블록 안에 있으므로, 동시 수정이 일어나지 않도록 보장하는 것은 맞지만, 정작 자신이 콜백을 거쳐 되돌아와 수정하는 것까지는 막지 못한다.

### 외계인 메서드의 데드락

```java
set.addObserver(new SetObserver<>() {
    public void added(ObservableSet<Integer> s, Integer e) {
        System.out.println(e);
        if(e == 23) {
            ExecutorService exec = Executors.newSingleThreadExecutor();
            try {
                exec.submit(() -> s.removeObserver(this)).get();
            } catch(ExecutionException | InterruptedException ex) {
                throw new AssertionError(ex);
            } finally {
                exec.shutdown();
            }
        }
    }
});
```

- 이 프로그램은 에러는 나지 않지만, 교착 상태에 빠진다.

- 백그라운드 스레드가 **s.removeObserver**를 호출하면 관찰자를 잠그려고 시도하는데, 락을 얻을 수 없다.

- 왜냐하면 메인 스레드가 이미 락을 쥐고 있기 때문이다.

- 그와 동시에 메인 스레드는 백그라운드 스레드가 관찰자를 제거하기만을 기다리고 있다.

- 동기화된 영역 안에서 외계인 메소드를 호출하다 보니 이런 현상이 발생하는 것이다.

### 교착 상태의 해결 방법

- 자바의 락은 재진입(reentrant)를 허용하므로 교착상태에 빠지지는 않는다.

- 재진입 가능 락은 객체 지향 멀티 스레드 프로그램을 쉽게 구현하게 해준다.

- 하지만 **교착 상태**가 될 상황을 **safety failure**로 변모시킬 수 있다.

- 이 경우 외계인 메소드를 바깥쪽으로 옮기면 된다.

```java
private void notifyElementAdded(E element) {
    List<SetObserver<E>> snapshot = null;
    synchronized(observers) {
        snapshot = new ArrayList<>(observers);
    }
    for (SetObserver<E> observer : snapshot) {
        observer.added(this, element);
    }
}
```

### CopyOnWriteArrayList

- 외계인 메소드 호출을 동기화 블록 바깥으로 옮기는 것 보다 더 좋은 방법이 있다.

- 자바의 동시성 컬렉션 라이브러리의 `CopyOnWriteArrayList`를 사용하는 것이다.

- 내용은 내부를 변경하는 작업은 항상 깨끗한 복사본을 만들어 수행하도록 구현되었다.

- 내부의 배열은 절대 수정되지 않으니 순회할 때 락이 필요 없어 매우 빠르다.

```java
private final List<SetObserser<E>> observers = new CopyOnWriteArrayList<>();

public void addObserver(SetObserver<E> observer) {
    observers.add(observer);
}

public boolean removeObserver(SetObserver<E> observer) {
    return observers.remove(observer);
}

public void notifyElementAdded(E element) {
    for (SetObserver<E> observer : observers) {
         observers.added(this, element);
    }
}
```

- 다음과 같이 **observers**를 `CopyOnWriteArrayList`로 선언하고, 옵저버를 등록시키면 동기화 키워드 없이도 동시성을 보장해줄 수 있다.

- 동기화 영역 안에서 외계인 메서드를 호출하는 것은, 외계인 메서드가 얼마나 오래 실행될지 알 수 없으므로 다른 스레드는 보호된 자원을 쓰지도 못하고 무한정 대기해야만 한다.

### 동기화의 진실

- 기본 규칙은 동기화 영역 안에서 가능한 한 일을 적게 수행하는 것이다.

- 멀티코어가 일반화된 오늘날, 과도한 동기화가 초래하는 진짜 비용은 락을 얻는데 드는 CPU 시간이 아니다.

- 바로 경쟁하느라 낭비하는 시간 (Race Condition), 즉 병렬로 실행할 기회를 잃고 모든 코어가 메모리를 일관되게 보기 위한 지연시간이 **진짜 비용**이다.

### 가변 클래스의 작성할 때 두 가지 선택지

- **1번 방법**: 동기화를 전혀 하지 않고 클래스를 동시에 사용해야하는 클래스라면 외부에서 알아서 동기화하게 하자.

- **2번 방법**: 동기화를 내부에서 수행해 스레드 안전한 클래스로 만들자. 단 이 방법은 클라이언트가 외부에서 객체 전체에 락을 거는 것보다 동시성을 월등히 개선할 수 있을 때만 사용하자.

## 요약

- 교착 상태와 데이터 훼손을 피하려면 동기화 영역 안에서 외계인 메소드를 절대 호출하지는 말자.

- 동기화 영역 안에서의 작업은 최소한으로 줄이자.

- 가변 클래스를 설계할 때는 스스로 동기화해야 할지 고민하자.

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
