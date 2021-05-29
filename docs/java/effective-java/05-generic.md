---
id: 05-generic
title: 05. 제네릭
---

> 제네릭은 자바 5부터 지원하고 있다.

> 제네릭을 사용하기 전에는 컬렉션에서 객체를 꺼낼 때 마다 형변환을 해야했다.

> 그러나 제네릭을 사용함으로써 컬렉션이 담을 수 있는 타입을 컴파일러에게 알려주어 더욱 더 안전한 프로그래밍이 가능하게 되었다.

> 꼭 컬렉션이 아니더라도 이러한 이점을 누릴 수 있으나, 코드의 복잡성이 올라간다는 단점이 존재한다.

> 이번 장은 제네릭의 이점을 극대화하고 단점을 줄일 수 있는 방법에 대해서 공부해본다.

## item 26

### Raw 타입은 사용하지 말라

쉽게 이야기하면, 제네릭 타입으로 선언이 되었다면 가급적 Raw 타입의 사용은 자제해야한다는 뜻인데,

가령 제네릭이 없던 시절의 컬렉션의 경우 다음과 같이 선언했었다.

```java
private Collection stamps = ...;
```

만약 stamps의 타입이 `Stamp`이지만 `Coin`을 넣어도 컴파일 타임에는 오류를 발생시키지 않는다.

오류는 가능한 한 발생 즉시, 컴파일 타임에 잡아내는 것이 가장 좋다.

Raw Typedㅡㄴ 런타임에 예외가 발생할 수 있으니, 가급적 제네릭 타입을 사용하도록 하자.

`Set<Object>`와 `Set<?>`는 그나마 안전하지만 `Set`은 안전하지 않다.

## item 27

### 비검사 경고를 제거하라

제네릭은 컴파일단에서 잘못된 타입을 사용하려고 할 경우 알려준다.

여기서 의미하는 비검사 경고란 컴파일러가 자바 코드를 컴파일하고 나서 잘못된 것들에 대해 경고하는 옵션을 의미한다.

`javac 명령 인수에 -Xlint:uncheck`를 추가하면 해당 에러를 볼 수 있다.

실제로는 IDE 단에서 이러한 에러를 잡아주므로 가급적 IDE가 알려주는 에러는 다 제거하도록 하자.

비검사 경고는 자칫 잘못하면 런타임 에러를 유발할 수 있는 위험성을 내포하고 있다.

만약 경고를 없앨 수 없다면 `SuppressWarnings("unchecked)` 애너테이션으로 경고를 숨겨놓자.

## item 28

### 배열보다는 리스트를 활용하라

배열과 리스트는 두 가지 차이가 있다.

### 첫 번째

배열은 `Convariant` (공변)이다. 쉽게 말해 Sub가 Super의 하위 타입이라면 배열 Sub[]는 배열 Super[]의 하위 타입이 된다는 뜻이다.

반면 제네릭은 `Invariant`하다.

즉 서로다른 두 타입을 갖는 컬렉션 `List<Type1>`와 `List<Type2>`는 엄밀히 다른 타입이다.

### 두 번째

배열은 reify(실체화)된다.

배열은 런타임에도 자신이 담기로 한 원소의 타입을 인지하고 확인한다.

그러나 제네릭 타입은 컴파일 타입 이후 타입이 제거된다. 즉 런타임에는 알 수없다는 뜻이다.

이러한 소거 기법은 제네릭이 지원되기 이전 레거시 코드와 제네릭 타입을 함께 사용할 수 있게 하기 위한 메커니즘이었다.

### 둘의 교착점

이러다보니 배열과 제네릭은 유연하게 어우러지지 못한다.

제네릭 배열을 만들 수 없는 이유는 `Type Safe`하지 않기 때문이다.

배열은 런타임에도 타입 안전하지만, 컴파일 타임에는 그렇지 않다.

제네릭은 런타임에는 타입 세이프하지 않지만, 컴파일 타임에는 안전하다.

때문에 둘은 서로 다른 메커니즘을 갖고 있으므로 섞어 쓰기가 어려우니, 배열을 리스트로 치환하는 방식으로 사용하도록 하자.

## item 29

### 이왕이면 제네릭 타입으로 만들어라

클라이언트에서 직접 형변환을 해야하는 타입보다는 제네릭 타입이 훨씬 더 안전하고 쓰기 편하다.

만약 새로운 타입을 설계한다면 형변환 없이도 사용 가능하게 설계하라.

제네릭 타입은 코드 재사용성을 높여주고 타입 세이프하게 만들어준다.

## item 30

### 이왕이면 제네릭 메서드로 만들라

사실 제네릭 메서드는 꽤 유용하다.

제네릭 메서드를 잘 만들어두면 무궁무진하게 재활용할 수 있는 메서드를 만들 수 있다.

또한 이 제네릭 메서드 중 재귀적 타입 한정(recursive type bound)라는 개념이 존재하는데,

Comparable 인터페이스에서 아래처럼 쓰인다.

```java
public static <E extends Comparable<E>> E max(Collection<E> c);
```

빈번하게 사용하는 개념은 아니지만 자기 자신이 들어간 표현식을 사용하여 타입 매개변수의 허용 범위를 재한할 수 있다.

`<E extends Comparable<E>>`는 모든 타입 E는 자기 자신과 비교할 수 있다는 의미를 내포하고 있다.

제네릭 메서드는 클라이언트 입장에서 매개변수와 반환값을 명시적으로 형변환해야하는 메서드보다 더 안전하고 사용하기편하다.

타입도 그렇고 메서드도 그렇고 가급적 형변환 없이 사용하는 것이 가장 좋으며 그러기 위해 많은 경우에서 제네릭을 사용해야한다.

## item 31

### 한정적 와일드카드를 사용해 API 유연성을 높이라

한정적 와일드 카드란 다음과 같다.

```java
public void pushAll(Iterable<? extends E> src) {
    for (E e : src) {
        push(e);
    }
}
```

이는 E의 하위 타입이 Iterable이어야 한다는 의미이다.

이러한 와일드 카드 타입 한정을 사용하면 조금 더 Type Safe한 API를 만들어 클라이언트에게 제공할 수 있다.

이러한 와일드 카드 타입을 언제 써야하는지 기억하는데 `PECS`라는 공식이 있다.

`Producer-Extends, Consumer-Super`라는 의미이다.

즉 매개변수화 타입 T가 생산자라면 `<? extends T>`를, 소비자라면 `<? super T>`를 사용하라는 의미이다.

pushAll의 src 매개변수는 Stack이 사용할 E 인스턴스를 생성하므로 src의 적절한 타입은 생산자이다.

반대로 소비자는 `Comparable<? super E>`가 존재한다.

또한 `?`를 사용하면 와일드카드 타입이 존재한다.

아래의 두 메소드 중 어느것이 더 유용할까?

```java
public static <E> void swap(List<E> list, int i, int j);
public static void swap(List<?> list, int i, int j);
```

public API라면 두 번재가 더 낫다.

어떤 리스트든 이 메서드에 넘기면 명시한 인덱스 원소를 교환해줄 것이기 때문이다.

그러나 이 코드를 실제로 문제가 발생한다.

왜냐하면 `List<?>`에는 null 외에는 어떤 값도 넣을 수 없기 때문이다.

이를 회피하기 위해 `private 도우미 메서드`를 사용할 수 있는데 다음과 같다.

```java
public static void swap(List<?> list, int i, int j) {
    swapHelper(list,i,j);
}

public static <E> void swapHelper(List<E> list, int i, int j) {
    list.set(i, list.set(), list.get(i));
}
```

도우미 메서드를 제네릭 메서드로 만들어서 이를 회피해볼 수 있다.

조금 복잡하더라도 와일드 카드 타입을 적용하면 API가 훨씬 유연해진다.

`PECS`를 꼭 기억하자.

## item 32

### 제네릭과 가변인수를 함께 쓸 때는 신중하라

다음과 같은 예시 코드를 보자.

```java
public static void dangerous(List<String> ...stringLists) {
    List<Integer> intLists = List.of(42);
    Object[] objects = stringLists;
    object[0] = intList; // 오염 발생
    String s = stringLists[0].get[0] // ClassCastException
}
```

제네릭 varargs 배열 매개변수에 값을 저장하는 것은 안전하지 않다.

자바 7부터는 `@SafeVarargs` 애너테이션이 추가되어 제네릭 가변인수 메서드 작성자가 클라이언트 측에서 발생하는 경고를 숨길 수 있게 되었다.

즉, `@SafeVarargs`는 개발자가 해당 메서드가 안전하니 믿고 써도 좋다는 증명을 위한 장치이다.

그러나 가변인수와 제네릭은 궁합이 좋지 않다.

가변인수 기능은 배열을 토출하여 추상화가 완벽하지 못하고 제네릭과 배열 타입 규칙이 서로 다르기 때문에 혼용해서 사용하지 말자.

그러나 반드시 필요한 경우라면 메서드가 타입 안전한지 확인한 다음 `@SafeVarargs` 애너테이션을 붙여 클라이언트에게 경고 메시지가 발생하지 않도록 하자.

## item 33

### 타입 안전 이종 컨테이너를 고려하라

제네릭은 `Set<E>`, `Map<K,V>`등의 컬렉션이나 `ThreadLocal<T>`와 같은 단일 원소 컨테이너에서도 흔히 쓰인다.

데이터베이스의 경우 행(row)은 임의 개수 열(column)을 가질 수 있는데, 모두 열을 타입 안전하게 사용할 수 있으면 꽤 좋을 것이다.

컨테이너 대신 키를 매개변수화한 다음, 컨테이너에 값을 넣거나 뺄 때 매개변수화한 키를 함께 제공하면 된다.

이러면 제네릭 타입 시스템이 값의 타입이 키와 같음을 보장해줄 것이다. 이러한 설계 방식을 이종 컨테이너 패턴 `type safe heterogeneous container pattern`이라고 부른다.

아래 코드를 봐보자. 키가 매개변수화 되었다는 점만 빼면 일반 맵처럼 보일 것이다.

```java
public class Favorites {
    public <T> void putFavorite(Class<T> type, T intsnace);
    public <T> T getFavorite(Class<T> type);
}
```

위 Favorites 클래스를 활용하여 String, Integer, Class 인스턴스를 저장, 검색 해보자.

```java
public static void main(String[] args) {
    Favorites f = new Favorites();

    f.putFavorite(String.class, "Java");
    f.putFavorite(Integer.class, 12312412);
    f.putFavorite(Class.class, Favorites.class);

    String favoriteString = f.getFavorite(String.class);
    int favoriteInteger = f.getFavorite(Integer.class);
    Class<?> favoriteClass = f.getFavorite(Class.class);

    // 출력
}
```

Favorites는 `Type Safe`하다.

맵과 달리 여러 타입의 원소를 담을 수 있다.

따라서 Favorites는 타입 안전 이종 컨테이너라 부를만 하다.

컬렉션 API로 대표되는 일반적인 제네릭 형태에서 한 컨테이너가 다룰 수 있는 타입 매개변수의 수가 고정되어있다.

컨테이너 자체가 아닌 키를 매개변수로 두면 이러한 제약이 없는 타입 안정 이종 컨테이너를 만들 수 있다.

타입 안전 이종 컨테이너에서는 Class를 키로 쓰며, 이런 식으로 쓰이는 Class 객체를 타입 토큰이라고 부른다.

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
