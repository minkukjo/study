---
id: 02-object-create-destroy
title: 02. 객체 생성 파괴
---

> 객체를 만들어야할 때와 만들어야하지 않을 때를 구분해야한다.

> 올바른 객체 생성과 파괴에 대해서 공부해보자.

## 생성자 대신 정적 팩터리 메서드를 고려하라

> item 01

static 메소드를 사용하여 생성자를 대체할 수 있다.

생성자 대신 정적 메소들르 사용하는 것에 어떤 이점이 있을까?

**첫 번째**, 이름을 가질 수 있다.

소수를 반환하는 메소드를 생각해볼 때,

```Java
BigInteger(int, int, Random)

VS

BigInteger.probablePrime()
```

무조건 아래쪽이 더 의미가 가깝다고 느껴진다.

이는 클린코드에서 나온 내용과도 일맥상통하는 내용이다.

생성자 대신 정적 메소드를 통해 하고자하는 행위가 이름을 가진다는 것은 읽는 사람으로 하여금 결국 더욱 더 코드를 풍부하게 만들어준다.

**두 번째**, 호출될 때 마다 인스턴스를 새로 생성하지는 않아도 된다.

```java
Boolean.valueOf(boolean)
```

위 코드는 내부적으로 객체를 아예 생성하지않는다.

인스턴스를 캐싱해놓고 재활용하기 때문에 불필요한 객체 생성을 줄일 수 있다.

`플라이웨이트 패턴(FlyWeight Pattern)`이라는 디자인 패턴도 이와 비슷한 기법이라고 한다.

**세 번째**, 반환 타입의 하위 타입 객체를 반환할 수 있는 능력이 있다.

생성자는 반드시 생성하려는 생성자에 해당하는 타입이 반환되지만, 정적 메소드를 사용하면 하위 타입의 객체도 반환이 가능하다.

자바 8이전에는 인터페이스에 정적 메서드를 선언할 수 없어서, 인터페이스 내부에 `Companion Class`를 두는 것이 관례였다.

자바 8 이후부터 `Default Method`가 등장하면서 `Companion Class`를 둘 이유가 사라졌다.

**네 번째**, 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.

EnumSet 클래스는 생성자 없이 오직 정적 팩터리 메서드만 제공한다.

엘리먼트가 64개 이하면 `RegualrEnumSet`을, 65개 이상이면 `JumboEnumSet`을 반환해준다.

클라이언트 입장에서는 팩터리가 건네주는 객체가 클래스의 인스턴스인지를 모르고, 알 필요도 없다.

만약 `RegualrEnumSet`을 굳이 쓸 필요가 없다면 지워버리면 그만이다.

**다섯 번째**, 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다.

이러한 유연함은 서비스 제공자 프레임워크를 만드는데 근간이 되는데, 대표적으로 JDBC가 있다.

구현체들을 클라이언트에 제공하는 역할을 프레임워크가 통제하여, 클라이언트는 구현체를 모르더라도 해당 기능을 사용할 수 있게 해준다.

서비스 제공자 프레임워크는 3개의 핵심 컴포넌트로 이루어진다.

**Service Interface**, **Provider Registration API**, **Service Access API**

클라이언트는 **Service Access API**를 사용할 때 원하는 구현체의 조건을 명시해줄 수 있다.

만약 조건이 없다면 기본 구현체를 반환하거나 지원하는 구현체들을 하나씩 돌아가며 반환해준다.

이 **Service Access API**가 바로 서비스 제공자 프레임워크의 근간인 **유연한 정적 팩터리**이다.

### 정적 메서드 팩토리의 단점

**첫 번째** 상속을 하려면 public, protected 생성자가 필요하니, 정적 팩터리 메소드만 제공하면 하위 클래스를 만들어낼 수 없다.

물론 이러한 패턴이 상속을 지양하고 컴포지션을 유도하다보니, 이게 어떻게 보면 장점이 될 수도 있다.

**두 번째**, 정적 팩터리 메서드는 프로그래머가 찾기가 어렵다.

생성자처럼 API 설명에 명확히 드러나지가 않아서 문서를 읽어봐야한다.

그러나 요즘은 IDE가 좋아서 딱히..?

정적 팩토리 메서드의 예시는 다음과 같다.

`from`: 매개변수를 하나 받아서 해당 타입의 인스턴스를 반환하는 형변환 메서드.

`of`: `from`과 다르게 여러 매개변수를 받는다.

`valueOf`: `from`과 `of`보다 더 자세한 버전

`instance` : 혹은 `getInstance` 매개변수로 명시한 인스턴스를 반환하지만 같은 인스터임을 보장해주진 않는다.

`create`: 혹은 `newInstance` 항상 새로운 인스턴스를 생성해 반환해준다.

`getType`: 생성할 클래스가 아닌 다른 클래스에 팩터리 메서드를 생성할 때 사용한다. 여기서 Type은 해당 팩터리 메서드가 반환할 객체의 타입을 적어준다. e.q. ) getMember(name)

`newType`: 다른 클래스에 새로운 인스턴스를 생성하여 반환할 때 사용한다.

`type`: `getType`과 `newType`의 간결 버전

## 생성자에 매개변수가 많다면 빌더를 고려하라

> item 02

매개변수가 많은 함수는 가급적 피하는게 좋다는 것을 이미 클린코드에서 배웠다.

생성자 역시 너무 많은 매개변수와 다양한 생성자를 클래스가 갖게 되면 개발자 입장에서 사용하기가 여간 껄끄럽다.

결국 매개변수가 많은 생성자는 **코드의 가독성을 떨어뜨린다**

이를 위해 자바빈즈(Java Beans) 패턴을 사용할 수 있는데 아래와 같다.

```java
Member member = new Member();
member.setId(1L);
member.setName("harry");
member.setAge(18);
member.setMoney(0L);
```

이러한 자바 빈즈 패턴은 심각한 단점을 갖고 있는데, 보다시피 **객체 하나를 만들기 위해 여러 메서드를 호출해야한다**는 점이다.

또한 객체가 완전히 생성되기 전까지는 일관성이 무너진 상태에 놓이게 된다.

자바빈즈 패턴이 유발하는 또 다른 문제는 클래스를 불변으로 만들 수 없으며 스레드 안정성을 얻으려면 프로그래머가 추가 작업을 해줘야만 한다는 점이다.

이를 위한 가장 완벽한 대안은 **빌더 패턴**을 사용해보는 것이다.

빌더 패턴으로 위 멤버를 생성해보면 다음과 같다.

```java
Member member = new Member.Builder()
                    .id(1L)
                    .name("harry")
                    .age(18)
                    .money(0L);
```

어떤가? 이전보다 훨씬 읽기 쉽고 단순하고 명확해졌다.

빌더 패턴은 자바 API에서도 심심치않게 등장하며 `Lombok`을 사용한다면 이 빌더를 자동으로 만들어준다는 장점이 있다.

생성자나 정적 팩터리가 처리해야할 매개변수가 많다면 처음부터 빌더 패턴을 고려해보는 것이 더 낫다.

## 인스턴스화를 막으려거든 private 생성자를 사용하라

> item 03

생성자를 명시하지않으면 컴파일러가 Default 생성자를 만들어주는 것은 자바 개발자라면 이미 다 알고 있는 사실이다.

여기서 이 객체가 정적 메서드와 정적 필드만을 담은 Util 클래스라면 인스턴스화를 굳이 할 필요가 없으므로 이를 막아야한다.

쉽게 막을 수 있는 방법은 `Private 생성자`를 선언하는 것인데, 가령 아래와 같다.

```java
public class UtilClass {
    private UtilClass() {
        throw new AssertionError();
    }
    ...
}
```

이 코드는 어떤 상황에서도 클래스가 인스턴스화 되는 것을 막아준다.

생성자가 분명히 존재하는데 호출 할 수 없으므로 적절한 주석을 달아줄 것을 저자는 명하고 있으나, 클린코드에서 주석은 가급적 지양하자고 했으니 난 안쓰겠다.

어쨌든, 이런식으로 생성자를 `Private`으로 만들어버리면 상속을 불가능하게 막는 효과도 있다.

## Private 생성자나 열거 타입으로 싱글턴임을 보증하라

> item 04

싱글턴은 인스턴스를 오직 하나만 생성할 수 있는 클래스 생성 패턴을 말한다.

싱글턴 클래스의 단점은 **클라이언트가 테스트 하기가 어렵다**라는 점인데, 왜 그럴까?

그 이유는 인터페이스로 정의한 다음 그 인터페이스를 구현한 싱글턴 인스턴스가 아니라면, Mock 객체로 구현해 대체할 수 없기 떄문이다.

싱글턴 오브젝트 생성에는 여러 방법이 있지만, 이 책에서 가장 선호하는 싱글턴 오브젝트 방법은 원소가 하나인 열거 타입을 만드는 것이다.

아래와 같다.

```java
public enum Elvis {
    INSTANCE;

    public void leaveTheBuilding() { ... }
}
```

어찌보면 좀 어색해 보이지만, 대부분 상황에서 원소가 하나뿐인 열거타입이 싱글턴을 만드는 가장 좋은 방법이라고 저자는 소개하고 있다.

## 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

> item 05

하나의 클래스 안에서 다른 클래스를 사용할 때 종종 클래스 내에서 정적 변수로 선언하여 사용하는 것을 심심치않게 볼 수 있다.

이는 유연하지 못하고 테스트를 어렵게 만든다.

고로, 사용하려는 클래스를 의존성 주입을 통해 사용하게 하는 것이 바람직하다.

아래와 같다.

```java
public class Harry {
    private final Laptop laptop;

    public Harry(Laptop laptop) {
        this.laptop = Objects.requireNonNull(laptop);
    }
}
```

이러한 생성자를 통한 의존성 주입은 `Spring Framework`에서도 적극 권장하고 있는 방식이기도 하다.

## 불필요한 객체 생성을 피하라

> item 06

똑같은 기능의 객체를 매번 생성하기보다는 객체 하나를 재사용하는 편이 더 낫다.

```java
String s = new String("harry");
```

위 코드는 매우 나쁜 코드이다. 실행될 때 마다 String 인스턴스를 새롭게 만든다.

생성자에 넘어가는 `harry`라는 문자열이 생성자로 만드려는 `String`과 일치한다.

개선해보자.

```java
String s = "harry";
```

만약 정규식 검증과 같이 비싼 작업이라면 매번 실행될 때 마다 호출하기 보다는, 정적 멤버로 만들어서 캐싱해두고 재사용을 하는 편이 더 낫다.

이러한 패턴의 안좋은 예는 아래와 같다.

```java
private static long sum() {
    Long sum = 0L;
    for(long i=0; i<=Integer.MAX_VALUE; i++)
        sum += i;
    return sum;
}
```

문제점을 찾았는가?

저자는 이 코드를 동작시키는데 6.5초가 걸렸고, sum의 박싱타입인 Long을 long으로 바꾸기만 했는데 0.59초로 빨라졌다고 말하고 있다.

즉, Primitive 타입을 박싱 타입으로 선언하면 자동으로 언박싱을 하게 되는데, 이 과정에서 꽤 많은 연산이 생긴다는 것을 알 수 있다.

그렇다고 해서 이번 주제를 `객체 생성은 비싸니 피해야한다`로 오해해서는 안된다.

요즘같은 메모리가 싸고 널널한데다가 나날이 올라가는 가비지 콜렉터의 성능을 가진 JVM에서 이정도 작은 객체 생성과 회수는 크게 부담되는 일은 아니다.

그렇다고 해서 별로 비싸지도 않은 객체의 `Cusmtom Pool`을 만들어 관리하지는 말자.

DB 연결이야 워낙 비용이 비싸니 재사용하는 편이 낫다지만, 작은 객체까지 그럴 필요는 없다.

## 다 쓴 객체 참조를 해제하라

> item 07

C, C++ 처럼 가비지 콜렉터가 없고 메모리를 직접 관리해야하는 언어로 개발을 하다가 자바로 넘어오면 그야말로 신세계다.

그래서 개발자들은 자칫 메모리 관리를 안해도 된다고 오해할 수 있으나 이는 사실이 아니다.

메모리 누수( OOM )과 같은 현상은 자바에서 종종 접하게 되는 이슈이며 이를 잘 관리해줘야한다.

그러나 가비지콜렉터를 지원하는 언어에서 이런 메모리 누수는 찾기가 어렵다.

그래서 사용이 끝나면 변수에 `data=null`을 넣음으로써 참조를 끊어주게 되면, 해당 인스턴스는 그 즉시 가비지 컬렉터의 수집 대상이 되므로 손쉽게 메모리 회수가 가능하다.

자기 메모리를 직접 관리하는 클래스라면 프로그래머는 항상 메모리 누수에 주의해야한다.

캐시 역시 메모리 누수를 일으키는 주범이다.

캐시가 필요한 상황이라면 `WeakHashMap`을 사용해 캐시를 만들어보자.

다 쓴 엔트리는 그 즉시 자동으로 제거될 것이다.

메모리 누수의 또 다른 주범은, 리스너 또는 콜백이라 부르는 친구들이다.

클라이언트가 콜백을 등록해두고 명확하게 해지하지않고 놔두면 계속해서 콜백이 쌓이게 된다.

이 때 콜백을 `weak reference`로 저장하면 가비지 컬렉터가 그 즉시 수거해가므로 예방해볼 수 있다.

에를 들어, `WeakHashMap`에 키로 저장하면 된다.

이러한 메모리 누수는 철저한 코드리뷰나 힙 프로파일러와 같은 디버깅 도구를 동원해야만 발견되기도 한다.

그래서 이런 종류의 문제는 예방법을 미리 익혀두는 것이 좋다.

## finalizer와 cleaner 사용을 피하라

> item 08

finalizer는 예측할 수 없고 상황에 따라 위험할 수 있어 사용하지않는 편이 좋다.

자바 9에서는 finalizer의 사용을 자제하며 (Deprecated) cleaner를 그 대안으로 했으나 이 역시도 좋지 않다.

cleaner는 여전히 예측할 수 없고, 느리며, 일반적으로 불필요하다.

자바에서는 메모리 자원의 회수를 위해 자바 7에서 제공하는 `try-with-resource`와 `try-finally`를 사용해 해결하는 편이 좋다.

그럼 이 finalizer와 cleaner는 도당체 언제 쓰인단 말인가?

첫 번째는, 클라이언트가 하지 않은 자원 회수를 늦게라도 해주기 위한 안전망의 역할로써 finalizer를 사용해볼 수 있다.

안전망으로써 finalizer를 사용하는 자바 라이브러리는 `FileInputStream`과 `FileOutputStream`, `ThraedPoolExecutor`가 있다.

두 번째는, 네이티브 피어(native peer)와 연결된 객체이다.

네이티브 피어란, 쉽게 말해 자바 객체가 아닌 (가비지 컬렉터의 대상이 되지 않는) 네이티브 메서드를 통해 기능을 위임받은 네이티브 객체를 의미한다.

이 때 자원을 회수하려는 목적으로 finalizer와 cleaner를 써볼 수 있는데, 이 역시도 네이티브 피어가 비싼 자원을 갖고 있지 않을 때에만 사용해볼 수 있다.

네이티브 피어가 사용하는 자원을 즉시 회수해야한다면 `close` 메소드를 사용하자.

즉, cleaner는 중요하지 않은 네이티브 피어 객체의 회수 용도로만 사용하자.

## try-finally 보다는 try-with-resources를 사용하라

> item 09

자바 7에서 추가된 `try-with-resources`는 자원을 효과적으로 회수할 수 있는 기법이다.

이는 `AutoCloseable`을 구현한 객체라면, try 구문이 끝날 때 `close`를 호출해서 알아서 자원을 호출해간다.

그러니 자원을 사용 후 반환해야하는 클래스가 필요하다면 `AutoCloseable`를 확장해 사용하도록 하자.

`try-with-resources`의 예시는 아래와 같다.

```java
static String firstLineOfFile(String path, String defaultVal) {
    try(BufferedReader br = new BufferedReader(new FileReader(path))) {
        return br.readLine();
    } catch (IOException e) {
        return defaultVal;
    }
}
```

## Reference

<img width="360" alt="스크린샷 2021-04-16 오후 4 24 23" src="https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"/>

이펙티브 자바 Effective Java 3/E

저자 : 조슈아 블로크
