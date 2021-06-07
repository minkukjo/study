---
id: 08-method
title: 08. 메소드
---

> 메서드 설계 시 주의할 점들에 대해 알아보자

> 사용성, 견고성, 유연성에 집중하자

## 매개변수가 유효한지 검사하라

> item 49

- 매개변수 검사를 제대로 안하면 무슨 일이 생길까

  - 메서드가 잘 수행되는 것 처럼 보이다가 예상치 못한 곳에서 Exception
  - 성공은 하는데, 객체를 이상하게 만들어버림

- 매개변수 검사에 실패하면 실패 원자성(**failure atomicity**)를 어기는 결과를 낳을 수 있다.

- 매개변수 값이 잘못됐을 때 던지는 예외를 문서화해야한다.

- 자바는 Null 처리가 까다롭다. 그런 측면에서 Kotlin의 Null 처리는 상당히 Nice 한데... 쩝 자바 쓰기 싫다...

- 매개변수의 Null 검증은 `@Nullable` 애노테이션으로 해볼 수 있지만 표준적인 방법은 아니다.

### 자바 7 requireNonNull 메서드의 사용

```java
this.strategy = Objects.requireNonNull(Strategy, "전략이 엄서요");
```

- 자바 7에서 제공하는 `java.util.Objects.requireNonNull` 메서드는 유연하고 사용하기 편리하니 null 검사를 수동으로 하지 않아도 된다.

- 참고로 두 번째 파라미터는 예외 메시지이다.

- 자바 9에서는 Objects에 범위 검사 기능도 더해졌다. (이 클래스를 계속 확장해나갈 모양인 듯?)

  - **checkFromIndexSize**, **checkFromToIndex**, **checkIndex**라는 메서드들인데, null 검사 메서드만큼 유연하지는 않다. (써본적 없음)
  - 예외 메시지를 지정하는 기능도 없고 리스트와 배열 전용으로 설계되었다.

### public method가 아닌 경우의 null check

- 사실 이 내용은 몰랐었다. Intellij의 자동 널체크 기능을 사용하다보면 **assert** 구문을 사용하는 경우가 종종 있었는데, 접근 제한자 때문이었을 줄이야

```java
private static void sort(long a[], int offset, int length) {
    assert a != null;
    assert offset >= 0 && offset <= a.length;
    assert length >= 0 && length <= a.length - offset;
}
```

- public 메서드가 아닌 메서드라면 단언문(assert)를 사용해 유효성 검사를 할 수 있다.

- 단언문은 몇 가지 면에서 일반적인 유효성 검사와 다르다.

- 첫 번째는, 실패하면 **AssertionError**를 던진다.

- 두 번째는, 런타임에선 아무런 효과도, 성능 저하도 없다.

### Null 체크는 언제가 적기일까

- 메서드 **Body** (핵심 비즈니스 로직이 자리하는 영역)가 실행하기 전에 매개변수 유효성 검사를 하는 편이 좋다.

- 물론 예외는 있는데, 검사 비용이 지나치게 비싸거나 실용적이지 않을 때, 혹은 계산 과정에서 암묵적으로 검사가 수행되는 경우에는 **Body**에서 수행되어도 상관없다.

- 가령 `Collection.sort(List)`처럼 객체 리스트를 정렬하는 경우에서 리스트 안의 객체들은 서로 상호 비교를 할 수 있어야 한다.

- 만약 리스트에 비교될 수 없는 타입의 객체가 들어있다면 그 객체와 비교할 때 `ClassCastException`을 던질 것이다.

- 그러나 이러한 암묵적 유효성 검사에 너무 심취하여 의존하면 실패 원자성을 해칠 수 있으니 주의하자.

### 요약

- 메서드나 생성자를 작성할 때 그 매개변수들에 어떤 제약이 필요한지 생각하자

- 그 제약들은 문서화하고, 메서드 코드 시작 부분에서 명시적으로 검사하자

## 적시에 방어적 복사본을 만들라

> item 50

- 객체지향에서 가장 중요한 개념 중 캡슐화라는 개념이 있다.

- 연관성 있는 속성들을 하나의 객체로 묶고, 실제 내용을 외부로부터 감추어 은닉한다는 개념이다.

- 이번 챕터에서는 클라이언트가 이러한 캡슐화를 뚫으려고 눈에 불을 키고 있다고 가정하고 방어적 프로그래밍을 해야한다는 내용을 담고 있다.

### 캡슐화가 클라이언트에 의해 깨지는 순간

```java
public final class Period {
    private final Date start;
    private final Date end;

    public Period(Date start, Date end) {
        if(start.compareTo(end) > 0) {
            throw new IllegalArgumentException(start + "가 " + end + "보다 늦다.");
        }
        this.start = start;
        this.end = end;
    }

    public Date start() {
        return start;
    }

    public Date end() {
        return end;
    }
    ... 생략
}
```

```java
Date start = new Date();
Date end = new Date();
Period period = new Period(start, end);
end.setYear(99); // p가 수정되어버렸다.
```

- `period`를 불변으로 만들고 싶었으나, 생성자를 만드는 시점에 사용되는 `end`가 외부에서 값이 바뀌어버려서 불변이어야하는 `period`의 불변성이 지켜지지 않았다.

- 자바 8 이후로는 비교적 쉽게 해결할 수 있는데 기본적으로 불변 인스턴스인 `LocalDateTime`이나 `ZonedDateTime`을 사용해도 된다.

- **Date는 낡은 API이니 새로운 코드를 작성할 때는 더이상 사용하면 안된다**. (그러나 우리 팀은 여전히 쓰고 있다...)

- 이러한 외부 공격을 방어하기 위해서는 생성자에서 받은 가변 매개변수를 방어적으로복사 해야한다.

```java
public final class Period {
    private final Date start;
    private final Date end;

    public Period(Date start, Date end) {
        this.start = new Date(start.getTime());
        this.end = new Date(end.getTime());

        if(start.compareTo(end) > 0) {
            throw new IllegalArgumentException(start + "가 " + end + "보다 늦다.");
        }
    }

    ... 생략
}
```

- 매개변수 검사를 마지막에 하는 것이 순서가 얼핏 이상해보이지만 나름 이유가 있다.

- 멀티 쓰레드 환경에서 원본 객체의 유효성 검사 이후 복사본을 만드는 순간에 다른 스레드가 원본 객체를 수정할 위험이 있기 떄문이다.

- `clone` 메서드를 사용하지 않은 점도 주목할만 한데, 매개변수가 제 3자에 의해 확장될 수 있는 타입이라면 방어적 복사본을 만들 때 `clone`을 사용하지 않는 편이 좋다.

- 왜냐하면 Date 클래스는 `final`이 아니므로 `clone`을 Date가 정의한 것이 아닐수도 있다.

- 만약 클라이언트가 `Date`를 상속받는 하위 클래스를 넘겨버리면 하위 클래스의 인스턴스를 반환할 수도 있기 때문이다.

- 생성자를 수정하면서 공격은 막아냈지만, `Period`는 여전히 변경가능하다.

```java
Date start = new Date();
Date end = new Date();
Period period = new Period(start, end);
period.end.setYear(99); // p가 수정되어버렸다.
```

- 이 공격은 가변 필드의 방어적 복사본을 반환하면 된다.

```java
    public Date start() {
        return new Date(start.getTime());
    }

    public Date end() {
        return new Date(end.getTime());
    }
```

- 이렇게 하면 `Period`는 이제 철옹성이다.

- `item 13`에서도 언급했지만 `clone`은 지양하고 생성자나 정적 팩터리를 애용하자.

### 교훈

- 우리는 일련의 작업을 통해 **가급적이면 불변 객체를 조합해 객체를 구성하는 편이 더 낫다**는 결론에 도달하게 된다.

- 저자는 이러한 방어적 복사를 생략하려면 명확한 **문서화**를 **강조** **강조** 또 **강조**하고 있다. (모두 다 알지만 귀찮아서 안하는 그것)

## 메서드 시그니처를 신중하게 설계하라

> item 51

- 메서드 이름을 신중하게 짓자. 클린 코드의 기본!

- 편의 메서드를 너무 많이 만들지는 말자. 메서드가 너무 많은 클래스는 사용하고 문서화하기 어렵다. (마찬가지로 클래스의 크기는 가급적 작게 유지하자)

- 매개변수 목록은 가능한 짧게 유지하자. 역시나 클린코드에서 본 개념.
  - 특히 같은 타입의 매개변수가 여러개 나오면 지옥

### 많은 매개변수 목록을 짧게 줄여주는 기술

#### 1. 여러 메서드로 쪼갠다

- 쪼개진 메서드들은 각각은 원래 매개변수 목록의 부분집합을 받는다.

- 가령 자바 컬렉션 프레임워크의 `List` 인터페이스가 좋은 예시이다.

- 리스트에서 지정된 범위에서 주어진 원소의 인덱스를 찾을 때 메서드로 구현하려면 `부분 리스트의 시작`, `부분 리스트의 끝`, `찾을 원소` 3개의 매개변수가 필요하다.

- `List`에서는 부분 리스트를 반환하는 `subList` 메서드와 원소의 인덱스를 알려주는 `indexOf` 메서드를 별개로 제공한다.

```java
public String getElementBetweenRange(List<String> words, int start, int end, String target) {
    List<String> wordsInRange = words.subList(start, end);
    int targetIndex = wordsInRange.indexOf(target);
    return wordsInRange.get(targetIndex);
}
```

#### 2. 매개변수 여러 개를 묶어주는 도우미 클래스를 만든다

```java
@Data
class Word {
    private List<String> words;
    private int start;
    private int end;
    private String target;

    public Word(List<String> words, int start, int end, String target) {
        ...
    }
}
```

```java
public String getElementBetweenRange(Word word) {
    List<String> words = word.getWords();
    int start = word.getStart();
    int end = word.getEnd();
    String target = word.getTarget();

    List<String> wordsInRange = words.subList(start, end);
    int targetIndex = wordsInRange.indexOf(target);
    return wordsInRange.get(targetIndex);
}
```

- 레이어드 아키텍처에서 주로 쓰는 기법인데, 우리는 주로 `DTO`라고도 부른다.

- 넘겨주는 매개변수들을 하나의 클래스로 묶어버리는 기법이다.

#### 3. 앞서의 두 기법을 쓰까

```java
@Data
class Word {
    private List<String> words;
    private int start;
    private int end;
    private String target;

    public void setRange(int start, int end) {
        this.start = start;
        this.end = end;
    }
    ...
}
```

- 모든 매개변수를 하나로 추상화한 객체를 정의하고, 클라이어늩에서 이 객체의 세터 메서드를 호출해 필요한 값을 설정하게 한다.

- 각 세터 메서드는 매개변수 하나 혹은 서로 연관된 몇 개만 설정하게 한다.

- 매개변수의 타입으로는 클래스보다는 인터페이스가 더 낫다.

```java
@Data
public interface Words {

    List<String> getWords();
}
```

- `Map`을 떠올려보라, 우리는 메서드에 `HashMap` 타입을 명시해야만 사용할 수 있는 메서드를 만들어본적은 없을 것이다.

### boolean 보다는 원소 2개짜리 이넘 타입을 사용하자

- 이넘 타입을 사용하면 코드 가독성이 올라간다. 가급적 이넘 타입을 사용하자.

## 다중 정의는 신중히 사용하라

> item 52

```java
public class CollectionClassifier {
    public static String classify(Set<?> s) {
        return "Set";
    }

    public static String classify(List<?> lst) {
        return "List";
    }

    public static String classify(Collection<?> c) {
        return "Unknown Collection";
    }

    public static void main(String[] args) {
        Collection<?>[] collections = {
                new HashSet<>(),
                new ArrayList<>(),
                new HashMap<String, String>().values()
        };

        for (Collection<?> c : collections)
            System.out.println(classify(c));
    }
}
```

- 이 코드의 출력 결과는 어떨까?

- **집합**, **리스트**, **그 외**를 차례대로 출력할 것 같지만 실제로는 **그 외**만 세 번 찍힌다.

- 그 이유는 오버로딩된 메소드들 중 컴파일 타임에 정해지기 떄문이다.

- 컴파일 타임에서의 반복문 안의 c는 여전히 `Collection<?>` 타입이다.

- 런타임에서야 타입이 바뀌겠지만 컴파일 타임에서 이미 매개변수의 타입이 정해졌으므로 계속해서 같은 메서드를 호출하는 것이다.

- 이처럼 **재정의한 메서드는 동적으로 선택되고, 오버로딩한 메서드는 정적으로 선택되기 때문이다**.

- 오버로딩은 때때로 혼동을 일으키기도 하므로, 안전하고 보수적으로 가려면 매개변수 수가 같은 오버로딩은 가급적 만들지 말자.

- 오버로딩 대신 메서드 이름을 다르게 지어주는 방법도 있으니까 말이다.

### ObjectOutputStream의 좋은 예

- 오버 로딩을 사용하지 않은 좋은 예는 **ObjectOutputStream** 클래스이다.

- 이 클래스는 `write` 메서드에 모든 기본 타입과 일부 참조 타입용 변형을 가진다.

- 그런데 오버 로딩이 아닌, 모든 메서드에 다른 이름을 지어주었다.

- `writeBoolean`(boolean), `writeInt`(int), `writeLong`(long)과 같은 식이다.

- 이 방식이 오버로딩보다 나은 점은, `read` 메서드와 짝을 이루기 좋다는 것이다. `readBoolean`, `readInt`, `readLong` 등과 같이 말이다.

### 람다에서 주의할 부분

- 만약 함수형 인터페이스를 인수로 받을 때 매개변수가 하나이고, 다른 함수형 인터페이스를 받는 오버로딩 메소드는 어떨까?

- 이 경우 역시 서로 다른 함수형 인터페이스라도 인수 위치가 같으면 혼란이 생길 수 있다.

- **메서드를 오버로딩할 때, 서로 다른 함수형 인터페이스라도 같은 위치의 인수로 받지 말자**

- 서로 다른 함수형 인터페이스이더라도 근본적으로는 다르지 않기 때문에 의도대로 동작하지 않을 수 있다.

### 요약

- 프로그래밍 언어에서 오버로딩을 지원하더라도 반드시 써야하는 것은 아니다.

- 특히 인수 개수가 같은 경우라면 오버로딩은 피하자.

- 만약 인수 개수가 같은 오버로딩을 해야한다면 메소드 명을 달리하자.

- 인수 개수가 같은 오버로딩 메소드는 그 메소드를 사용하는 개발자로부터 발생하는 잠재적 위험을 안고 있다.

## 가변인수는 신중히 사용하라

> item 53

- 가변인수 메서드는 명시한 타입의 인수를 0개 이상 받을 수 있다.

```java
public class Varargs {
    static int sum(int... args) {
        int sum = 0;
        for (int arg : args)
            sum += arg;
        return sum;
    }

    public static void main(String[] args) {

        System.out.println(sum());
        System.out.println(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    }
}
```

```java
// 결과
0
55
```

- 간단한 덧셈 예제에서의 가변인수 사용은 문제가 없다.

- 그러나 다음과 같은 코드처럼 인수가 1개 이상인 경우에만 사용할 수 있는 메서드라면 0개를 넣었을 때 런타임에서 에러가 발생할 것이다.

```java
static int min(int... args) {
    if (args.length == 0)
        throw new IllegalArgumentException("인수가 1개 이상 필요합니다.");
    int min = args[0];
    for (int i = 1; i < args.length; i++)
        if (args[i] < min)
            min = args[i];
    return min;
}
```

- 이 방식은 일단 코드 자체도 지저분하고 args 유효성 검사도 해야하며, min의 초기값을 **Integer.MAX_VALUE**로 설정하지 않고서는 for-each도 사용할 수 없다는 점이다.

- 다행히 훨씬 더 나은 대안이 있는데, 매개 변수를 두개 받으면 된다.

```java
static int min(int firstArg, int... remainingArgs) {
    int min = firstArg;
    for (int arg : remainingArgs)
        if (arg < min)
            min = arg;
    return min;
}
```

- 첫 번째 매개변수를 받고, 두 번째 값 부터는 가변 인수를 통해 받으면 된다.

### 가변인수와 성능

- 가변인수는 내부적으로 배열을 새로 할당하고 초기화하는 작업을 진행한다.

- 그 말은 즉 가변인수가 있는 메서드를 호출할 때 마다 새롭게 배열을 할당하고 초기화한다는 사실이다.

- 이러한 초기화를 막기 위해, 메서드 오버로딩을 사용해서 특정 개수만큼은 메서드 오버로딩을 통해 정의하고, 그 이상은 가변인수를 사용하는 것이다.

```java
public void foo() { }
public void foo(int a1) { }
public void foo(int a1, int a2) { }
public void foo(int a1, int a2, int a3) { }
public void foo(int a1, int a2, int a3, int... rest) { }
```

## null이 아닌, 빈 컬렉션이나 배열을 반환하라

> > item 54

```java
private final List<Cheese> cheesesInStock = ...;

public List<Cheese> getCheese() {
    return cheesesInStock.isEmpty() ? null
        : new ArrayList<>(cheesesInStock);
}
```

- null을 반환하는 것은 왜 나쁠까?

- 이 메서드를 사용하는 클라이언트는 다음과 같은 로직을 필연적으로 사용해야한다.

```java
List<Cheese> cheeses = shop.getCheeses();
if (cheeses != null && cheeses.contains(Cheese.STILTON))
    System.out.println("앙 기분좋아");
```

- 컬렉션이나 배열과 같은 컨테이너가 비었을 때 null을 반환하면 매번 이런 방어 코드를 넣어야한다. -> 귀찮다.

- 그렇기에 가급적이면 null 보다는 빈 컬렉션을 반환해주는 편이 더 낫다.

```java
public List<Cheese> getCheese() {
    return new ArrayList<>(cheesesInStock);
}
```

- JPA 역시 조회 쿼리를 날릴 때 결과가 없으면 빈 컬렉션을 반환해준다.

## 옵셔널 반환은 신중하라

- 자바 8에서 새롭게 추가된 `Optional<T>`는 null이 아닌 T 타입 참조를 담거나 아무것도 담지 않을 수 있는 타입이다. (내가 자바를 싫어하게 된 가장 큰 이유)

- 이 옵셔널을 사용하면 null을 반환하는 메소드 보다는 조금 더 안전하고 깔끔하게 사용할 수 있다는 장점이 있다.

- 옵셔널은 기본적으로 원소를 최대 1개 가질 수 있는 `불변` 컬렉션이다. 그렇다고 해서 정말로 `Collection<T>`를 구현한건 아니고, 원칙적으로는 그렇다.

- 최대 1개를 가질 수 있으니 아무것도 가지지 않은 옵셔널은 `비어있다`고 표현한다.

### 옵셔널 사용 시 주의점

- **컬렉션**, **스트림**, **배열**, **옵셔널**은 옵셔널로 감싸면 안된다.

- 박싱된 기본 타입을 감싸는 옵셔널은 기본 타입 자체보다 무거울 수 밖에 없다. 박싱된 기본 타입을 담은 옵셔널을 반환하지 않도록 하자.

- 옵셔널은 필드에 선언하는 것도 확실히 좋은 상황은 아니다.

- 그러나 예외적으로 Primitive 타입인 필드의 값이 없음을 나타낼 때 getter가 옵셔널을 반환하게 해주는 것은 좋을 수 있다고 한다. (그럴거면 코틀린 쓰자)

### 요약

- null 처리 깔끔하게 하고 싶어서 옵셔널 쓸거면 코틀린 쓰자

## 공개된 API 요소에는 항상 문서화 주석을 작성하라

- [Open API](https://swagger.io/specification/)

- [Spring Rest Docs](https://docs.spring.io/spring-restdocs/docs/current/reference/html5/)

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크

```

```
