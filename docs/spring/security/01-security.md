---
id: spring-security
title: Spring Security OAuth 적용기 1편
---

## Spring Security OAuth2란?

<https://charsyam.wordpress.com/2018/05/11/%EC%9E%85-%EA%B0%9C%EB%B0%9C-spring-security-oauth%EC%9D%98-redistokenstore%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9D%80-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90-%EC%A0%81%ED%95%A9%ED%95%98%EC%A7%80-%EC%95%8A/>

위 글을 보면, Spring Security의 RedisTokenStore에서 토큰 정보를 List에 저장하고 선형 탐색하는 경우 O(n)이 되어서 이슈가 있다고 나오는데,

<https://github.com/spring-projects/spring-security-oauth/blob/main/spring-security-oauth2/src/main/java/org/springframework/security/oauth2/provider/token/store/redis/RedisTokenStore.java>

바뀐 코드에선 List가 아닌 Set 자료구조를 사용해서 O(1)로 개선한 것을 확인할 수 있었다.

storeAccessToken
