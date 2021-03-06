---
id: 16-ingress-deeper
title: 16. 인그레스 기능
---

> 쿠버네티스 인그레스의 기능들에 대하여

## 인그레스

인그레스는 k8s 클러스터 외부에서의 요청을 k8s 클러스터 내부의 애플리케이션에 연결하기 위한 API 오브젝트이다.

인그레스에는 SSL/TSL 암호화(흔히 알고 있는 HTTPS 보안 인증서 설정도 가능)나 세션 어피니티(트래픽 고정) 등의 기능을 갖추고 있다.

## 인그레스의 기능과 개요

인그레스의 대표 기능은 다음과 같다.

- 공개 URL과 애플리케이션 매핑

- 복수의 도메인 이름을 가지는 가상 호스트 기능

- 클라이언트의 요청을 여러 파드에 분산 (L7)

- SSL/TLS 암호화 통신 HTTPS

- 세션 어피니티

인그레스를 사용하기 위해서는 k8s 클러스터에 인그레스 컨트롤러가 설정되어 있어야한다.

public 클라우드에는 기본적으로 설정이 되어있는데 `minikube`는 설정이 안되어있으니 인그레스 컨트롤러 설정부터 해야한다.

## 인그레스 셋팅

**fun**하고 **cool**하고 **sexy**하게 `minikube`를 시작해주자.

<img width="568" alt="스크린샷 2021-01-18 오후 8 21 26" src="https://user-images.githubusercontent.com/43809168/104909117-bdf2bd80-59ca-11eb-8c09-b366b283b367.png"/>

그리고 인그레스 컨트롤러 활성화를 위해 다음 명령어를 입력해준다.

`minikube addons enable ingress`

그럼 귀신같이 아래와 같이 에러가 뜨는데,

<img width="559" alt="스크린샷 2021-01-18 오후 8 40 13" src="https://user-images.githubusercontent.com/43809168/104910888-5ee27800-59cd-11eb-8ad9-d9e7c20fb8e1.png"/>

당황하지 말고, 이 [이슈](https://github.com/kubernetes/minikube/issues/7332)로 가보면 해결법이 나와있다.

<img width="947" alt="스크린샷 2021-01-18 오후 8 40 45" src="https://user-images.githubusercontent.com/43809168/104910937-715cb180-59cd-11eb-9f80-672c4a40b11f.png"/>

이 방법대로하면 인그레스 컨트롤러를 활성화할 수 있다.

미니쿠베 애드온 리스트를 출력해서 인그레스가 활성화 되어있는지 확인하자.

<img width="441" alt="스크린샷 2021-01-18 오후 8 41 32" src="https://user-images.githubusercontent.com/43809168/104911012-8d605300-59cd-11eb-9513-12839ab42ac6.png"/>

이제 미니쿠베 가상 서버의 IP 주소로 인그레스를 사용할 수 있게 되었다.

`minikube ip`로 ip 주소 확인이 가능하다.

## 공개 URL과 애플리케이션의 매핑

인그레스를 사용하면 공개 URL의 경로 부분에 복수의 애플리케이션을 매핑할 수 있다.

가령 `http://abc.sample.com`이란 URL에 `reservation`과 `order`라는 경로에 각각의 전용 애플리케이션을 매핑할 수 있다.

### 가상 호스트와 서비스를 매핑하는 매니페스트

인그레스의 매니페스트에서는 메타데이터 (metadata)와 애노테이션(annotation)이 중요하다.

애노테이션에 키와 값을 기재하여, 인그레스 컨트롤러에 명령을 전달한다.

- `kubernetes.io/ingress.class: 'nginx'` : 여러 인그레스 컨틀롤러가 k8s 클러스터에서 동작 중인 경우에는 이 애노테이션을 명시적으로 지정할 필요가 있다.

- `nginx.ingress.kubernetes.io/rewrite-target: /` : URL 경로를 바꾸도록 하는 애노테이션이다. 이 설정이 없으면 클라이언트로부터의 요청 경로를 파드에게 그대로 전송하여 File NotFound 에러가 날 수 있다.

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: hello-ingress
  annotations: ## 인그레스 컨트롤러 설정
    kubernetes.io/ingress.class: 'nginx' ## nginx 컨트롤러 사용
    nginx.ingress.kubernetes.io/rewrite-target: / ## URL 경로를 바꾸는 애노테이션
spec: ## 인그레스 사양
  rules:
    - host: abc.sample.com ## FQDN 설정
      http:
        paths: ## URL의 경로와 백엔드 서비스를 대응시키는 목록을 기술
          - path: / ## 백엔드 서비스의 Path
            backend:
              serviceName: helloworld-svc ## 매핑되는 서비스명과 포트
              servicePort: 8080
          - path: /apl2
            backend:
              serviceName: nginx-svc
              servicePort: 9080
    - host: xyz.sample.com
      http:
        paths:
          - path: /
            backend:
              serviceName: java-svc
              servicePort: 9080
```

자 그러면 지금부터 차례로 애플리케이션을 배포하고 인그레스를 설정해보자.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
        - image: 'strm/helloworld-http'
          name: hello-world-container
          ports:
            - containerPort: 80
  selector:
    matchLabels:
      app: hello-world
---
apiVersion: v1
kind: Service
metadata:
  name: helloworld-svc
spec:
  type: NodePort
  ports:
    - port: 8080
      protocol: TCP
      targetPort: 80
      nodePort: 31445
  selector:
    app: hello-world
```

첫 번째 애플리케이션은 간단히 hello-world와 파드의 이름을 출력하는 애플리케이션이다.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - image: nginx
          name: nginx
          ports:
            - containerPort: 80
  selector:
    matchLabels:
      app: nginx
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-svc
spec:
  selector:
    app: nginx
  ports:
    - port: 9080
      targetPort: 80
```

다음 애플리케이션은 nginx용 애플리케이션이다.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: java-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: liberty
    spec:
      containers:
        - image: openliberty/open-liberty:javaee8-ubi-min-amd64
          name: open-liberty
          ports:
            - containerPort: 9080
              name: httpport
  selector:
    matchLabels:
      app: liberty
---
apiVersion: v1
kind: Service
metadata:
  name: java-svc
spec:
  selector:
    app: liberty
  ports:
    - port: 9080
      targetPort: 9080
```

세 번째 애플리케이션은 Open Liberty라는 애플리케이션이다.

세 애플리케이션 모두 브라우저에 접속하면 고유의 UI를 출력하게 되는데 이를 통해 다른 애플리케이션으로 접근이 되는지 테스트해볼 것이다.

브라우저에서 인그레스를 테스트하려면 도메인 이름을 사용해야하는데, 정식 도메인 이름을 취득하는 과정은 꽤 귀찮다.

이를 위해 간단하게 hosts 파일에 도메인과 IP 주소를 등록할 수 있다.

우리는 앞서 minikube의 IP 주소를 얻어올 수 있었다.

```
vi /etc/hosts

##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
...
...
...

192.168.64.2 abc.sample.com xyz.sample.com # 추가
```

이후 URL 주소에 접근하면 해당 서비스에 접근이 가능해진다.

<img width="876" alt="스크린샷 2021-01-18 오후 9 07 25" src="https://user-images.githubusercontent.com/43809168/104913590-2b095180-59d1-11eb-86c8-79b2467cf2c9.png"/>

<img width="1341" alt="스크린샷 2021-01-18 오후 9 08 14" src="https://user-images.githubusercontent.com/43809168/104913658-483e2000-59d1-11eb-872f-3010e9266241.png"/>

<img width="1137" alt="스크린샷 2021-01-18 오후 9 07 35" src="https://user-images.githubusercontent.com/43809168/104913607-3197c900-59d1-11eb-8ed6-8c244884f81d.png"/>

## 인그레스 SSL/TLS 암호화

인그레스에 SSL/TLS 암호화를 설정해보자.

인그레스에 SSL/TLS 인증서를 설정하면 파드에는 암호 설정을 따로 안해도 괜찮지만, 정식 운영 서비스에 적용할 때는 성능의 병목현상이 되지 않게 주의해야한다.

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: hello-ingress
  annotations:
    kubernetes.io/ingress.class: 'nginx'
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/force-ssl-redirect: 'true' # 리다이렉트 옵션

spec:
  tls:
    - hosts:
        - abc.sample.com
      secretName: tls-certificate

  rules:
    - host: abc.sample.com
      http:
        paths:
          - path: /
            backend:
              serviceName: helloworld-svc
              servicePort: 8080
          - path: /apl2
            backend:
              serviceName: nginx-svc
              servicePort: 9080
    - host: xyz.sample.com
      http:
        paths:
          - path: /
            backend:
              serviceName: java-svc
              servicePort: 9080
```

인증서를 포함하고 있는 ingress yaml 파일이다.

이전과 다른 점은 spec에 tls 아래에 암호화 설정과 인증서에 대한 명세가 추가되었다는 점이다.

또한 `nginx.ingress.kubernetes.io/force-ssl-redirect`로 인해 기본적으로 https로 진입하게 설정하는 옵션도 볼 수 있다.

공식 인증서를 만들려면 돈을 써야하므로 간편하게 자체 서명 인증서를 통해 인증서를 만들어주자.

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt`

<img width="836" alt="스크린샷 2021-01-18 오후 9 18 10" src="https://user-images.githubusercontent.com/43809168/104914575-afa89f80-59d2-11eb-92a9-257ca27ca2ee.png"/>

여기서 필수 항목은 대상 도메인이다.

만들어진 인증서와 키 파일은 시크릿으로 등록해둔다.

`kubectl create secret tls tls-certificate --key nginx-selfsigned.key --cert nginx-selfsigned.crt`

<img width="1426" alt="스크린샷 2021-01-18 오후 9 22 52" src="https://user-images.githubusercontent.com/43809168/104914994-53924b00-59d3-11eb-8c7a-fa675c4cd726.png"/>

접속해보면 브라우저에서 인증되지 않은 인증서라서 접근을 허락해주지 않는다.

<img width="497" alt="스크린샷 2021-01-18 오후 9 24 43" src="https://user-images.githubusercontent.com/43809168/104915164-95bb8c80-59d3-11eb-9ae1-f9877f11c792.png"/>

인증서를 더블클릭해서 해당 인증서의 신뢰 레벨을 항상 신뢰로 바꿔주자

<img width="743" alt="스크린샷 2021-01-18 오후 9 26 36" src="https://user-images.githubusercontent.com/43809168/104915353-d9ae9180-59d3-11eb-8f73-0e8740c0a64a.png"/>

그러면 고급 옵션에 접근 가능한 옵션이 생긴다.

## 모더니제이션 과제

기존 웹 애플리케이션에서는 로드밸런서의 세션 어피니티(Session Affinity)를 사용하는 것이 일반적이었다.

일반적으로는 HTTP 헤더에 쿠키를 포함시켜 전송하여 세션을 유지하는 방식을 사용해왔다.

그러나 이 방법은 한 대의 서버에선 유용할 수 있지만 여러 대의 서버의 경우 문제가 발생할 수 있다.

로드밸런서가 세션 정보를 갖고 있지 않은 서버에 해당 요청을 전달하면 유저는 다시 로그인을 해야할 수도 있다.

이 문제를 해결하기 위해 로드밸런서의 세션 어피니티가 존재하며 이 기능은 같은 브라우저에서의 요청을 언제나 같은 서버의 프로세스에 전달한다.

이 기능은 브라우저에서의 요청을 언제나 동일한 서버에 전달해준다.

이러한 세션 정보를 유지하기 위해 외부 캐시를 사용할 수도 있지만 인그레스의 세션 어피니티를 사용하면 항상 같은 파드에 요청을 전달할 수도 있다.

캐시 서버의 운영이 부담스럽다면 세션 어피니티 기능을 도입해볼 수 있다.

그런데 세션 어피니티의 경우 애플리케이션 가동 중에 롤아웃이 불가능하다는 단점이 있다.

그래서 개인적으로는 세션 인증 정보의 경우 DB나 외부 캐시 같은 저장소에 저장하는게 맞지 않나 싶다.

## 세션 어피니티 기능 사용

인그레스의 세션 어피니티를 사용하는 방법은 간단하다.

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: hello-ingress
  annotations:
    kubernetes.io/ingress.class: 'nginx'
    nginx.ingress.kubernetes.io/affinity: 'cookie' ## 세션 어피니티 활성화
spec:
  rules:
    - host: abc.sample.com
      http:
        paths:
          - path: /
            backend:
              serviceName: session-svc
              servicePort: 9080
```

쿠키로 클라이언트를 판별하여 동일한 파드가 요청을 처리하게 할 수 있다.

## 퍼블릭 클라우드에서 인그레스 사용

각 퍼블릭 클라우드 제공 서비스 (구글, MS, 아마존, IBM)들은 각각의 인그레스 컨트롤러를 독자적으로 구현하였다.

이는 각각의 퍼블릭 클라우드 제공 업체마다 다르며, 구성 시에 이를 확인하여 구현할 필요가 있다.

### 핵심 요약

#### 1) 인그레스를 사용하기 위해서는 k8s 클러스터상에 인그레스 컨트롤러가 동작하고 있어야 한다

#### 2) 인그레스는 URL 경로와 애플리케이션을 매핑해주는 리버스 프록시다

#### 3) 하나의 IP 주소에 여러 개의 도메인 이름을 등록하여 도메인 이름에 대응하는 애플리케이션을 정의할 수 있다

#### 4) 서버 인증서를 등록하여 SSL/TLS 암호화, HTTPS를 통한 접속이 가능하다

#### 5) 인그레스의 세션 어피니티 기능은 로드밸런서에 의존하는 레거시 웹 애플리케이션을 쿠버네티스에서 돌릴 떄 사용해볼 수 있다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
