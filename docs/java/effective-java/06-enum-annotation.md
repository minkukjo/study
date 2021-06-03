---
id: 06-enum-annotation
title: 06. 이넘 타입과 애너테이션
---

> 자바에는 특수한 목적의 참조 타입이 두 가지가 있다.

> 하나는 열거 타입(enum 타입이라고도 부름)이오, 다른 하나는 인터페이스의 일종인 애너테이션이다.

> 이 타입들을 바르게 사용하는 방법에 대해 공부해보자.

## int 상수 대신 열거 타입을 사용하라

> item 34

int 상수로 관리하기 보다는 열거타입을 사용하는 편이 좋다.

기본적으로 열거타입은 클린 코드를 지향하는 개발자라면 다들 이미 쓰고 있을 것이다.

그래서 깊게 알아보지 않고 생략한다.

## ordinal 메서드 대신 인스턴스 필드를 사용하라

> item 35

가급적이면 ordinal 메서드보다는 인스턴스 필드를 사용하는 편이 좋다.

그 이유는 상수 선언 순서를 바꾸는 순간 메소드가 제대로 동작하지 않기 때문에 ordinal() 메소드에 의존하기 보다는, 인스턴스 필드를 선언하여 사용하자.

```java
public enum Ensemble {
    SOLO, DUET, TRIO;

    public int numberOfMusicians() { return ordinal() + 1; }
}
```

위는 잘못된 코드이다.

아래처럼 사용하도록 하자.

```java
public enum Ensemble {
    SOLO(1), DUET(2), TRIO(3);

private final int numberOfMusicians;
    Ensemble(int size) {
        this.numberOfMusicians = size;
    }
}
```

## 비트 필드 대신 EnumSet을 사용하라

> item 36

열거 값들이 주로 집합으로 사용되는 경우 각 상수에 서로 다른 2의 거듭제곱 값을 할당한 정수 열거 패턴을 사용해왔다고 한다.

아래를 보라.

```java
public class Text {
    public static final int STYLE_BOLD = 1 << 0;
    public static final int STYLE_ITALIC = 1 << 1;
    public static final int STYLE_UNDERLINE = 1 << 2;
}
```

상당히 올드패션의 기법이라고 한다.

이러한 비트 필드의 단점은 정수 열거 상수의 단점을 그대로 지닌데다가 다음의 문제까지 포함하고 있다.

비트 필드 값이 그대로 노출될 경우 단순 정수 열거 상수를 출력할 때 보다 해석하기가 더 어렵고, 비트 필드 하나에 녹아있는 모든 원소를 순회하기도 까다롭다.

열거타입의 집합을 사용해야한다면 EnumSet을 사용하도록 하자.

```java
public class Text {
    public enum Style { BOLD, ITALIC, UNDERLINE };

    public void applyStyles(Set<Style> styles) {
        ....
    }
}

Text text = new Text();
text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));
```

훨씬 깔끔하고 보기도 좋다.

열거 타입의 집합을 사용해야한다면 EnumSet을 사용하도록 하자.

## ordinal 인덱싱 대신 EnumMap을 사용하라

> item 37

배열에서 인덱스를 얻고자 한다면 ordinal를 종종 사용할 수 있다.

그런데 사실 이러한 ordinal 인덱싱은 좋지않다.

ordinal을 통한 배열 인덱싱은 사실상 내부적으로 많은 문제를 야기한다.

가령 해당 타입의 정수 값이 정말 올바른지를 판단할 수 없어서 런타임에서나 되어야 에러를 만날 수 있다.

이런 상황에서는 `EnumMap`을 사용해보자.

EnumMap은 쉽게 말해 Enum의 값을 Key로 갖는 맵이다.

Map의 키가 Enum이므로 그 값의 범위와 상수를 보장해주어 더욱 더 안전하다.

그리고 Enum.ordinal은 가급적 사용하지 말아야한다.

## 확장할 수 있는 열거 타입이 필요하다면 인터페이스를 사용하라

> item 38

인터페이스를 사용하여 확장 가능 열거 타입을 만들 수 있다.

```java
public interface Operation {
    double apply(double x, double y);
}

public enum BasicOperation implements Operation {
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
    ...
}
```

이처럼 이넘 타입은 인터페이스를 구현하여 확장이 가능하다.

이 확장 가능한 이넘 타입을 흉내내는 방식에도 한 가지 문제가 있으니, 바로 이넘 타입끼리는 구현을 상속할 수 없다는 점이다.

이넘 타입 자체는 확장이 어렵지만, 인터페이스와 그 인터페이스를 구현하는 이넘 타입을 함께 사용해 확장 이넘 타입을 만들 수 있다.

## 명명 패턴보다 애너테이션을 사용하라

> item 39

명명 패턴이란, 메서드 이름을 반드시 `test`로 시작해야한다는 (junit 3에서는 실제로 이랬다고 한다) 메소드명 규칙을 의미한다.

문제는 이러한 명명 패턴은 오타를 내서는 안되며, 실수로 이름을 `tset어쩌고저쩌고`로 지으면 JUnit 3가 그냥 지나가버리기 때문에 개발자는 이 테스트가 통과했다고 오해를 할 수 있다.

이러한 방법은 JUnit 4에서 애너테이션으로 변경되었고 `@Test` 애너테이션이 붙은 메소드들만 테스트의 대상이 되었다.

자바에서 애너테이션은 단순히 주석으로 취급한다.

왜냐하면 애너테이션은 기본 값이 컴파일 시점에 사라지기 때문이다.

그러나 애너테이션 Retention을 바꾸면 런타임에도 사라지지않고 남아있는 애너테이션을 정의할 수 있다.

이러한 런타임에도 존재하는 애너테이션을 자바 리플렉션 API를 사용해 코드를 조작하여 개발한 프레임워크가 바로 `Spring Framework`이다.

## @Override 애너테이션을 일관되게 사용하라

> item 40

상위 클래스에서 사용하는 메서드를 재정의하는 경우라면 반드시 `@Override` 애너테이션을 붙이는 편이 좋다.

추상 클래스의 추상메서드의 경우 굳이 `@Override`를 붙이지 않아도 괜찮지만, 가급적이면 일관성을 위해 붙이는 것도 나쁘지않다.

재정의할 모든 메서드에 `@Override`를 붙임으로써 실수했을 때 컴파일러가 알려줄 수 있도록 하자.

## 정의하려는 것이 타입이라면 마커 인터페이스를 사용하라

> item 41

아무 메서드도 없고, 단지 자신을 구현하는 클래스가 특정 속성을 가짐을 표시해주는 인터페이스를 마커 인터페이스라고 부른다.

대표적으로 `Serializable` 인터페이스는 자신을 구현한 클래스의 인스턴스는 `ObjectOutputStream`을 통해 `write`할 수 있다고, 즉 직렬화 가능하다고 알려주는 인터페이스이다.

마커 애너테이션이 등장하면서 마커 인터페이스는 구식이 되었다는 이야기를 들었을텐데 이는 사실이 아니다.

마커 인터페이스는 여전히 마커 애너테이션 보다 두 가지 정도 좋은 점이 있다.

첫 번째는, 마커 인터페이스는 이를 구현한 클래스의 인스턴스들을 구분하는 타입으로도 쓸 수 있다.

두 번째는, 적용 대상을 더 정밀하게 지정할 수 있다는 점이다.

가령 애너테이션의 경우 `ElementType.TYPE`으로 선언한 애너테이션은 모든 타입(클래스, 인터페이스, 이넘 타입, 애너테이션)에 달 수 있다.

그러나 부착할 수 있는 타입을 더 세밀하게 조정하지는 못한다.

그러나 마커 인터페이스의 경우 적용하고 싶은 클래스에서만 인터페이스를 구현하면 끝이다.

반대로 마커 애너테이션이 마커 인터페이스보다 좋은 점은, 거대한 애너테이션 시스템(Spring)의 지원을 받는다는 점을 꼽을 수 있다.

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
