---
id: spring-security
title: Spring Security OAuth2 Login
---

## Spring Security OAuth2 Client 그 깊은 세계로

회사에서 사내 토이프로젝트를 개발하고 있다.

나는 여기서 Spring boot + Kotlin + JPA(Query DSL) + Security을 사용하여 개발 중에 있다.

Kakao i 계정 로그인 기능을 개발하기 위해 Spring Security OAuth2 Client를 사용 중인데, 몇 가지 궁금증이 생겨 내부 코드를 한 번 열어보았다.

시큐리티 모듈을 사용하면 개발자는 최소한의 코드만 작성해도 Token을 쉽게 발급 받을 수 있다.

그렇다보니, 내부가 어떻게 동작되는지 모르더라도 어떻게든(?) 돌아가는 코드를 작성할 수는 있다.

나는 이렇게 블랙박스로 개발하는 것을 좋아하지 않아서, 내가 찾아본 내용들을 정리해두고자 한다.

## Security 클래스 소개

- 개발에 사용했던 클래스들을 간략히 정리해보았다.

- 향후 TokenStore라던지 더 추가된다면 본문에도 추가해놓을 생각이다.

### WebSecurityConfigurerAdapter

- 시큐리티는 기본적으로 여러 개의 Filter Chain들이 등록되어있고 그 체인들을 거치면서 인증 과정을 거치는 프레임워크이다.

- **WebSecurityConfigurerAdapter**는 이 Security Filter Chain을 사용하기 위한 설정들을 사용하기 위해 설정하는 설정 클래스이다.

- 이 설정이라 함은, Security Filter Chain에 기본적으로 설정된 설정 값을 의미한다.

- 가령 Authorization Server에서 코드를 받아서 되돌아올 리다이렉트 경로가 대표적인 예이다.

### OAuth2AuthorizationRequestResolver

- **OAuth2AuthorizationRequestRedirectFilter**에서 동작하는 클래스로, **OAuth2AuthorizationRequest**를 리졸브한다.

- 동작은, Authorization Server의 엔드포인트로 사용자의 정보를 리다이렉트해서 인가 코드 부여 플로우를 시작하기 위한 **OAuth2AuthorizationRequest**를 리졸브하는 역할을 담당한다.

- path가 **/oatuh2/authorization/{registrationId}**와 일치하는지를 비교해서 일치하는 경우 **registrationId**를 추출하고 이를 사용해 ClientRegistration을 가져와 **OAuth2AuthorizationRequest**를 빌드한다.

### OAuth2UserService

- UserInfo 엔드포이늩에서 최종 사용자의 속성을 가져오며, OAuth2 타입의 AuthenticatedPrincipal을 리턴한다.

- 이 클래스를 상속받아 loadUser 메소드를 재정의하여 직접 Authorization Server로 유저 정보를 조회, 저장하고 **UserAttribute** 정보를 만드는 작업을 커스텀할 수 있다.

## 내부 구조의 흐름

- Security를 개발하면서 내부 필터가 어떤식으로 동작하는지 궁금해서 코드를 뜯어보았다.

- Security는 다음과 같은 과정으로 토큰을 발급받는다.

1. (Authorization Code Grant의 경우) Authorization로 인증 코드 요청 (보통 해당 Autohrization Server의 로그인 화면으로 Redirect 된다.)

2. Redirect를 받은 클라이언트(보통 Authorization Server에서 Redirect 주소를 커스텀하게 명시할 수 있도록 해준다.)가 Authorization 서버에서 받아온 Code를 사용해 Authorization Server로 토큰을 요청한다.

3. 받아온 토큰을 사용해 인증이 필요한 서버에 요청을 보낸다.

Security에서는 위와 같은 일련의 과정을 별도의 코드 구현 없이 스무스하게 진행할 수 있도록 제공해준다.

OAuth2 Client 설정을 끝낸 뒤, 브라우저를 켜서 `localhost:8080/oauth2/authorization/{registrationId}`를 입력해보면 인증을 위한 토큰을 발급받기 위한 프로세스가 진행되는 것을 확인할 수 있다.

여기서 나는 두 가지 의문점이 생겼다.

**Authorization Code**를 발급받기 위한 Redirect는 대체 어디서 진행되는 것이며,

**Token**은 또 어떻게 얻어오는지가 궁금했다. ( 내부적으로 RestTemplate을 써서 하는건지? )

중간 단계가 어떻게 동작하는지에 대해서 스프링 코드를 열어보면서 알아보도록 하자.

### OAuth2AuthorizationRequestRedirectFilter

- 이 **OAuth2AuthorizationRequestRedirectFilter**는 **OncePerRequestFilter**를 구현하는 필터 클래스이다. (OncePerRequestFilter에 대한 내용은 [여기](https://minkukjo.github.io/framework/2020/12/18/Spring-142/)를 참조)

- 내부를 까보면 다음과 같은 코드가 존재한다.

```java
 @Override
 protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
   throws ServletException, IOException {
  try {
   OAuth2AuthorizationRequest authorizationRequest = this.authorizationRequestResolver.resolve(request);
   if (authorizationRequest != null) {
    this.sendRedirectForAuthorization(request, response, authorizationRequest); // Redirect 되는 부분
    return;
   }
  }
        ...
```

- OAuth2AuthorizationRequestResolver에 의해 리졸빙된 **OAuth2AuthorizationRequest**를 파라미터로 던져서 Authorization Server로 리다이렉트를 시킨다.

- Redirect된 서버에서 인증이 끝난 후 (아마도 ID,Password 입력) 해당 Authorization Server의 OAuth Client에 정의된 Redirect Uri로 리다이렉트 되게 된다.

- 필자의 경우 요청을 보냈던 서버로 다시 요청을 받게 했고, OAuth2 Security에서 기본으로 설정하는 리다이렉트 주소도 커스텀 하였다.

```java
public static final String DEFAULT_FILTER_PROCESSES_URI = "/login/oauth2/code/*"; // 기본 값
```

- 코드까지 발급이 완료되었다면 다음은 토큰을 발급받기 위한 필터로 진입한다.

### OAuth2LoginAuthenticationFilter

- OAuth2LoginAuthenticationFilter의 **attemptAuthentication** 메소드가 토큰을 발급하고 Authentication 객체를 반환하는 객체이다.

- 여기서 **Authentication** 객체는 한 마디로 **인증된 사용자**를 의미한다. 내부적으로는 principal(사용자 식별), credentails(주로 비밀번호), authorities(사용자가 부여받은 권한)에 대한 정보를 갖는다. (예시로는 role과 scope)

- 아래는 유저 인증 객체를 생성하고, 토큰을 가져오는 코드 전문이다.

```java
 @Override
 public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
   throws AuthenticationException {
  MultiValueMap<String, String> params = OAuth2AuthorizationResponseUtils.toMultiMap(request.getParameterMap());
  if (!OAuth2AuthorizationResponseUtils.isAuthorizationResponse(params)) {
   OAuth2Error oauth2Error = new OAuth2Error(OAuth2ErrorCodes.INVALID_REQUEST);
   throw new OAuth2AuthenticationException(oauth2Error, oauth2Error.toString());
  }
  OAuth2AuthorizationRequest authorizationRequest = this.authorizationRequestRepository
    .removeAuthorizationRequest(request, response);
  if (authorizationRequest == null) {
   OAuth2Error oauth2Error = new OAuth2Error(AUTHORIZATION_REQUEST_NOT_FOUND_ERROR_CODE);
   throw new OAuth2AuthenticationException(oauth2Error, oauth2Error.toString());
  }
  String registrationId = authorizationRequest.getAttribute(OAuth2ParameterNames.REGISTRATION_ID);
  ClientRegistration clientRegistration = this.clientRegistrationRepository.findByRegistrationId(registrationId);
  if (clientRegistration == null) {
   OAuth2Error oauth2Error = new OAuth2Error(CLIENT_REGISTRATION_NOT_FOUND_ERROR_CODE,
     "Client Registration not found with Id: " + registrationId, null);
   throw new OAuth2AuthenticationException(oauth2Error, oauth2Error.toString());
  }
  // @formatter:off
  String redirectUri = UriComponentsBuilder.fromHttpUrl(UrlUtils.buildFullRequestUrl(request))
    .replaceQuery(null)
    .build()
    .toUriString();
  // @formatter:on
  OAuth2AuthorizationResponse authorizationResponse = OAuth2AuthorizationResponseUtils.convert(params,
    redirectUri);
  Object authenticationDetails = this.authenticationDetailsSource.buildDetails(request);
  OAuth2LoginAuthenticationToken authenticationRequest = new OAuth2LoginAuthenticationToken(clientRegistration,
    new OAuth2AuthorizationExchange(authorizationRequest, authorizationResponse));
  authenticationRequest.setDetails(authenticationDetails);
  OAuth2LoginAuthenticationToken authenticationResult = (OAuth2LoginAuthenticationToken) this
    .getAuthenticationManager().authenticate(authenticationRequest);
  OAuth2AuthenticationToken oauth2Authentication = new OAuth2AuthenticationToken(
    authenticationResult.getPrincipal(), authenticationResult.getAuthorities(),
    authenticationResult.getClientRegistration().getRegistrationId());
  oauth2Authentication.setDetails(authenticationDetails);
  OAuth2AuthorizedClient authorizedClient = new OAuth2AuthorizedClient(
    authenticationResult.getClientRegistration(), oauth2Authentication.getName(),
    authenticationResult.getAccessToken(), authenticationResult.getRefreshToken());

  this.authorizedClientRepository.saveAuthorizedClient(authorizedClient, oauth2Authentication, request, response);
  return oauth2Authentication;
 }
```

### 토큰 발급은 대체 어디에서?

- 코드가 꽤 길기도하고 이렇게 봐서는 도무지 어디에서 토큰을 발급하는지 알기가 어려웠다.

- 무식하면 손발이 고생한다고, 도무지 알 수가 없고 궁금하기는 해서 하나 하나 디버그를 찍어서 확인해본 결과,

```java
OAuth2LoginAuthenticationToken authenticationResult = (OAuth2LoginAuthenticationToken) this
    .getAuthenticationManager().authenticate(authenticationRequest);
```

- **AuthenticationManager**의 **authenticate** 메소드에서 Authorizaiton을 호출하고, 토큰을 얻어오는 것으로 확인하였다.

```java
@Override
 public Authentication authenticate(Authentication authentication) throws AuthenticationException {
  Class<? extends Authentication> toTest = authentication.getClass();
  AuthenticationException lastException = null;
  AuthenticationException parentException = null;
  Authentication result = null;
  Authentication parentResult = null;
  int currentPosition = 0;
  int size = this.providers.size();
  for (AuthenticationProvider provider : getProviders()) {
   if (!provider.supports(toTest)) {
    continue;
   }
   if (logger.isTraceEnabled()) {
    logger.trace(LogMessage.format("Authenticating request with %s (%d/%d)",
      provider.getClass().getSimpleName(), ++currentPosition, size));
   }
   try {
    result = provider.authenticate(authentication); // 여기서 호출
    if (result != null) {
     copyDetails(authentication, result);
     break;
    }
   }
```

- **AuthenticationProvider**의 authenticate 메소드의 구현을 보면 내부에서 토큰을 얻어오는 과정이 있음을 알 수 있다.

- **AuthenticationProvider**는 여러 구현체가 존재하는데, 토큰을 얻는데 사용하는 Provider의 이름은 **OAuth2LoginAuthenticationProvider**이다.

### 유저 인증 정보를 생성하는 주체 OAuth2LoginAuthenticationProvider

```java
public class OAuth2LoginAuthenticationProvider implements AuthenticationProvider {
    ...


 @Override
 public Authentication authenticate(Authentication authentication) throws AuthenticationException {
  OAuth2LoginAuthenticationToken loginAuthenticationToken = (OAuth2LoginAuthenticationToken) authentication;
        ...
  OAuth2AuthorizationCodeAuthenticationToken authorizationCodeAuthenticationToken;
  try {
   authorizationCodeAuthenticationToken = (OAuth2AuthorizationCodeAuthenticationToken) this.authorizationCodeAuthenticationProvider
     .authenticate(new OAuth2AuthorizationCodeAuthenticationToken(
       loginAuthenticationToken.getClientRegistration(),
       loginAuthenticationToken.getAuthorizationExchange())); // 토큰을 얻는 곳은 여기
  }
  ...
        ...
        OAuth2User oauth2User = this.userService.loadUser(new OAuth2UserRequest(
    loginAuthenticationToken.getClientRegistration(), accessToken, additionalParameters));
       ...
 }
 ...
}
```

- 유저 인증 정보인 **Authentication** 객체를 만드는 핵심 로직을 담당하는 클래스가 바로 **OAuth2LoginAuthenticationProvider**이다.

- **OAuth2LoginAuthenticationProvider**의 authenticate 메소드에 잘 보면, 토큰 발급 이후 **userService**의 **loadUser** 메소드를 통해 **OAuth2User** 객체를 얻어오는 것을 확인할 수 있다.

- **userService**는 일반적으로 유저가 커스터마이징을 하여 사용하는 메소드로써, 나 역시 획득한 토큰을 사용해 Authorization Server에 토큰에 해당하는 유저 정보를 얻어오는 로직을 구현했었다.

### AuthorizationCode 발급 방식의 Authentication 제공자 OAuth2AuthorizationCodeAuthenticationProvider

```java
public class OAuth2AuthorizationCodeAuthenticationProvider implements AuthenticationProvider {

    ...

 @Override
 public Authentication authenticate(Authentication authentication) throws AuthenticationException {
  ...
  OAuth2AccessTokenResponse accessTokenResponse = this.accessTokenResponseClient.getTokenResponse(
    new OAuth2AuthorizationCodeGrantRequest(authorizationCodeAuthentication.getClientRegistration(),
      authorizationCodeAuthentication.getAuthorizationExchange()));
  ...
 }
    ...
}
```

- **OAuth2AuthorizationCodeAuthenticationProvider**는 AuthorizationCode Grant 방식의 **Authentication** 객체 생성을 위한 정보를 제공해주는 클래스이다.

- 이 클래스의 **authenticate** 메소드 내부에 **getTokenResponse** 라는 메소드가 있다. 이 메소드를 타고 들어가보면, 토큰을 발행하는 인터페이스인 **OAuth2AccessTokenResponseClient**를 만날 수 있다.

### OAuth2AccessTokenResponseClient

```java
/**
 * A strategy for &quot;exchanging&quot; an authorization grant credential (e.g. an
 * Authorization Code) for an access token credential at the Authorization Server's Token
 * Endpoint.
 *
 * @author Joe Grandja
 * @since 5.0
 * @see AbstractOAuth2AuthorizationGrantRequest
 * @see OAuth2AccessTokenResponse
 * @see AuthorizationGrantType
 * @see <a target="_blank" href="https://tools.ietf.org/html/rfc6749#section-1.3">Section
 * 1.3 Authorization Grant</a>
 * @see <a target="_blank" href=
 * "https://tools.ietf.org/html/rfc6749#section-4.1.3">Section 4.1.3 Access Token Request
 * (Authorization Code Grant)</a>
 * @see <a target="_blank" href=
 * "https://tools.ietf.org/html/rfc6749#section-4.1.4">Section 4.1.4 Access Token Response
 * (Authorization Code Grant)</a>
 */
@FunctionalInterface
public interface OAuth2AccessTokenResponseClient<T extends AbstractOAuth2AuthorizationGrantRequest> {

 /**
  * Exchanges the authorization grant credential, provided in the authorization grant
  * request, for an access token credential at the Authorization Server's Token
  * Endpoint.
  * @param authorizationGrantRequest the authorization grant request that contains the
  * authorization grant credential
  * @return an {@link OAuth2AccessTokenResponse} that contains the
  * {@link OAuth2AccessTokenResponse#getAccessToken() access token} credential
  * @throws OAuth2AuthorizationException if an error occurs while attempting to
  * exchange for the access token credential
  */
 OAuth2AccessTokenResponse getTokenResponse(T authorizationGrantRequest);

}
```

- 이 클래스의 주석을 읽어보면 알겠지만, **Authorization Server**의 토큰 엔드포인트로 엑세스 토큰을 얻어오기 위한 함수형 인터페이스이다.

- 이렇게 제네릭 타입과 인터페이스로 구현한 이유는, OAuth Token의 token grant type이 여러 방식이 있기 때문에 각기 다른 방식을 유연하게 제공하기 위함으로 보인다. (스프링은 아주 객체지향스럽게 잘 설계한 프레임워크 중 하나이다.)

### AuthorizationToken Grant 방식의 토큰 발급 주체인 DefaultAuthorizationCodeTokenResponseClient

```java
public final class DefaultAuthorizationCodeTokenResponseClient
  implements OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> {

 private static final String INVALID_TOKEN_RESPONSE_ERROR_CODE = "invalid_token_response";

 private Converter<OAuth2AuthorizationCodeGrantRequest, RequestEntity<?>> requestEntityConverter = new OAuth2AuthorizationCodeGrantRequestEntityConverter();

 private RestOperations restOperations;

 public DefaultAuthorizationCodeTokenResponseClient() {
  RestTemplate restTemplate = new RestTemplate(
    Arrays.asList(new FormHttpMessageConverter(), new OAuth2AccessTokenResponseHttpMessageConverter()));
  restTemplate.setErrorHandler(new OAuth2ErrorResponseErrorHandler());
  this.restOperations = restTemplate;
 }

 @Override
 public OAuth2AccessTokenResponse getTokenResponse(
   OAuth2AuthorizationCodeGrantRequest authorizationCodeGrantRequest) {
  Assert.notNull(authorizationCodeGrantRequest, "authorizationCodeGrantRequest cannot be null");
  RequestEntity<?> request = this.requestEntityConverter.convert(authorizationCodeGrantRequest);
  ResponseEntity<OAuth2AccessTokenResponse> response = getResponse(request);
  OAuth2AccessTokenResponse tokenResponse = response.getBody();
  if (CollectionUtils.isEmpty(tokenResponse.getAccessToken().getScopes())) {
   // As per spec, in Section 5.1 Successful Access Token Response
   // https://tools.ietf.org/html/rfc6749#section-5.1
   // If AccessTokenResponse.scope is empty, then default to the scope
   // originally requested by the client in the Token Request
   // @formatter:off
   tokenResponse = OAuth2AccessTokenResponse.withResponse(tokenResponse)
     .scopes(authorizationCodeGrantRequest.getClientRegistration().getScopes())
     .build();
   // @formatter:on
  }
  return tokenResponse;
 }

 private ResponseEntity<OAuth2AccessTokenResponse> getResponse(RequestEntity<?> request) {
  try {
   return this.restOperations.exchange(request, OAuth2AccessTokenResponse.class);
  }
  catch (RestClientException ex) {
   OAuth2Error oauth2Error = new OAuth2Error(INVALID_TOKEN_RESPONSE_ERROR_CODE,
     "An error occurred while attempting to retrieve the OAuth 2.0 Access Token Response: "
       + ex.getMessage(),
     null);
   throw new OAuth2AuthorizationException(oauth2Error, ex);
  }
 }

 /**
  * Sets the {@link Converter} used for converting the
  * {@link OAuth2AuthorizationCodeGrantRequest} to a {@link RequestEntity}
  * representation of the OAuth 2.0 Access Token Request.
  * @param requestEntityConverter the {@link Converter} used for converting to a
  * {@link RequestEntity} representation of the Access Token Request
  */
 public void setRequestEntityConverter(
   Converter<OAuth2AuthorizationCodeGrantRequest, RequestEntity<?>> requestEntityConverter) {
  Assert.notNull(requestEntityConverter, "requestEntityConverter cannot be null");
  this.requestEntityConverter = requestEntityConverter;
 }

 /**
  * Sets the {@link RestOperations} used when requesting the OAuth 2.0 Access Token
  * Response.
  *
  * <p>
  * <b>NOTE:</b> At a minimum, the supplied {@code restOperations} must be configured
  * with the following:
  * <ol>
  * <li>{@link HttpMessageConverter}'s - {@link FormHttpMessageConverter} and
  * {@link OAuth2AccessTokenResponseHttpMessageConverter}</li>
  * <li>{@link ResponseErrorHandler} - {@link OAuth2ErrorResponseErrorHandler}</li>
  * </ol>
  * @param restOperations the {@link RestOperations} used when requesting the Access
  * Token Response
  */
 public void setRestOperations(RestOperations restOperations) {
  Assert.notNull(restOperations, "restOperations cannot be null");
  this.restOperations = restOperations;
 }

}

```

- 드디어 각고의 노력 끝에 Token API를 요청하는 클래스를 만날 수 있게 되었다.

- 스프링 역시 내부적으로 토큰 요청을 위한 Http Client로 **RestTemplate**을 사용한다는 것을 알 수 있다.

- 재밌는 점은 RestTemplate의 인터페이스인 **RestOperations**를 타입으로 갖는데, 이는 추후에 **RestTemplate**이 아닌 다른 구현체도 사용이 가능하도록 **setRestOperations**를 통해 다른 **HttpClient**도 사용할 수 있게 유연하게 설계한 것이 눈에 띈다. (크...!!)

- 그래서 실질적으로 Authorization의 토큰 엔드포인트로 요청을 하는 코드는 아래의 getResponse 메소드이다.

```java
 private ResponseEntity<OAuth2AccessTokenResponse> getResponse(RequestEntity<?> request) {
  try {
   return this.restOperations.exchange(request, OAuth2AccessTokenResponse.class);
  }
  catch (RestClientException ex) {
   OAuth2Error oauth2Error = new OAuth2Error(INVALID_TOKEN_RESPONSE_ERROR_CODE,
     "An error occurred while attempting to retrieve the OAuth 2.0 Access Token Response: "
       + ex.getMessage(),
     null);
   throw new OAuth2AuthorizationException(oauth2Error, ex);
  }
 }
```

- 여기서 한 가지 더, 스프링에서 이러한 외부 API를 호출하는 메소드를 별도의 메소드로 뽑아내고, 이름을 **getResponse**로 준 것을 볼 수 있다.

- 나같은 경우 이러한 외부 호출하는 메소드의 경우 **call**, **request**와 같이 **"내가 다른 서버에 요청을 한다"**라는 의미로 메소드명을 지었는데, 스프링의 경우 그 행위가 결과적으로 **무엇**을 하기 위한 것인지에 대해서만 메소드명을 적어놓았던 점이 인상깊었다. (참고해야겠다.)

## 내부 탐험 소감

- 깊고 깊은 Spring 내부 코드를 구경하는 것은 재밌었다.

- 또한 스프링은 큰 프로젝트이고 많은 개발자들이 기여해서 그런지 코드가 객체지향 설계를 잘 지키고 있고, 깔끔하게 구성되어 있어서 읽기가 좋았다.

- 모르는건 대부분 도큐먼트에 내용이 있더라.

- 한국에 스프링 시큐리티에 관한 책은 왜 없을까? 아쉽다.

## Reference

<https://docs.spring.io/spring-security/site/docs/current/reference/html5/>
