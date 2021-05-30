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

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
