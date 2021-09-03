---
id: 01-first
title: 01. 첫 번째 예시
---

## 서론

- 리팩토링의 저자 마틴 파울러는 클린코드의 저자 로버트.C.마틴, TDD의 창시자 켄트백과 마찬가지로 소프트웨어 업계의 3대 성인(聖人) 중 한명이다.

- 그는 서론에 **리팩토링을 왜 해야하는가**?에 대한 이야기를 하면서, 자신의 경험담을 이야기한다.

- 유명한 그의 리팩토링의 중요성에 대한 영상을 보면 그가 얼마나 소프트웨어 개발에 있어서 깔끔한 코드와 구조를 중요하게 생각하는지 알 수 있다. [영상](https://www.youtube.com/watch?v=mNPpfB8JSIU)(한글 자막을 달아주신 데브원영님 감사합니다)

- 리팩토링은 외부적으로 봤을 때 동작에 이상이 없고, 구조적인 변경만 있을 뿐이지만 이러한 리팩토링을 계속해서 하지 않으면 결국 소프트웨어의 변경이 어려워지고, 예측할 수 없는 문제들이 계속해서 발생하게 된다.

- 즉, 리팩토링이란 소프트웨어 개발이 건축물처럼 만들고 나서 끝이 아니라, 계속해서 유지보수를 해야하고 요구사항과 스펙이 변경될 수 있으므로 변경을 용이하게 하기 위해 코딩 끝난 후 설계를 개선하기 위해 수행하는 작업이다.

- 또한 각 장이 갖는 의미를 설명하면서 시작부터 리팩토링이 무엇인지 실제 코드를 통해 보여준다.

- 다행히 이 책이 자바스크립트로 재판된 이유는, 조금 더 많은 사람들이 보기 위함이며 고급 문법은 다루지 않는다고 한다.

- 콜백/프로미스를 async/await으로 리팩토링하는 자바스크립트만의 문법은 다루지않는다고 한다. 자바스크립트는 어디까지나 수 많은 언어 중의 하나이며, **클래스**, **모듈**, **함수**와 같이 일반적인 개념들에 대해서 다룬다고 한다.

## 01. 리팩토링: 첫 번째 예시

- 어느정도 규모있는 프로그램을 만들자니 내용이 너무 많고, 그렇다고 너무 간단하면 리팩토링 할 부분이 없으니, 큰 서비스 중 하나의 기능을 구현한다고 상상하고 리팩토링에 임하도록 하자.

- 첫 번째 예시에서는 다양한 연극을 외주로 받아 공연하는 극단의 서비스를 개발해볼 것이다.

### 기능 요구 사항 분석

- 공연 요청이 들어오면 연극의 장르와 관객 규모를 기초로 비용을 책정한다.

- 현재 이 극단은 두 가지 장르, 비극과 희극만 공연한다. 

- 공연료와 별개로 포인트를 지급해서 다음번 의뢰 시 공연료를 할인 받을 수도 있다.

### 예제 코드

- 현재 나는 자바스크립트를 실무에서 거의 쓰지 않는다. (간단한 스크립트 짤 때나 JSON 오브젝트 다룰 때 정도)

- 주로 쓰는 언어는 Java, Kotlin, Go, Typescript이다 보니 책에 있는 JS 예제를 그대로 옮겨적는 것은 학습에 큰 영향이 없을 것 같아서 **Kotlin**으로 재작성 해보았다. (마틴 파울러도 해당 예제들을 수 십개의 언어로 만들어보았다고 하니 안될 것도 없어 보인다.)

- 전체 코드는 [코드 저장소](https://github.com/minkukjo/refactoring)에 있다.

```kotlin
// Main.kt
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import java.io.File
import java.text.NumberFormat
import java.util.Locale
import kotlin.math.floor

fun statement(invoices: Invoice, plays: Map<String, Play>): String {
    var totalAmount = 0
    var volumeCredits = 0
    var result = "청구 내역 (고객명: ${invoices.customer}\n"
    val format = NumberFormat.getCurrencyInstance(Locale.US)

    for (performance in invoices.performances) {
        val play = plays[performance.playId] ?: throw ClassNotFoundException("should be exist")
        var thisAmount = 0

        when (play.type) {
            PlayType.TRAGEDY -> {
                thisAmount = 40000;
                if (performance.audience > 30) {
                    thisAmount += 1000 * (performance.audience - 30)
                }
            }
            PlayType.COMEDY -> {
                thisAmount = 30000;
                if (performance.audience > 20) {
                    thisAmount += 10000 + 500 * (performance.audience - 20)
                }
                thisAmount += 300 * performance.audience
            }
            else -> throw Error("알 수 없는 장르: ${play.type}")
        }

        // 포인트를 적립한다.
        volumeCredits += (performance.audience - 30).coerceAtLeast(0)
        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if (PlayType.COMEDY == play.type) volumeCredits += floor((performance.audience / 5).toDouble()).toInt()

        // 청구 내역을 출력한다.
        result += "${play.name}: ${format.format(thisAmount / 100)} ${performance.audience}석\n"
        totalAmount += thisAmount
    }
    result += "총액: ${format.format(totalAmount / 100)}\n"
    result += "적립 포인트: ${volumeCredits}점\n"
    return result
}


fun main() {
    val playsJson = File("./src/main/resources/plays.json").readText(Charsets.UTF_8)
    val plays = Json.decodeFromString<Map<String, Play>>(playsJson)

    val invoicesJson = File("./src/main/resources/invoices.json").readText(Charsets.UTF_8)
    val invoices = Json.decodeFromString<List<Invoice>>(invoicesJson)

    println(statement(invoices[0], plays))
}

```

### 첫 예시 프로그램의 소감

- 코드를 짜면서 느꼈지만 when 구문 안에서 반복되는 코드가 있는 것이 조금 불편하게 느껴졌다. (뭔가 리팩토링 할 수 있을 것 같은 느낌적인 느낌)

- 책에서는 프로그램이 새로운 기능을 추가하기에 애매하다면 기능을 추가하기 쉬운 구조로 리팩토링한 뒤에 원하는 기능을 추가한다고 한다.

- 추가적인 요구 사항은 사용자에게 청구내역을 HTML로도 출력하는 기능이 필요할 수 있다고 한다. (요구사항의 추가 가능성)

- 또 연극이 현재 비극과 희극만 존재하는데, 사극이나 전원극, 고전극, 자유극 등등 극의 타입이 얼마든지 추가로 생길 수 있다.  그러면 공연료와 적립 포인트 계산법에 반드시 영향을 미치게 되어있다.

- 이처럼 연극 장르와 공연료 정책이 달라질 때 마다 `statement()` 함수를 수정해야 한다.

- 여기서 HTML 출력을 위해 `htmlStatement()` 함수까지 복사해서 만든다면 모든 수정이 두 함수에 일관되게 적용하도록 보장해주어야한다.

- 리팩토링이 필요한 이유가 여기에 있다. 변경에 유연하게 대처하기 위해서!

### 리팩토링의 첫 단계

- 리팩토링의 첫 단계는 테스트코드다.

- 리팩토링에서 테스트의 역할은 꽤 중요한데, 리팩토링 중 실수가 발생할 수 있기 때문에 촘촘한 테스트 코드를 작성해주어야한다.

### statement() 함수 쪼개기

- statement 함수처럼 긴 함수를 리팩토링할 때는 부분으로 나눌 수 있는 지점을 찾는다.

- switch문을 함수로 뽑아내보자 이런 기법을 **함수 추출하기**라는 이름으로 부른다.

```kotlin
fun amountFor(performance: Performance, play: Play): Int {
    var thisAmount = 0
    when (play.type) {
        PlayType.TRAGEDY -> {
            thisAmount = 40000;
            if (performance.audience > 30) {
                thisAmount += 1000 * (performance.audience - 30)
            }
        }
        PlayType.COMEDY -> {
            thisAmount = 30000;
            if (performance.audience > 20) {
                thisAmount += 10000 + 500 * (performance.audience - 20)
            }
            thisAmount += 300 * performance.audience
        }
        else -> throw Error("알 수 없는 장르: ${play.type}")
    }
    return thisAmount
}
```

- 자 그러면 리팩토링한 결과가 