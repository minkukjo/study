---
id: kotlin-jpa-guide
title: Kotlin JPA 개발 가이드
---

## JPA With Kotlin

### JPA With Kotlin Gradle.kt 설정

```kotlin
plugins {
    ...
    kotlin("plugin.jpa") version "1.5.21" // 1
  id ("org.jetbrains.kotlin.plugin.allopen") version "1.5.21" // 6
  id ("org.jetbrains.kotlin.plugin.noarg") version "1.5.21" // 7
}

noArg {
    annotation("javax.persistence.Entity") // 2
}

allOpen {
    annotation("javax.persistence.Entity") // 3
    annotation("javax.persistence.MappedSuperclass") // 4
    annotation("javax.persistence.Embeddable") // 5
}
```

1 : JPA 사용을 위한 플러그인 추가 옵션입니다.

2 : Entity 애노테이션이 붙은 코틀린 클래스의 NoArgument 생성자 자동 생성을 위한 설정입니다.

3 : Entity 애노테이션이 붙은 코틀린의 클래스를 open 클래스로 만들어주는 설정입니다.

4 : MappedSuperclass 애노테이션이 붙은 코틀린의 클래스를 open 클래스로 만들어주는 설정입니다.

5 : Embeddable 애노테이션이 붙은 코틀린 클래스를 open 클래스로 만들어주는 설정입니다.

6 : allOpen에 지정한 어노테이션으로 만든 클래스에 open 키워드를 적용해줍니다.

7 : 자동으로 Entity, Embeddable, MappedSuperClass 어노테이션이 붙어있는 클래스에 자동으로 no-arg 생성자를 생성해줍니다.

### Entity

```kotlin
import java.time.ZonedDateTime
import javax.persistence.*

@Entity // 1
@Table(name = "space_conversations")
class SpaceConversation ( // 2

    @Id // 3
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 4
    var id: Long? = null,

    @Column(name = "secret")
    var secret: String? = null,

    @ManyToOne(fetch = FetchType.LAZY) // 5
    @JoinColumn(name = "space_id")
    var space: Space,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conversation_id")
    var conversation: Conversation,

    @Column(name = "inserted_at")
    var insertedAt: ZonedDateTime? = ZonedDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: ZonedDateTime? = ZonedDateTime.now(),

  @Convert(converter = UserStatusConverter::class) // 6
    @Column(name = "status")
    var status: UserStatus? = UserStatus.ACTIVATED,
)

enum class UserStatus(val status: String) { // 7
    ACTIVATED("activated"),
    DEACTIVATED("deactivated"),
    INACTIVATED("inactivated"),
    INOPERATIVE("inoperative"),
    ;
}
@Converter
class UserStatusConverter : AttributeConverter<UserStatus, String> {
    override fun convertToDatabaseColumn(UserStatus: com.kakaoenterprise.kakaowork.gate.message.enum.UserStatus): String {
        return UserStatus.status
    }

    override fun convertToEntityAttribute(value: String): com.kakaoenterprise.kakaowork.gate.message.enum.UserStatus {
        return com.kakaoenterprise.kakaowork.gate.message.enum.UserStatus.valueOf(value.toUpperCase())
    }
}
```

1. Class 설명

   - 먼저 코틀린에서 Entity 클래스를 작성할 때는 `data class` 로 선언 하는 것보다는 일반 클래스로 선언하는 것이 좋습니다. 그 이유는, `data class` 는 `open` 혹은 `abstract`와 같은 키워드를 허용할 수 없으므로 부모클래스가 되지 못합니다.
   - 그래서 상속성을 가져가기 위함과, 연관되어있는 다른 Entity가 있다면 지연로딩을 위해서라도 일반 `class`로 선언 후 `open` 키워드를 붙여주어야 합니다.
   - top-level 클래스이어야 하고 `enum` 이나 `interface`는 엔티티가 될 수 없습니다
   - final class는 사용하면 안됩니다.
     - Entity는 반드시 public 혹은 protected의 no-arg 생성자를 가지고 있어야합니다. 추가적인 생성자를 가져도됩니다

2. primary key를 가지는 변수를 선언하는 것을 뜻합니다

3. @GeneratedValue 어노테이션은 해당 Id 값을 어떻게 자동으로 생성할지 전략을 선택할 수 있습니다.

4. 연관관계 매핑시에 Lazy로딩 설정을 할 수 있습니다

5. enum class는 7번 같은 converter를 만들어서 적용해주시면 됩니다

6. user status enum class입니다

### 지연로딩

```kotlin
@Entity
@Table(name = "meeting_users")
@IdClass(PK::class)
class MeetingUser(
    ...

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    ...
)
```

- @ManyToOne 애노테이션은 기본값이 EAGER이므로 LAZY 지연로딩으로 설정합니다.

- JPA에서는 즉시로딩(EAGER) 보다는 지연로딩(LAZY)의 사용을 권장합니다.

### 서비스 - 레포지토리 계층에서 중복 코드 제거해보기

```kotlin
abstract class BaseService<E : Any, ID : Serializable?>(
        clazz: KClass<E>,
        entityManager: EntityManager) : SimpleJpaRepository<E, ID>(clazz.java, entityManager) {
}
```

- Service 레이어 내부에서 JPA의 create, findById 등을 사용하기 위해 별도의 메소드를 만드는 것은 비효율적입니다.

```kotlin
@Service
class UserService(
        private val userRepository: UserRepository,
        private val entityManager: EntityManager
) : BaseService<User, Long>(User::class, entityManager) {

    fun findByOrgId(orgId: Long): List<User> {
        return userRepository.findByOrgId(orgId)
    }
}
```

- SimpleJpaRepository를 상속한 BaseService 추상 클래스를 만들고, 서비스가 이 클래스를 상속받도록 합니다.

- 이렇게 하면 매번 일일이 중복 코드를 작성할 필요가 없습니다.

### Mapped Super Class를 통한 중복 코드 제거

```kotlin
@MappedSuperClass
abstract class BaseEntity {

    val createdAt: LocalDateTime;
    val updatedAt: LocalDateTime;
    ...
}

@Entity
@Table(name = "users", uniqueConstraints = [UniqueConstraint(columnNames = arrayOf("user_id"))])
class User(
    ...
): BaseEntity
```

- createdAt, updatedAt을 미리 선언해두고 Entity 하위에서 상속받게 하여 중복 코드를 제거합니다.

## Repository

스프링부트에서는 Entity의 **기본적인 CRUD가 가능하도록 JpaRepository 인터페이스**를 제공한다.

Spring Data JPA에서 제공하는 **JpaRepository 인터페이스를 상속**하여 사용하면 됩니다

### 메소드 가이드

```kotlin
@Repository
interface UserRepository : JpaRepository<User, Long> {

    fun findAllByVacationStartAtAndVacationEndAtAndPublicKey(userId: Long): MutableList<Users> // worst pratice

  @Query(SELECT u FROM USER u WHERE u.vacationStartAt AND u.vacationEndAt AND u.publicKey)
    fun findAllByVacationTimeAndPKey(userId: Long): MutableList<Users> // best pratice
}
```

- JPA의 메소드명이 34글자 초과되지 않도록 메소드 명 길이를 조절하도록 합니다.

- Jpa에서 제공하는 메소드가 34글자 초과될 경우 Query 어노테이션을 통해서 간결한 메소드를 쓰는것을 권장합니다.

## Pageable

```kotlin
@Repository
interface UserRepository : JpaRepository<User, Long> {

    fun findByOrderById(pageable: Pageable): Page<User>

}
```

JPA 함수에 Pageable 타입의 파라미터 입력시, 페이징 정보가 들어갑니다

결과값으로 DB 결과 List 및 페이징 정보를 함께 전달 받습니다

- JPA에서 결과값을 Entity로 기본으로 받으나 원하는 결과만 추출하고 싶을때는 VO을 사용할 수 있습니다.

## Pageable 사용시 주의점

```kotlin
@Repository
interface UserRepository : JpaRepository<User, Long> {

    fun findByOrderById(pageable: Pageable, Integer totalEleme): Page<User>
}
```

- JPA에서 페이징을 위해 기본적으로 count 쿼리를 날립니다.

- 매번 Count SQL 쿼리가 실행되는 것은 비효율적이므로 전체 사이즈를 애플리케이션 레벨에서 미리 구해놓고 던지도록 합니다.

## QueryDSL

### Gradle Kotlin DSL

```kotlin
plugins {
    ...
    kotlin("kapt") version "1.5.21" // 1
}

val queryDSLVersion = "4.4.0"

sourceSets["main"].withConvention(org.jetbrains.kotlin.gradle.plugin.KotlinSourceSet::class) {
    kotlin.srcDir("$buildDir/generated/source/kapt/main") // 3
}

dependencies {
  ...

    // Query DSL
    implementation("com.querydsl:querydsl-jpa:$queryDSLVersion") // 2
    kapt("com.querydsl:querydsl-apt:$queryDSLVersion:jpa") // 1
    kapt("org.springframework.boot:spring-boot-configuration-processor") // 1

  ...
}
```

1 : kapt는 코틀린 파일의 애노테이션을 처리하기 위한 의존성입니다.

2 : QueryDSL의 의존성입니다.

3 : QClass가 위치할 폴더를 명시하기 위한 설정입니다.

### Config

```kotlin
@Configuration
class QuerydslConfig(
        val entityManager: EntityManager

) {
    @Bean
    fun jpaQueryFactory(): JPAQueryFactory {
        return JPAQueryFactory(entityManager)
    }
}
```

- Repository에서 `JPAQueryFactory`를 주입받아 Querydsl을 사용할 수 있게 합니다.

### QuerydslCustomRepositorySupport의 사용

```kotlin
abstract class QuerydslCustomRepositorySupport(domainClass: Class<*>) : QuerydslRepositorySupport(domainClass) {

    private var queryFactory: JPAQueryFactory by Delegates.notNull()

    @PersistenceContext
    override fun setEntityManager(entityManager: EntityManager) {
        super.setEntityManager(entityManager)
        this.queryFactory = JPAQueryFactory(entityManager)
    }

    protected fun <T> select(expr: Expression<T>): JPAQuery<T> {
        return queryFactory.select(expr)
    }

    protected fun <T> selectFrom(from: EntityPath<T>): JPAQuery<T> {
        return queryFactory.selectFrom(from)
    }
}
```

- QuerydslRepositorySupport는 from 구문으로 시작합니다.
- 일반적인 Query는 Select부터 시작합니다.
- 코드의 가독성을 위해 QuerydslRepositorySupport 보다는 커스텀한 Querydsl을 만들어 사용합시다.

```kotlin
interface PaymentRepository : JpaRepository<Payment, Long>, PaymentCustomRepository {
}

interface PaymentCustomRepository {
    fun findUseSelectFrom(targetAmount: BigDecimal): List<Payment>
    fun findUseSelect(targetAmount: BigDecimal): List<Long>
    fun findUseFrom(targetAmount: BigDecimal): List<Payment>
}

class PaymentCustomRepositoryImpl : QuerydslCustomRepositorySupport(Payment::class.java), PaymentCustomRepository {

    override fun findUseFrom(targetAmount: BigDecimal): List<Payment> {
        return from(qPayment)
            .where(qPayment.amount.gt(targetAmount))
            .fetch()
    }

    override fun findUseSelectFrom(targetAmount: BigDecimal): List<Payment> {
        return selectFrom(qPayment)
            .where(qPayment.amount.gt(targetAmount))
            .fetch()
    }

    override fun findUseSelect(targetAmount: BigDecimal): List<Long> {
        return select(qPayment.id)
            .from(qPayment)
            .where(qPayment.amount.gt(targetAmount))
            .fetch()
    }
}
```

- 출처 : [https://github.com/cheese10yun/blog-sample/blob/master/query-dsl/src/main/kotlin/com/example/querydsl/repository/payment/PaymentRepository.kt](https://github.com/cheese10yun/blog-sample/blob/master/query-dsl/src/main/kotlin/com/example/querydsl/repository/payment/PaymentRepository.kt)

### QuerydslCustomRepositorySupport의 사용 시점

Querydsl을 사용하여 복잡한 join 쿼리를 사용하거나, @Query 애노테이션을 사용하여 JPQL을 작성하는 경우, 또는 다이나믹 쿼리를 사용해야하는 경우 사용합니다.

### N+1 문제를 해결하기 위한 fetch join 사용법

```kotlin
@Query("select a from Organization o join fetch o.users")
List<Organization> findByJoinFetch();
```

N+1 문제를 해결하기 위해 JPQL의 join fetch 기능을 사용할 수 있습니다.
