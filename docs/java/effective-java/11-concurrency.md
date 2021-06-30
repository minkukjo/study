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

- 배타적 실행 (한번에 한스레드) 동작이 필요없고, 스레드 간 최신데이터만 읽는 거로도 충분하면 가변 변수에 volatile 키워드만으로도 동기화가 가능하다

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
