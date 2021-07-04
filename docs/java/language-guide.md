---
id: language-guide
title: 자바 언어 가이드
---

> 본 글은 Java 코딩 스타일 가이드 내용을 포함하고 있습니다.

> 수정할 내용이 있다면 언제든 알려주세요.

## Convention

본 글은 자바 언어의 코딩 스타일 가이드입니다.

스타일 가이드는 개인의 기호에 따라 다르므로 언제든 이 문서에 기여하여 발전시켜주세요.

## 중괄호

- K&R 스타일 사용, 중괄호는 새로운 라인에서 시작하지 않고 제어문과 같은 라인에서 시작합니다.

```java
if(user == UserType.ACTIVE) {
    // GOOD
}

if(user == UserType.ACTIVE)
{
    // BAD
}
```

- 제어문이 한 줄이더라도 중괄호를 생략하지 않습니다.

```java
if(user == UserType.ACTIVE)
    System.out.println("Hello");
    // NO!!

if(user == UserType.ACTIVE)  System.out.println("Hello"); // NO !!
```

## 이름

- 자바 언어의 모든 이름은 **CamelCase**로 작성합니다.

- 상수의 경우 대문자로 작성하고 단어 간의 구분은 `_`로 구분합니다.

- 메소드 명은 반드시 동사로 시작합니다.

## 클래스 멤버 정렬 순서

- 클래스 멤버는 필드(전역 변수), 생성자, 메서드 순서대로 작성합니다.

```java
class User {
    // Fields

    // Constructors

    // Methods
}
```

## 라인 최대 길이

- 클래스는 작으면 작을 수록 좋습니다. 최대 500줄을 넘지 않도록 유지합니다.

- 메소드 역시 길이가 짧으면 짧을 수록 읽기 좋습니다. 최대 50줄을 넘지 않도록 유지하고자 노력합니다.

## Do while

- Do While 구문은 가급적 사용하지 않습니다.

- While문 보다는 For 문을, For문 보다는 향상된 For 문을 사용하도록 합니다.

## 제어문

- 메소드 중간에 **return**을 사용하지 않습니다. 코드이 가독성을 떨어뜨리고 예측할 수 없는 버그를 발생시킬 수 있습니다.

- **break**, **continue**의 사용은 가급적 자제합니다. **break**는 스위치문에서만 사용하도록 합니다.

## 변수의 초기화 타이밍

- 변수의 초기화 타이밍은 변수가 사용되기 직전에 초기화합니다.

## 접근 제어자

- 모든 클래스의 변수는 private이며, 절대 **Setter**를 만들지 않습니다.

- 멤버의 접근 제한이 필요한 경우 명시적인 이름의 메소드로 만들고, 변경을 최소화합니다.

```java
class User {
    private String name;
    private String email;
    private String phoneNumber;

    public void updatePrincipal(String email, String phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
```

## 주석

- 모든 코드에서 주석은 최소화하고자 노력합니다.

- 주석 없이도 읽힐 수 있을 정도의 깔끔한 코드를 작성하려고 노력합니다.

- 코드는 이야기입니다. 독자가 분명히 존재하고 읽어내려가면서 변수 명, 함수명만 보고서도 어떤 동작을 하고자 하는지 명확히 이해할 수 있도록 코드를 작성하도록 합시다.

## 객체 생성 방법

### 정적 팩토리 메서드

- 생성자를 직접 사용하는 것 보다는 정적 팩토리 메서드를 고려합시다.

```java
class User {
    private String name;
    private String email;
    private String phoneNumber;

    public User(String name, String email, String phoneNumber) {
        ...
        ...
        ...
        // BAD!
    }
}
```

- 퍼블릭 생성자를 그대로 사용하지 않는 이유 중 가장 큰 이유는, 해당 객체의 생성에 필수적인 요소들을 알 수 없다는 점입니다.

- 정적 팩토리 메서드를 사용하면 해당 클래스를 생성할 때 필수적인 값들을 미리 알 수 있습니다.

```java
class User {
    private String name; // it is nullable
    private String email; // can't be null
    private String phoneNumber; // can't be null

    private User(String email, String phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // 메서드 이름은 더욱 구체적으로 작성해도  무방
    public static void of(String email, String phoneNumber) {
        return new User(email, phoneNumber);
    }
}
```

### 빌더 패턴

- 생성자의 매개변수가 많은 클래스라면 빌더패턴도 고려해볼 수 있습니다.

```java
// Java Beans Pattern
Member member = new Member();
member.setId(1L);
member.setName("harry");
member.setAge(18);
member.setMoney(0L); // BAD!!!


// Builder Pattern
Member member = new Member.Builder()
                    .id(1L)
                    .name("harry")
                    .age(18)
                    .money(0L); // GOOD!!
```

## 자바 싱글턴 패턴

- 싱글턴 객체를 사용해야한다면, JVM 클래스 로더 메커니즘을 이용하여 멀티쓰레드에도 견고한 클래스를 구현합니다.

```java
public class ExampleClass {

    //private construct
    private ExampleClass() {}

    private static class InnerInstanceClazz() {
        private static final ExampleClass instance = new ExampleClass();
    }

    public static ExampleClass getInstance() {
        return InnerInstanceClazz.instance;
    }
}
```

## 자바 상속

- 객체의 다형성을 사용해야한다면 상속보다는 **구현**을 사용합니다.

- 추상 클래스보다는 인터페이스를 사용합시다.
