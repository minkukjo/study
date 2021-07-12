---
id: 12-serialize
title: 12. 직렬화
---

> 객체 직렬화는 자바가 객체를 바이트 스트림으로 인코딩(직렬화)하고 바이트 스트림으로부터 다시 객체를 재구성하는(역직렬화) 메커니즘이다.

## 자바 직렬화의 대안을 찾으라

> item 85

- 자바 직렬화는 보안적인 위험과 성능적인 위험 둘 다 갖고 있다.

- 가급적이면 직렬화 위험을 회피하기 위해 직렬화를 쓰지 말자.

- 이 직렬화를 **직접** 다루기 보다는 직렬화 라이브러리 ( like Jackson )를 사용하도록 하자.

## Serializable을 구현할지에 대해서는 신중히 결정하라

> item 86

- **Serializable**를 구현한 객체는 일단 배포하면 수정하기가 어렵다.

- **Serializable**를 구현한 객체를 왜 신중히 고려해야하는지 알아보자.

### serialVersionUID 값 문제

- 직렬화는 기본적으로 스트림 고유 식별자, 직렬 버전 UID를 갖는다.

- **serialVersionUID**라는 이름의 필드로, 이 번호를 명시하지 않으면 시스템이 런타임에 암호 해시 함수를 적용해 자동으로 클래스 안에 넣는다.

- **serialVersionUID** 값을 자동 생성하는데 포함되는 값은 클래스의 이름, 구현한 인터페이스들, 클레스의 멤버들이 포함된다.

- 그렇다보니 만약 클래스가 수정되면 직렬 버전 UID 값도 달라지고 이는 런타임 에러가 발생하게 된다.

### 버그와 보안의 구멍

- **Serializable**의 두 번째 문제는 버그와 보안 구멍이 생긴다는 것이다.

- 객체는 일반적으로 생성자를 사용하는게 일반적이다.

- 직렬화는 그러한 메커니즘을 위반하는, 일종의 **숨은 생성자**이다.

- 기본 역직렬화시에는 불변식이 깨지고 허가되지 않은 접근에 쉽게 노출되게 된다.

### 릴리즈 시 테스트가 늘어남

- **Serializable**의 세 번째 문제는 해당 클래스의 신버전을 릴리스할 때 테스트할 것이 늘어난다는 것이다.

- 직렬화 가능 클래스가 수정되면, 신버전이 인스턴스를 직렬화-역직렬화에 이상이 없는지를 면밀히 검사해야한다.

- 이런 과정이 추가로 들어가기 때문에 **Serializable**의 도입은 신중해야한다.

## Serializable 구현 여부는 가볍게 결정할 사안이 아니다

- 상속용으로 설계된 클래스는 대부분 **Serializable**을 구현하면 안되고, 인터페이스도 대부분 **Serializable**를 확장해서는 안된다.

- 상속용 클래스인데 직렬화를 지원하지 않으면 그 하위 클래스에서 직렬화를 지원할 때 부담이 늘어난다.

- 상위 클래스는 매개변수가 없는 생성자를 제공해야하는데, 이런 생성자를 제공하지않으면 직렬화 프록시 패턴이란 걸 사용해야한다.

- 내부 클래스에는 가급적 직렬화를 구현하지 말아야한다.

## 핵심 정리

- **Serializable**는 구현하기는 쉽지만 쉽지않다.

- 한 클래스에 여러 버전이 상호작용할 일이 없고 서버가 신뢰할 수 없는 데이터에 노출될 가능성이 없다면 **Serializable**의 구현은 신중해라.

## 커스텀 직렬화 형태를 고려해보라

> item 87

- 먼저 고민해보고 괜찮다고 판단되는 경우에만 기본 직렬화 형태를 사용하자

- 객체의 물리적 표현과 논리적 내용이 같다면 기본 직렬화 형태라도 무방하다

### 기본 직렬화 방법의 문제점

```java
public final class StringList implements Serializable {
    private int size = 0;
    private Entry head = null;

    private static class Entry implements Serializable {
        String data;
        Entry next;
        Entry previous;
    }
    // ... 생략
}
```

- 이 클래스는 일련의 문자열을 표현한 클래스이다.

- 물리적으로 문자열들을 이중 연결리스트로 연결했다.

- 이 클래스에 기본 직렬화 형태를 사용하면 노드의 양방향 정보를 포함해 모든 엔트리를 기록한다.

- 객체의 물리적 표현과 논리적 표현의 차이가 클 경우 기본 직렬화 형태를 사용하면 다음과 같은 네 가지 문제가 생긴다.

- 첫 째, 공개 API가 현재 내부 표현 방식에 영구히 묶인다.

- 둘 째, 너무 많은 공간을 차지하게 된다.

- 세 번째, 시간이 너무 많이 걸린다.

- 네 번째, 스택오버플로우를 발생시킬 수 있다.

### 커스텀 직렬화의 사용

```java
public final class StringList implements Serializable {

    private transient int size   = 0;
    private transient Entry head = null;

    // 이제는 직렬화되지 않는다.
    private static class Entry {
        String data;
        Entry  next;
        Entry  previous;
    }

    // 지정한 문자열을 이 리스트에 추가한다.
    public final void add(String s) { ... }

    /**
     * 이 {@code StringList} 인스턴스를 직렬화한다.
     *
     * @serialData 이 리스트의 크기(포함된 문자열의 개수)를 기록한 후
     * ({@code int}), 이어서 모든 원소를(각각은 {@code String})
     * 순서대로 기록한다.
     */
    private void writeObject(ObjectOutputStream s) throws IOException {
        s.defaultWriteObject();
        s.writeInt(size);

        // 모든 원소를 올바른 순서로 기록한다.
        for (Entry e = head; e != null; e = e.next)
            s.writeObject(e.data);
    }

    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        s.defaultReadObject();
        int numElements = s.readInt();

        // 모든 원소를 읽어 이 리스트에 삽입한다.
        for (int i = 0; i < numElements; i++)
            add((String) s.readObject());
    }
}
```

- StringList의 물리적인 상세 표현을 배제한 채, 논리적인 구성만 담아낸다.

- transient 키워드는 직렬화 대상에서 제외할 키워드를 명시한다.

- private 메서드 또한 직렬화로 인해 공개 API가 되므로 문서화하도록 하자.

### 객체의 불변식이 깨지는 경우

- 해시테이블을 예로 들어, key-value를 엔트리로 갖지만 어떤 엔트리를 어떤 버킷에 담을지는 key에 대한 hashcode가 결정한다.

- 문제는 이 hashcode를 구하는 계산식이 구현에 따라 달라질 수 있다는 점이다.

- 따라서 해시테이블은 직렬화한 후 역직렬화하면 불변식이 심각하게 훼손된 객체들이 발생할 수 있다.

### Transient 키워드의 사용

- defaultWriteObject 메소드는 transient로 선언하지않은 모든 인스턴스 필드가 직렬화된다.

- 기본적으론 모두 transient로 두고, 정말로 객체의 논리적 상태와 무관한 필드만 transient를 생략하자

### 직렬화에서의 동기화 매커니즘

```java
private synchronized void writeObject(ObjectOutputStream s) throws IOException {
    s.defaultWriteObject();
}
```

- 직렬화 역시, 이전 시간에 배운 것 처럼 동기화를 해야하는 경우 `synchronized` 키워드를 붙이도록 하자

### 직렬 버전 UID를 명시적으로 붙이자

```java
private static final long serialVersionUID = 1L;
```

- 직렬 버전 UID는 다음과 같이 선언할 수 있다.

- UID를 명시해줌으로써 자동으로 UID가 생성되지 않도록 하자

### 주의점

- 직렬 버전 UID는 클래스의 명세가 변경되면 자동 생성된 값이 바뀌므로 주의해야한다.

- 구버전과 호환되지 않아 역직렬화가 되지 않으며 기존 버전의 직렬화된 인스턴스를 역직렬화할 때 **InvalidClassException**가 발생할 수 있다.

### 요약

- 클래스를 직렬화하기로 했다면 어떤 직렬화 형태를 사용할지 심사숙고 하자

- 자바의 기본 직렬화 형태는 객체의 직렬화한 결과가 논리적 표현에 부합할 때만 사용하고 그렇지 않으면 커스텀 직렬화를 사용하자

- 한 번 공개된 메서드는 향후 릴리즈에서 제거할 수 없듯이, 직렬화 형태에 포함된 필드도 마음대로 제거할 수 없다

- 직렬화 호환성을 유지하기 위해 영원히 지원해야한다.

- 잘못된 직렬화 형태를 사용하면 클래스의 복잡성과 성능에 영구히 부정적인 영향을 남긴다.

## readObject 메서드는 방어적으로 작성하라

> item 88

- readObject 메서드는 실질적인 또 다른 public 생성자이므로 똑같은 수준으로 주의를 기울어야한다.

```java
private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
    s.defaultReadObject();

    // 불변식을 만족하는지 검사한다.
    if(start.compareTo(end) > 0) {
       throw new InvalidObjectException(start + "가 " + end + "보다 늦다.");
    }
}
```

- readObject 메서드에서 **defaultReadObject** 메서드를 호출해서 불변식을 만족하지는지를 확인하자

```java
private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
    s.defaultReadObject();

    // 가변 요소들을 방어적으로 복사한다.
    start = new Date(start.getTime());
    end = new Date(end.getTime());

    // 불변식을 만족하는지 검사한다.
    if(start.compareTo(end) > 0) {
       throw new InvalidObjectException(start + "가 " + end + "보다 늦다.");
    }
}
```

- readObject 메서드에서 방어적 복사를 충분히 하지 않으면 보안적인 문제가 생길 수 있으니 반드시 접근 가능한 필드를 복사본으로 생성하도록 하자

### 요약

- **readObject**의 작성은 public 생성자를 작성하는 마음가짐으로 임해야한다.

- **readObject**는 어떤 바이트 스트림이 넘어오더라도 유효한 인스턴스를 만들어내야한다.

- 물론 그 바이트 스트림이 진짜 직렬화된 인스턴스라고 가정하기 보다는, 변조의 가능성을 두고 최대한 방어적으로 작성하도록 하자.

## 인스턴스 수를 통제해야 한다면 readResolve 보다는 열거 타입을 사용하라

- 싱글턴으로 개발된 클래스 역시 직렬화에 의해 두 개의 인스턴스가 공존할 수 있다.

- 이를 방어하기 위해 **readResolve**를 사용할 수 있는데, 이 메소드는 readObject가 만들어낸 인스턴스를 다른 것으로 대체할 수 있는 메소드이다.

```java
private Object readResolove() {
    return INSTANCE;
}
```

### Enum의 활용

- 사실 이런 경우 원소가 하나인 Enum을 사용하는 편이 훨씬 깔끔하다.

```java
public enum Elvis {
    INSTANCE;
    private String[] favoriteSongs = { "보고싶다", "나를 사랑했던 사람아" };
    public void printFavorites() {
        System.out.printlnArrays.toString(favoritSongs);
    }
}
```

- 인스턴스 통제를 위해 readResolve를 사용하는 방식이 아주 쓸모없는 것은 아니다.

- 직렬화 가능 인스턴스 통제 클래스를 작성해야할 때 컴파일 타임에는 어떤 인스턴스들이 있는지 알 수 없는 상황에서는 열거 타입 표현이 불가능하기 때문이다.

- readResolve는 접근성이 매우 중요한데, final 클래스라면 private이어야하고, protected나 public이면 하위 클래스에서 재정의하지 않을 경우 **ClassCastException**이 발생할 수 있으므로 주의해야한다.

### 요약

- 불변식을 지키기 위해 인스턴스를 통제해야한다면 (싱글턴 패턴), 가능한 한 열거 타입을 상요하도록 하자.

- 이넘 타입의 선언이 여의치않다면 readResolve 메서드를 사용하고, 그 클래스의 모든 참조 타입 인스턴스 필드를 transient로 선언하자.

## 직렬화된 인스턴스 대신 직렬화 프록시 사용을 검토하라

> item 90

- 이번 장 내내 이야기했듯이, **Serializable**을 구현하는 순간 언어의 정상 메커니즘인 생성자 이외의 방법으로 인스턴스를 생성할 수 있게 된다.

- 버그와 보안 문제가 발생할 가능성이 커진다는 뜻인데, 이를 보완할 방법으로 직렬화 프록시 패턴이라는 것이 존재한다.

- 직렬화 프록시용 클래스는 바깥 클래스를 인자로 받아 자신의 필드로 복사한다. ( 이 때 일관성 검사나 방어적 복사는 필요없다. 직렬화 프록시의 기본 직렬화 형태는 바깥 클래스로 직렬화 하기에 이상적이기 떄문이다. )

- **writeReplace** 메서드는 이런 작업을 하기 위해 최적화된 메서드이다.

- 이 메서드는 자바의 직렬화 시스템이 바깥 클래스의 인스턴스 대신 직렬화 프록시의 인스턴스를 반환하게 해주기 때문이다.

- 이러한 직렬화 프록시 패턴은 JPA의 구현체인 하이버네이트에서도 사용하는 기법이다. ( 기본적으로 JPA에서 모든 엔터티는 Serializable을 구현하는 것이 국룰이다. )

### 요약

- 제 3자가 확장할 수 없는 클래스라면 가능한 한 직렬화 프록시 패턴을 사용하자.

- 이 패턴이 불변식을 가장 안정적으로 직렬화해주는 가장 쉬운 방법일 것이다.

이펙티브 자바 스터디 끝!

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
