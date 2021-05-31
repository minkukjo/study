---
id: 07-lambda-stream
title: 07. 람다와 스트림
---

> 자바 8에서 함수형 인터페이스, 람다, 메서드 참조라는 개념이 추가 되면서 드디어 자바에도 **함수형 프로그래밍**을 흉내낼 수 있게 되었다.

> 게다가 스트림 API는 데이터 원소의 시퀀스 처리를 라이브러리에서 지원하기 시작했다.

> 이번 장에는 이 람다와 스트림을 어떻게 효과적으로 사용할 수 이는지에 대해서 학습할 것이다.

## 익명 클래스보다는 람다를 사용하라

> item 42

- 익명 클래스의 인스턴스를 함수 객체로 사용하는 대신 람다를 쓰자

```java
Collections.sort(words,
        (s1, s2) -> Integer.compare(s1.length(), s2.length()));
```

- 람다른 기본적으로 모든 매개변수 타입을 생략하자. 컴파일러가 문맥을 살펴 타입을 추론해준다. ( 이 내용은 너무 복잡해 이 규칙을 굳이 이해하려고 하진 말자. 몰라도 된다. )

### 람다의 개선 비교자 생성 메서드

```java
Collections.sort(words, comparingInt(String::length));
```

- 비교자 생성 메서드를 사용하면 조금 더 축약할 수 있다.

### List default method의 사용

```java
words.sort(comparingInt(String::length));
```

- 자바 8부터 리스트에 추가된 sort default method를 사용해 더욱 축약 가능하다.

### 상수 클래스를 인스턴스로 갖는 이넘 클래스

```java
public enum Operation {
    PLUS("+") {
        public double apply(double x, double y) {
            return x + y;
        }
    }
    MINUS("-") {
        public double apply(double x, double y) {
            return x - y;
        }
    }
    TIMES("*") {
        public double apply(double x, double y) {
            return x * y;
        }
    }
    DIVIDE("/") {
        public double apply(double x, double y) {
            return x / y;
        }
    }

    private final String symbol;

    Operation(String symbol) { this.symbol = symbol; }
    @Override public String toString() { return symbol; }
    public abstract double apply(double x, double y);
}
```

- 이전 챕터에서 상수별 클래스를 구현하는 것 보단 열거 타입에 인스턴스 필드를 두는 편이 낫다고 했다.

- 람다를 이용하면 조금 더 깔끔하게 개발할 수 있다.

### 함수 객체를 인스턴스 필드에 저장해 상수별 동작을 구현한 이넘 타입

```java
public Operation {
    PLUS("+", (x, y) -> x + y),
    MINUS("-", (x, y) -> x - y),
    TIMES("*",(x, y) -> x * y),
    DIVIDE("/",(x, y) -> x / y);

    private final String symbol;
    private final DoubleBinaryOperator op;

    Operation(String symbol, DoubleBinaryOperator op) {
        this.symbol = symbol;
        this.op = op;
    }
    @Override public String toString() { return symbol; }
    public double apply(double x, double y) {
        return op.applyAsDouble(x, y);
    }
}
```

- 람다를 사용하여 더욱 깔끔하게 개선되었다.

- **DoubleBinaryOperator** 인터페이스는 `java.util.function` 패키지가 제공하는 다양한 함수 인터페이스 중 하나로, Double 타입 인수 2개를 받아 Double 타입 결과를 반환해준다.

### 람다 사용 시 주의점

- 반드시 람다가 좋은 것은 아니다. 람다는 이름도 없고 문서화도 못한다. 따라서 코드 자체로 명확히 설명이 되지 않거나 코드 줄 수가 많아지면 람다를 쓰지 말아야한다.

- 람다는 한 줄 일 때 가장 좋고, 세 줄 안에 끝내는 것이 좋다. 그 이상 넘어가면 가독성이 매우 나빠진다.

- 람다를 직렬화해서는 안된다.

### 핵심 정리

- 익명 클래스는 함수형 인터페이스가 아닌 타입의 인스턴스를 만들 때만 사용하자.

## 람다보다는 메서드 참조를 사용하라

> item 43

- 메서드 참조란 다음과 같은 코드를 의미한다.

```java
map.merge(key, 1, Integer::sum);
```

- 메서드 참조는 짧고 간결하므로 람다보다 훨씬 더 좋은 대안이 될 수 있다.

## 표준 함수형 인터페이스를 사용하라

> item 44

- 표준 함수형 인터페이스란 자바 8에서 제공하는 함수형 인터페이스를 말한다.

- Operator 인터페이스는 인수가 1개인 `UnaryOperator`와 2개인 `BinaryOperator`로 나뉘며, 반환값과 인수의 타입이 같은 함수를 뜻한다.

- `Predicate` 인터페이스는 인수 하나를 받아 `boolean` 타입으로 반환하는 함수이다.

- `Function` 인터페이스는 인수와 반환 타입이 다른 함수를 의미한다.

- `Supplier` 인터페이스는 인수를 받지 않고 값을 반환 하는 함수이고, `Consumer`는 인수를 하나 받고 반환 값은 없는 함수를 뜻한다.

- 흔한 경우는 아니지만 직접 함수형 인터페이스를 만들 수도 있다. 그 경우 `@FunctionalInterface` 애너테이션을 사용하자.

## 스트림은 주의해서 사용하라

> item 45

- 스트림은 자바 8부터 지원하는 데이터 처리 작업을 도와주는 기능이다.

- 스트림 API는 스트림과 스트림 파이프라인으로 구성된다.

- 스트림은 데이터 원소의 유한 혹은 무한 시퀀스를 의미한다.

- 스트림 파이프라인이란 소스 스트림에서 시작해 종단 연산으로 끝나며 하나 이상의 중간 연산이 있을 수 있다.

- 중간 연산은 스트림을 변환하는데 사용한다. 예를 들어 스트림의 타입을 변경하거나, 필터를 사용해볼 수 있다.

- 스트림 파이프라인은 함수형 프로그래밍의 특징 중 하나인 `Lazy Evaluation`를 제공한다.

- 스트림이 동작하는 타이밍은 마지막 종단 연산이 불렸을 때 이며 그 전까지의 스트림은 아무런 연산을 하지 않는다.

- 스트림은 얼핏 굉장히 멋져보이지만, 과용할 경우 코드 복잡도가 오히려 더 올라가는 역효과가 생긴다.

- 때문에 가급적이면 스트림을 남용하기 보다는 적절하게 사용하는 편이 좋다.

- 스트림과 반복 중 어느 쪽이 나은지 애매할 때는 둘 다 해보고 더 나은 쪽을 선택하자.

## 스트림에서는 부작용 없는 함수를 사용하라

> item 46

- 함수형 패러다임에서 순수 함수는 `input`에 대한 `output`이 항상 같은 함수를 의미한다.

- 이 처럼 스트림에서 역시 스트림 연산에 사용하는 모든 함수 객체들은 `side effect`가 존재해서는 안된다.

- `forEach`는 스트림 중 가장 덜 스트림 다운 기능이다. 이 연산은 값을 출력하는 것 외에는 사용하지 말도록 하자. (특히나 값을 바꾼다거나 하는 경우는 더더욱 없어야 한다.)

- 스트림을 올바르게 사용하기 위해서는 수집기 팩터리에 대해서 잘 알아야한다.

- toList, toSet, toMap, groupingBy, joining이 대표적인 수집기 팩터리이다.

## 반환 타입으로는 스트림보다 컬렉션이 낫다

> item 47

- 당연한 이야기지만, 스트림 자체만으로 다루는 것은 좋지 않다.

- 가급적이면 스트림 종단 연산에서 `.collect()` 메소드를 사용해 컬렉션 값으로 반환하여 사용하도록 하자.

- 물론 추후에 `Stream` 인터페이스가 `Iterable`을 지원하도록 자바가 수정된다면, 그 때는 스트림을 직접 다루는 것도 고려해볼만 하지만, 현재 자바 16버전 까지 그런 기능은 추가되지 않았다. 즉 앞으로도 추가될 일 없어 보임.

## 스트림 병렬화는 주의해서 적용하라

> item 48

- 자바 8에서 `parallel` 메서드만으로 스트림 파이프라인을 병렬 실행할 수 있는 멋진 기능이 생겼다.

- 그러나 실제로 이 `parallel` 메서드는 아주 특정 조건에서만 성능이 높아지고 대다수의 상황에서는 오히려 성능이 더 떨어진다.

- 데이터 소스가 `Stream.iterate`이거나 중간 연산으로 `limit`을 쓴다거나 하면 병렬화 성능 개선을 기대하기 어렵다.

- 스트림의 소스가 `ArrayList`, `HashMap`, `HashSet`, `ConcurrentHashMap`의 인스턴스이거나 배열, int 범위, long 범위형일 때 병렬화의 효과가 가장 좋다고 한다.

- 즉 `parallel`을 사용하기 위해서는 충분한 실험으로 성능 지표를 관찰하여 성능이 더 개선되고, 예상치못한 오류가 발생되지 않는 것을 확인했을 때만 사용하는 것이 좋다.

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
