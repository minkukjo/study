---
id: kotlin-language-guide
title: 코틀린 언어 가이드
---

> 본 글은 Java 코딩 스타일 가이드 내용을 포함하고 있습니다.

> 수정할 내용이 있다면 언제든 알려주세요.

## Convention

본 글은 코틀린 언어의 코딩 스타일 가이드입니다.

스타일 가이드는 개인의 기호에 따라 다르므로 언제든 이 문서에 기여하여 발전시켜주세요.

## var 보다는 val를 사용합니다

- 코틀린의 var는 코틀린의 근간인 함수형 프로그래밍의 불변성을 위배합니다. 가급적 val를 사용하도록 합시다.

## CamelCase

- 자바와 마찬가지로 코틀린 역시 이름에는 카멜 케이스를 사용하도록 합니다.

## 클래스 구조

- 코틀린의 클래스 내부에는 다음과 같은 순서로 포함시키도록 합니다.

1. 속성 선언들과 초기화 블록
2. 부생성자들(secondary constructors)
3. 메소드들
4. 컴패니언 객체

```kotlin
class User {
    // 속성
    private var age: Int? = null

    // 초기화 블록
    init {
        age = 24
    }

    // 부 생성자
    constructor(age: Int) {
        this.age = age
    }

    // 메소드
    fun printAge() = println(age)


    fun useNested() {
        NestedForInternal()
        // ...
    }

    class NestedForInternal {

    }

    // 컴패니언 객체
    companion object {
        const val DURATION = 300
    }

    class NestedForExternalClient {

    }
}
```

## 인터페이스 구현체

```kotlin
interface User {
    var age: Int
    var name: String
}

class GameUser : User {
    override var age = 17
    override var name = "Harry"
}
```

- 인터페이스에 선언된 순서대로 클래스에서도 구현합시다.

## 불변 속성, const 상수, Top Level 상수

```kotlin
const val MAX_COUNT = 8
val USER_NAME_FIELD = "UserName"
```

- 대문자와 언더스코어를 사용해 표현합니다. (자바와 동일)

## 컬렉션 변수에 컬렉션 명을 붙이지 않습니다

```kotlin
val userList = listOf(1,2,3,4) // BAD!!!

val users = listOf(1,2,3,4) // GOOD!!!
```

- 복수명의 변수명은 s로 사용합니다.
