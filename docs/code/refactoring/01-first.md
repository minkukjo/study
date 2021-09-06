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

- 또 연극이 현재 비극과 희극만 존재하는데, 사극이나 전원극, 고전극, 자유극 등등 극의 타입이 얼마든지 추가로 생길 수 있다. 그러면 공연료와 적립 포인트 계산법에 반드시 영향을 미치게 되어있다.

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

- 자 그러면 리팩토링한 결과가 일치하는지 확인하기 위해 테스트 코드를 작성해두자.

- 나는 테스트 코드가 없는 리팩토링은 낙하산 없이 번지점프를 하는 것과 같다고 생각한다.

```kotlin
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import java.io.File

internal class MainKtTest {
    private lateinit var plays: Map<String, Play>

    private lateinit var invoices: List<Invoice>

    @BeforeEach
    fun setUp() {
        val playsJson = File("./src/main/resources/plays.json").readText(Charsets.UTF_8)
        plays = Json.decodeFromString(playsJson)

        val invoicesJson = File("./src/main/resources/invoices.json").readText(Charsets.UTF_8)
        invoices = Json.decodeFromString(invoicesJson)
    }

    @Test
    @DisplayName("statement 실행 결과 테스트")
    fun testStatement() {
        val result = statement(invoices[0], plays)
        println(result)
        Assertions.assertEquals("""
            청구 내역 (고객명: BigCo
            Hamlet: ${'$'}650.00 55석
            As You Like It: ${'$'}580.00 35석
            Othello: ${'$'}500.00 40석
            총액: ${'$'}1,730.00
            적립 포인트: 47점
            """.trimIndent(), result)
    }
}
```

- 테스트에는 JUnit 5를 사용했다.

- 앞으로 이 테스트가 우리의 리팩토링의 안전장치가 되어줄 것이다.

- 나는 종종 동기들에게 **돌아만 가는 코드는 원숭이도 짤 수 있다**라고 이야기하곤 했다. 그 정도로 깔끔한 코드가 중요하다고 생각하기 때문이다.

- 그런데 이 책에서도 마찬가지로 마틴 파울러의 명언이 나온다. **컴퓨터가 이해하는 코드는 바보도 작성할 수 있다. 사람이 이해하도록 작성하는 프로그래머가 진정한 실력자다**

### play 변수의 제거

- play는 개별 공연에서 값을 얻으므로 매개 변수에서 처리할 필요가 없다.

- 이러한 play 변수를 최대한 제거하는 것을 **임시 변수를 질의 함수로 바꾸기**라고 부른다.

- 마틴 파울러는 임시 변수를 최대한 제거해서 복잡도를 낮춘다고 한다.

```kotlin
fun playFor(performance: Performance): Play {
    return plays[performance.playId] ?: throw ClassNotFoundException("should be exist")
}

fun statement(invoices: Invoice, plays: Map<String, Play>): String {
    var totalAmount = 0
    var volumeCredits = 0
    var result = "청구 내역 (고객명: ${invoices.customer}\n"
    val format = NumberFormat.getCurrencyInstance(Locale.US)

    for (performance in invoices.performances) {
        val thisAmount = amountFor(performance, playFor(performance))

        // 포인트를 적립한다.
        volumeCredits += (performance.audience - 30).coerceAtLeast(0)
        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if (PlayType.COMEDY == playFor(performance).type) volumeCredits += floor((performance.audience / 5).toDouble()).toInt()

        // 청구 내역을 출력한다.
        result += "${playFor(performance).name}: ${format.format(thisAmount / 100)} ${performance.audience}석\n"
        totalAmount += thisAmount
    }
    result += "총액: ${format.format(totalAmount / 100)}\n"
    result += "적립 포인트: ${volumeCredits}점"
    return result
}
```

- 마틴 파울러는 불필요한 지역 변수를 최대한 줄이는 방식이 리팩토링에 편하다고 한다.

- 나는 평소에 임시 변수를 많이 만드는 편인데, 제거하는 것이 리팩토링에 더 도움이 된다고 한다. 이런 것을 **변수 인라인 하기**라고 부른다고 한다.

- 마틴 파울러는 추출 작업을 할 때 가장 먼저 지역 변수부터 제거한다고 한다.

- 이렇게 임시 변수를 제거하기 위해 별도의 함수로 뽑아내보면 다음과 같이 리팩토링이 된다.

```kotlin
fun statement(invoices: Invoice, plays: Map<String, Play>): String {

    fun playFor(performance: Performance): Play {
        return plays[performance.playId] ?: throw ClassNotFoundException("should be exist")
    }

    fun amountFor(performance: Performance): Int {
        var result = 0
        when (playFor(performance).type) {
            PlayType.TRAGEDY -> {
                result = 40000;
                if (performance.audience > 30) {
                    result += 1000 * (performance.audience - 30)
                }
            }
            PlayType.COMEDY -> {
                result = 30000;
                if (performance.audience > 20) {
                    result += 10000 + 500 * (performance.audience - 20)
                }
                result += 300 * performance.audience
            }
        }
        return result
    }

    fun volumeCreditsFor(performance: Performance): Int {
        var volumeCredits = 0
        volumeCredits += (performance.audience - 30).coerceAtLeast(0)
        if (PlayType.COMEDY == playFor(performance).type)
            volumeCredits += floor((performance.audience / 5).toDouble()).toInt()
        return volumeCredits
    }

    fun usd(number: Int): String {
        return NumberFormat.getCurrencyInstance(Locale.US).format(number / 100)
    }

    fun totalVolumeCredits(): Int {
        var volumeCredits = 0
        for (performance in invoices.performances) {
            volumeCredits += volumeCreditsFor(performance)
        }
        return volumeCredits
    }

    var totalAmount = 0
    var result = "청구 내역 (고객명: ${invoices.customer}\n"

    for (performance in invoices.performances) {
        // 청구 내역을 출력한다.
        result += "${playFor(performance).name}: ${usd(amountFor(performance))} ${performance.audience}석\n"
        totalAmount += amountFor(performance)
    }
    result += "총액: ${usd(totalAmount)}\n"
    result += "적립 포인트: ${totalVolumeCredits()}점"
    return result
}
```

- 리팩토링을 하다보면 성능에 대한 걱정을 할 때가 있다.

- 하지만 마틴 파울러는 성능은 신경쓰지 말고 더 깔끔한 코드를 얻기 위해 일단 무시하고, 추후에 성능이 이슈가 된다면 다시 개선 작업하는 것을 가이드하고 있다.

- 이 과정에서 리팩토링은 같은 4개의 스텝으로 진행했다.

- 1. **반복문 쪼개기**로 변수 값을 누적시키는 부분을 분리

- 2. **문장 슬라이드하기**로 변수 초기화 문장을 변수 값 누적 코드 바로 앞으로 옮긴다.

- 3. **함수 추출하기**로 적립 포인트 계산 부분을 함수로 추출한다.

- 4. **변수 인라인하기**로 **volumeCredits** 변수를 제거한다.

```kotlin

fun statement(invoices: Invoice, plays: Map<String, Play>): String {

    fun playFor(performance: Performance): Play {
        return plays[performance.playId] ?: throw ClassNotFoundException("should be exist")
    }

    fun amountFor(performance: Performance): Int {
        var result = 0
        when (playFor(performance).type) {
            PlayType.TRAGEDY -> {
                result = 40000;
                if (performance.audience > 30) {
                    result += 1000 * (performance.audience - 30)
                }
            }
            PlayType.COMEDY -> {
                result = 30000;
                if (performance.audience > 20) {
                    result += 10000 + 500 * (performance.audience - 20)
                }
                result += 300 * performance.audience
            }
        }
        return result
    }

    fun volumeCreditsFor(performance: Performance): Int {
        var result = 0
        result += (performance.audience - 30).coerceAtLeast(0)
        if (PlayType.COMEDY == playFor(performance).type)
            result += floor((performance.audience / 5).toDouble()).toInt()
        return result
    }

    fun usd(number: Int): String {
        return NumberFormat.getCurrencyInstance(Locale.US).format(number / 100)
    }

    fun totalVolumeCredits(): Int {
        var result = 0
        for (performance in invoices.performances) {
            result += volumeCreditsFor(performance)
        }
        return result
    }

    fun totalAmount(): Int {
        var result = 0
        for (performance in invoices.performances) {
            result += amountFor(performance)
        }
        return result
    }

    var result = "청구 내역 (고객명: ${invoices.customer}\n"

    for (performance in invoices.performances) {
        // 청구 내역을 출력한다.
        result += "${playFor(performance).name}: ${usd(amountFor(performance))} ${performance.audience}석\n"
    }
    result += "총액: ${usd(totalAmount())}\n"
    result += "적립 포인트: ${totalVolumeCredits()}점"
    return result
}
```

- 어느정도 리팩토링이 완료되었다.

### 중간 점검

- statement()의 메인 로직은 단 7줄에 불과하며 모든 기능들을 함수로 분리해내었다.

- 복잡하게 얽힌 덩어리를 잘게 쪼개었으니 이번엔 기능 변경을 해보자.

- 앞서 이야기 했던 Text 출력하는 **statement()**와 HTML을 출력하는 **statement()**, 두 가지 기능을 개발해야한다.

- 그런데 중첩함수가 이미 많으니 그대로 복-붙을 하기에는 조금 애매하니 **단계 쪼개기**를 사용하여 로직을 나눠보자.

```kotlin
// CreateStatementData.kt
fun createStatementData(invoice: Invoice, plays: Map<String, Play>): StatementData {
    fun amountFor(performance: Performance): Int {
        var result = 0
        when (performance.play?.type) {
            PlayType.TRAGEDY -> {
                result = 40000;
                if (performance.audience > 30) {
                    result += 1000 * (performance.audience - 30)
                }
            }
            PlayType.COMEDY -> {
                result = 30000;
                if (performance.audience > 20) {
                    result += 10000 + 500 * (performance.audience - 20)
                }
                result += 300 * performance.audience
            }
        }
        return result
    }

    fun playFor(performance: Performance): Play {
        return plays[performance.playId] ?: throw ClassNotFoundException("should be exist")
    }

    fun volumeCreditsFor(performance: Performance): Int {
        var result = 0
        result += (performance.audience - 30).coerceAtLeast(0)
        if (PlayType.COMEDY == performance.play?.type)
            result += floor((performance.audience / 5).toDouble()).toInt()
        return result
    }

    fun enrichPerformance(performance: Performance): Performance {
        val result = Performance(performance.playId, performance.audience)
        result.play = playFor(result)
        result.amount = amountFor(result)
        result.volumeCredits = volumeCreditsFor(result)
        return result
    }

    fun totalVolumeCredits(data: StatementData): Int {
        return data.performances.fold(0) { total, performance ->
            total + performance.volumeCredits
        }
    }

    fun totalAmount(data: StatementData): Int {
        return data.performances.fold(0) { total, performance ->
            total + performance.amount
        }
    }

    return StatementData(invoice.customer, invoice.performances.map { enrichPerformance(it) }).apply {
        this.totalVolumeCredits = totalVolumeCredits(this)
        this.totalAmount = totalAmount(this)
    }
}
```

```kotlin
// Statement.kt
import java.text.NumberFormat
import java.util.Locale

fun usd(number: Int): String {
    return NumberFormat.getCurrencyInstance(Locale.US).format(number / 100)
}

fun htmlStatement(invoice: Invoice, plays: Map<String, Play>): String {
    return renderHtml(createStatementData(invoice, plays))
}

fun renderHtml(data: StatementData): String {
    var result = "<h1>청구 내역 (고객명: ${data.customer})</h1>\n"
    result += "<table>\n"
    result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>"
    for (performance in data.performances) {
        result += "<tr><td>${performance.play?.name}</td><td>${performance.audience}석</td>"
        result += "<td>${usd(performance.amount)}</td></tr>\n"
    }
    result += "</table>\n"
    result += "<p>총액: <em>${usd(data.totalAmount)}</em></p>\n"
    result += "<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>"
    return result
}

fun statement(invoice: Invoice, plays: Map<String, Play>): String {
    return renderPlainText(createStatementData(invoice, plays))
}

fun renderPlainText(data: StatementData): String {
    var result = "청구 내역 (고객명: ${data.customer})\n"

    for (performance in data.performances) {
        result += "${performance.play?.name}: ${usd(performance.amount)} ${performance.audience}석\n"
    }
    result += "총액: ${usd(data.totalAmount)}\n"
    result += "적립 포인트: ${data.totalVolumeCredits}점"
    return result
}
```

```kotlin
// Main.kt
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import java.io.File


fun getPlays(json: Json): Map<String, Play> {
    val playsJson = File("./src/main/resources/plays.json").readText(Charsets.UTF_8)
    return json.decodeFromString(playsJson)
}

fun getInvoices(json: Json): List<Invoice> {
    val invoicesJson = File("./src/main/resources/invoices.json").readText(Charsets.UTF_8)
    return json.decodeFromString(invoicesJson)
}

fun main() {
    val json = Json {
        ignoreUnknownKeys = true
    }
    val plays = getPlays(json)
    val invoices = getInvoices(json)
    println(statement(invoices[0], plays))
    println(htmlStatement(invoices[0], plays))
}
```

- 코드를 구조적으로 나누면서 코드 양이 늘었지만, 훨씬 보기 편하게 변경되었다.

- 게다가 htmlStatement를 어떠한 코드 중복이나 변경 없이 아주 손쉽게 만들어낼 수 있었다.

- 이번엔 다형성을 활용해 계산 코드를 재구성해보자.

### 다형성을 활용한 계산 코드 재구성

- 이번 요구 사항은 연극 장르를 추가하고 장르마다 공연료와 적립 포인트 계산 방식을 다르게 지정하도록 기능을 수정해야한다.

- **amountFor()**를 수정하면 되는데 여간 귀찮은 일이 아니다.

- 이를 객체지향의 다형성을 이용해 개선해보자.

```kotlin
interface PerformanceCalculator {
    fun amount(): Int
    fun volumeCredits(): Int
}
```

```kotlin
package domain.calculator

import domain.Performance
import domain.PlayType
import kotlin.math.floor

class ComedyCalculator(private val performance: Performance) : PerformanceCalculator {
    override fun amount(): Int {
        var result = 30000;
        if (performance.audience > 20) {
            result += 10000 + 500 * (performance.audience - 20)
        }
        result += 300 * performance.audience

        return result
    }

    override fun volumeCredits(): Int {
        var result = 0
        result += (performance.audience - 30).coerceAtLeast(0)
        if (PlayType.COMEDY == performance.play?.type)
            result += floor((performance.audience / 5).toDouble()).toInt()
        return result
    }
}
```

```kotlin
package domain.calculator

import domain.Performance

class TragedyCalculator(private val performance: Performance) : PerformanceCalculator {
    override fun amount(): Int {
        var result = 40000;
        if (performance.audience > 30) {
            result += 1000 * (performance.audience - 30)
        }
        return result
    }

    override fun volumeCredits(): Int {
        var result = 0
        result += (performance.audience - 30).coerceAtLeast(0)
        return result
    }

}
```

```kotlin
fun createPerformanceCalculator(performance: Performance, play: Play): PerformanceCalculator {
    return when (play.type) {
        PlayType.TRAGEDY -> TragedyCalculator(performance)
        PlayType.COMEDY -> ComedyCalculator(performance)
    }
}
fun createStatementData(invoice: Invoice, plays: Map<String, Play>): StatementData {
    ...
    ...

    fun enrichPerformance(performance: Performance): Performance {
        val result = Performance(performance.playId, performance.audience)
        val calculator = createPerformanceCalculator(result, playFor(result))
        result.amount = calculator.amount()
        result.play = playFor(result)
        result.volumeCredits = calculator.volumeCredits()
        return result
    }

    ...
    ...
}
```

- 로직이 매우 깔끔해지고 한 눈에 알아보기 쉽게 개선되었다.

- 공연의 종류가 늘어나면 팩토리 메서드인 `createPerformanceCalculator`에서 타입을 추가해주고, `PerformanceCalculator` 인터페이스를 구현하는 구현체를 만들어서 계산 로직을 만들어주기만 하면 된다.

- 이전에 비해서 훨씬 알아보기 쉬워졌고 구조적으로 코드가 변했다.

- **함수 추출하기**, **변수 인라인하기**, **함수 옮기기**, **조건부 로직을 다형성으로 바꾸기**와 같은 과정을 거쳐서 리팩토링을 진행했다.

- 이번 챕터에서는 원본 함수를 중첩 함수 여러 개로 나눈 뒤 **단계 쪼개기**를 사용해서 계산 코드와 출력 코드를 구분해냈다. 마지막으로 계산 로직을 다형성으로 표현했다.

- 결국 좋은 코드를 가늠하는 확실한 방법은 **얼마나 수정하기 쉬운가**에 달려있다.

### 요약

- 리팩토링의 핵심은 수정하기 쉬운 코드를 만드는 것이다.

- 이를 위해 먼저, 각 단계를 굉장히 잘게 나눠야 한다.

- 그리고 코드가 변경될 때 마다 매 번 컴파일하고 테스트하여 작동하는 상태로 유지한다.

## Reference

<img width="620" alt="스크린샷 2021-08-31 오후 10 29 39" src="https://user-images.githubusercontent.com/43809168/131528140-3f6f8492-1dee-4f94-b5b6-929136cd2686.jpeg"/>

- Refactoring 2판 ( 저자 : 마틴 파울러 )
