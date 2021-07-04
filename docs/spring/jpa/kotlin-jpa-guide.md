---
id: kotlin-jpa-guide
title: Kotlin JPA 개발 가이드
---

## Kotlin JPA 개발 가이드

### 서비스 - 레포지토리 계층에서 중복 코드 제거해보기

```kotlin
abstract class BaseEntityService<E : Any, ID : Serializable?>(
        clazz: KClass<E>,
        entityManager: EntityManager) : SimpleJpaRepository<E, ID>(clazz.java, entityManager) {
}
```

- Service 레이어 내부에서 JPA의 create, findById 등을 사용하기 위해 별도의 메소드를 만드는 것은 비효율적입니다.

- SimpleJpaRepository를 상속한 **BaseEntityService** 추상 클래스를 만들고, 서비스가 이 클래스를 상속받도록 합니다.

```kotlin
@Service
class MenuService(
        private val menuRepository: MenuRepository,
        private val entityManager: EntityManager
) : BaseEntityService<Menu, Int>(Menu::class, entityManager) {
​
    fun findAllJoinRestaurant(): MutableList<Menu> {
        return menuRepository.findAllJoinRestaurant()
    }
}
```

- 이렇게 하면 매번 일일이 중복 코드를 작성할 필요가 없습니다.

### Mapped Super Class를 통한 중복 코드 제거

```kotlin
@MappedSuperClass
abstract class BaseEntity {

    val createdAt: LocalDateTime;
    val updatedAt: LocalDateTime;
    ...
}
```

- createdAt, updatedAt을 미리 선언해두고 Entity 하위에서 상속받게 하여 중복 코드를 제거합니다.
