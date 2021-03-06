---
id: 12-ingress
title: 12. 인그레스
---

> 쿠버네티스의 인그레스에 대하여

## 인그레스

인그레스는 k8s 클러스터 외부에서의 요청을 k8s 클러스터 내부의 애플리케이션에 연결하기 위한 API 오브젝트이다.

외부 공개용 URL과 매핑하여 인터넷에 공개하는데 사용되며 SSL/TSL 암호화나 세션 어피니티 등의 기능을 갖추고 있어 기존 웹 애플리케이션을 쿠버네티스화하는 데 유용한 오브젝트다.

## 인그레스 기능과 개요

인그레스의 대표적인 기능으로는 다음과 같다.

- 공개 URL과 애플리케이션 매핑
- 복수의 도메인 이름을 가지는 가상 호스트 기능
- 클라이언트의 요청을 여러 파드에 분산
- SSL/TLS 암호화 통신 HTTPS
- 세션 어피니티

인그레스를 이용하면 기존의 로드밸런서나 리버스 프록시를 대체할 수 있다.

인그레스 컨트롤러는 다른 컨트롤러와 달리 마스터상의 kube-controller-manager의 일부로 실행되지 않는다.

다양한 인그레스 컨트롤러가 있지만 그중에서 NGINX 인그레스 컨트롤러가 대표적이다.

퍼블릭 클라우드의 k8s 서비스는 클라우드의 기능과 인그레스를 연동하여 공인 IP 주소를 연결한다.

반면에 온프레미스에서 k8s 클러스터를 구축하는 경우에는 공인 IP 주소 (이하 VIP)를 노드 간에 공유하는 기능을 추가해야한다.

이를 위해 `kube-keepalived-vip`가 깃허브에 공개되어있다.

`kube-keepalived-vip`는 쿠버네티스의 소스 코드에는 포함되지 않지만 CNCF 쿠버네티스의 프로젝트의 깃헙에 등록되어있다.

## 공개 URL과 애플리케이션의 매핑

인그레스를 사용하면 공개 URL의 경로에 복수의 애플리케이션을 매핑할 수 있다.

가령 `http://test.com`이라는 도메인에 `/reservation`과 `/order`라는 경로에 각각 애플리케이션을 매핑하는 것이 가능하다.

그러면 사용자는 하나의 URL이지만 내부적으로는 애플리케이션이 적절히 분리되어있어 느슨하게 결합된 애플리케이션의 집합체로 구현할 수 있다.

이러한 느슨한 연결은 MSA처럼 각 모듈의 변경사항을 최소화 할 수 있고 생산성도 높일 수 있다.

인그레스의 또 다른 기능은 **가상 호스트**라는 기능이 존재한다.

이는 하나의 공인 IP 주소를 공유하여 도메인 이름별로 전송되는 곳을 설정할 수 있다.

가령 기존 애플리케이션이 `http://test.com`인데 특정 이벤트 기간에만 접속이 가능한 `http://event.com`이라는 도메인으로 접속하는 경우 인그레스가 요청을 받아 적절한 애플리케이션에 뿌려주는 것이 가능하다.

## 인그레스 SSL/TLS 암호화

인그레스에 SSL/TLS 암호화를 설정하면 브라우저로부터 HTTPS를 사용하여 접속할 수 있다.

이 방법은 인그레스 컨트롤러에 부하가 집중되기 때문에 정식 운영 서비스에 적용할 때는 성능의 병목 현상이 발생하지 않도록 주의해야할 것이다.

## 모더니제이션 과제

기존 웹 애플리케이션에서는 로드밸런서의 세션 어피니티(Session Affinity)를 사용하는 것이 일반적이었다.

이 세션을 통해 유저의 로그인 정보와 장바구니의 아이템들을 기억해둘 수 있었다.

그러나 HTTP는 기본적으로 Stateless한 프로토콜이기 때문에 서버와 클라이언트간의 통신을 유지할 수 없다.

따라서 애플리케이션은 브라우저를 식별하기 위한 쿠키를 HTTP 프로토콜의 헤더에 포함시켜 전송한다.

그런데 또 다른 문제가 있다.

만약 애플리케이션의 서버를 2대 이상을 운용한다면 그 앞에 로드밸런서를 두는 것이 일반적인 형태이다.

그런데 로드밸런서가 세션 정보를 갖지 않은 서버에 요청을 보내면 올바른 처리를 수행할 수 없게 된다.

그러면 로그인을 했는데 다시 로그인을 해야하고, 장바구니가 다 비워지게 된다.

이 문제를 해결하기 위해 로드밸런서에는 세션 어피니티가 존재한다.

이 기능은 같은 브라우저에서의 요청은 항상 같은 서버의 프로세스에 전달해주는 기능이다.

인그레스 역시 이러한 세션 어피니티 기능을 지지원한다.

이를 사용해 k8s에서는 같은 브라우저의 요청이면 같은 pod으로 요청을 전달해주는 것이 가능하다.

## kube-keepalived-vip에 대한 VIP 획득과 HA 구성

NGINX 인그레스 컨트롤러는 Virtual IP(VIP)를 노드 간 공유하는 기능을 갖고 있지 않다.

때문에 복수의 노드로 구성된 k8s에서는 keepalived 설정을 사용해야한다.

퍼블릭 클라우드의 경우 인그레스와 VIP를 연결하는 기능이 있지만, 온프레미스 환경에서는 인그레스에 VIP를 연결하기 위한 추가적인 작업이 필요하다.

### 핵심 요약

#### 1) 인그레스를 사용하기 위해서는 k8s 클러스터 상에 인그레스 컨트롤러가 동작하고 있어야 한다

#### 2) 인그레스는 URL의 경로와 애플리케이션을 매핑해주는 리버스 프록시다

#### 3) 하나의 IP 주소에 여러 개의 도메인 이름을 등록하여 도메인 이름에 대응하는 애플리케이션을 정의할 수 있다

#### 4) 인그레스의 세션 어피니티 기능은 로드밸런서에 의존하는 레거시 웹 애플리케이션을 쿠버네티스에서 돌릴 떄 유용하게 사용할 수 있다

#### 5) NGINX 컨트롤러와 kube-keepalived-vip를 사용하면 VIP를 공유하는 노드로 HA 구성이 가능하다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
