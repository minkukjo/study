---
id: 11-service
title: 11. 서비스
---

> 쿠버네티스의 서비스에 대하여

# 서비스

본 챕터에서는 서비스를 학습할 것이다.

k8s에서 서비스를 사용하는 목적은 항상 변하는 파드의 IP 주소를 대표하기 위해 서비스라는 오브젝트가 존재한다고 한다.

여기서는 서비스의 네 종류에 대해서 공부할 것이다.

## ClusterIP

- 서비스를 만들 때 서비스 타입을 명시하지 않으면 ClusterIP로 만들어진다.

- ClusterIP는 클라이언트의 요청을 대표 IP 주소로 받으며, 내부 DNS에 서비스명과 대표 IP 주소를 등록하고 삭제하는 역할을 담당한다.

- 클라이언트는 서비스 이름에 대한 대표 IP를 내부 DNS에 물어서 반환받고, 전달받은 대표 IP로 서비스에 요청한다.

- 매니페스트에 `clusterIP: None`이라고 지정하면 헤드리스 설정으로 서비스가 동작된다.
  - 이 때 서비스는 대표 IP 주소를 획득하지 않으며, 부하분산도 이루어지지 않는다.
  - 대신 파드들의 IP 주소를 내부 DNS에 등록하여 파드 IP 주소 변경에 대응하여 최신 상태를 유지한다.

## NodePort

- ClusterIP + 노드의 IP 주소에 공개 포트가 열린다.

- 공개 포트의 범위는 30000 ~ 32767

- 클라이언트가 노드의 IP와 포트로 전송한 요청은 최종적으로 파드에 전달된다.

- NodePort 타입의 서비스를 생성하면 클러스터의 모든 노드에 지정한 포트가 열린다.

- 각 노드가 수령한 요청은 대상이 되는 파드들에게 부하 분산되어 전송된다.

  - 이 때 요청을 받은 노드 내에 있는 파드로만 전송하도록 설정할 수도 있다.
  - 노드 앞에 로드밸런서가 있다면 매우 유용한 설정이다.

- 사용자가 특정 노드를 지정해 접속하고 있는데 해당 노드가 하드웨어 점검 등의 이유로 셧다운 되면 서비스를 이용할 수 없다.

  - 이미 사용중인 포트를 설정하면 매니페스트 배포 과정에서 실패한다.
  - 네임 스페이스로 k8s 클러스터를 분할하여 운용할 때는 이런 문제를 조심해야한다.

- NodePort는 쉽고 편리하게 설정이 가능하지만 정식 서비스에서 사용하는 것은 추천하지 않는다고 한다.

## LoadBalancer

- LoadBalancer는 로드밸런서와 연동하여 파드의 애플리케이션을 외부에 공개한다.

- LoadBalancer는 NodePort를 사용하며 ClusterIP도 자동적으로 생성된다.

- NodePort Type Service + ClusterIP Type Service = LoadBalancer Type Service

- 퍼블릭 클라우드에서는 각 업체가 제공하는 로드밸런서가 연동된다.

## ExternalName

- 지금까지 살펴본 것들과 반대로, 파드에서 k8s 클러스터 외부의 엔드포인트에 접속하기 위한 이름을 해결해준다.

- 가령 퍼블릭 클라우드의 DB 라던지, API 등이 그 예이다.

- ExternalName는 서비스의 이름과 외부 DNS 이름의 매핑을 내부 DNS에 설정한다.

- 이를 통해 파드는 서비스의 이름으로 외부 네트워크의 엔드포인트에 접근할 수 있다. 단 포트번호는 지정할 수 없다.

- 단 외부 DNS를 등록하는 항목 `spec.externalName`에는 IP 주소를 설정할 수 없다.

## 서비스와 파드의 연결

서비스가 요청을 전송할 파드를 결정할 때는 셀렉터의 **라벨**과 일치하는 파드를 **etcd**로 부터 선택한다.

서비스의 매니페스트에 기술하는 셀렉터와 파드의 매니페스트에 기술하는 라벨을 구체적으로 비교해보자.

```yaml
# Service 매니페스트
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web # 파드에서 web 라벨을 찾음
  ports:
    - protocol: TCP
      port: 80
```

```yaml
# Deployment 매니페스트
apiVersion: v1
kind: Deployment
metadata:
  name: web-deploy
spec:
  replicas: 3
  selector:
    matchLabels
      app: web
  template:
    metadata:
      label:
        app: web # 서비스가 찾는 라벨에 해당하는 파드
    spec:
      containers:
      - name: nginx
        image: nginx: latest
```

이처럼 라벨에 의해 전송되는 파드를 결정하는 방식은 굉장히 큰 유연성을 가져다준다.

셀렉터의 값을 바꾸는 것만으로 서비스가 전송하는 파드의 그룹을 바꿀 수 있으므로 운영상의 유연성을 가져갈 수 있다.

그러나 라벨이 중복될 수 있으므로 프로젝트 레벨에서 라벨이 중복되지 않도록 운영 규칙을 잘 정하는 것이 중요하다.

## 서비스의 매니페스트 작성법

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
```

- kind : Service 설정
- apiVersion : v1 설정
- metadata: name에 네임스페이스 내 유일한 이름 설정. 여기서 정한 이름은 내부 DNS에 등록되며 IP 주소 해결에 사용된다. 또한 이후 기동된 파드의 환경 변수에 설정
- spec : 서비스의 사양
  - type : 서비스 공개 방법을 설정. 선택이 가능한 타입은 ClusterIP, NodePort, LoadBalancer, ExternalName 네 가지
  - ports : 서비스에 의해 공개되는 포트번호
    - port : 필수 항목, 이 서비스에 의해 공개되는 포트번호
    - name : port가 하나인 경우는 생략 가능. 여러개인 경우 필수 설정 필요. 각 포트의 이름은 서비스 내에서 유일해야한다.
    - protocol : 기본은 TCP, UDP도 가능
    - nodePort : 생략 시에는 시스템이 자동으로 할당하며 type이 NodePort나 LoadBalancer인 경우 모든 노드에서 포트를 공개한다. 설정한 포트가 이미 사용중이라면 오브젝트 생성에 실패.
    - targetPort : 생략 시에는 port와 동일한 값이 사용. 셀렉터에 의해 대응되는 파드가 공개하는 포트번호, 또는 포트 이름을 설정한다.
  - selector : 여기에 설정한 라벨과 일치하는 파드에 요청을 전송한다. 이 항목을 설정하지 않는 경우 외부에서 관리하는 엔드포인트를 가진 것으로 간주한다.
  - sessionAffinity : 설정이 가능한 세션 어피니티는 ClientIP. 생략 시 Node로 설정된다.
  - clusterIP : 대표 IP 주소가 자동으로 할당된다. None으로 설정하면 헤드리스로 동작.

## 세션 어피니티

경우에 따라서는 동일한 클라이언트에서 온 요청은 언제나 같은 파드에 전송하고 싶을 수도 있다.

그런 경우 매니페스트의 세션 어피니티를 ClientIP로 설정하면 된다.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
  sessionAffinity: ClientIP # 클라이언트 IP 주소에 따라 전송될 파드가 결정
```

## NodePort

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
  type: NodePort
```

## 로드밸런서

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
  type: LoadBalancer # 로드밸런서 지정
```

## ExternalName

```yaml
apiVersion: v1
kind: Service
metadata:
  name: api-on-baremetal
spec:
  type: ExternalName
  externalName: 10.132.253.7 # 외부 IP 주소 또는 DNS 이름 설정
```

외부 IP 주소 `10.132.253.7`를 `api-on-baremetal`이라는 서비스 이름으로 등록하고 있다.

**ExternalName**을 사용하면 k8s 클러스터와 기존 시스템을 쉽게 조합할 수 있다.

### 핵심 요약

#### 1) 서비스는 클라이언트의 요청을 전달하기 위한 오브젝트로서 부하분산 기능을 포함한다. 서비스 타입에 따라 공개 방법과 범위가 다르다

#### 2) 서비스 타입 ClusterIP를 사용하면 k8s 클러스터 내부에서 접속할 수 있으며, NodePort를 사용하면 외부에서 노드의 IP 주소와 포트번호로 접속할 수 있다. LoadBalancer를 사용하면 k8s 클러스터 외부에서 대표 IP 주소로 접근이 가능하다

#### 3) 서비스 타입 ExternalName은 k8s 클러스터 외부의 DNS 이름을 서비스 이름으로 등록한다. 서비스명과 IP 주소를 매핑하고 싶은 경우에는 헤드리스 서비스를 검토한다

#### 4) 서비스의 부하분산 알고리즘은 랜덤이다. 세션 어피니티에 의해 클라이언트의 IP 주소별로 전송될 파드를 고정할 수 있다. 서비스에는 HTTP 헤더의 쿠키에 의한 세션 어피니티 기능은 없다. 해당 기능이 필요하다면 인그레스를 사용하자

#### 5) 서비스가 받은 요청을 전달할 파드는 라벨에 의해 결정된다

#### 6) NodePort를 사용해도 외부에 애플리케이션을 공개할 수 있지만 가용성이 부족하여 정식 서비스에는 적합하지 않다. 반면 LoadBalancer는 가용성도 있고, HTTP와 HTTPS를 사용할 수 있어 정식 서비스에 적합하다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
