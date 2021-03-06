---
id: 03-kubernetes-architecture
title: 03. 쿠버네티스의 기본
---

> 쿠버네티스의 기본적인 아키텍처 이해

### 아키텍처

<img width="1464" alt="k8s node" src="https://user-images.githubusercontent.com/43809168/101613655-5d797380-3a4f-11eb-99fd-52004e8dc0ab.png"/>

## k8s 클러스터를 구성하는 코어 프로세스

### kubectl

k8s 클러스터를 조회하기 위한 도구.

### kube-apiserver

kubectl 등의 API 클라이언트로부터 오는 REST 요청을 검증하고, API 오브젝트를 구성하고 상태를 보고한다.

### kube-scheduler

k8s의 기본 스케쥴러이다.

**새로 생성된 모든 파드에 대해 실행할 최적의 노드를 선택한다.**

스케줄러는 파드가 실행 가능한 노드를 찾은 다음 점수를 계산하여 가장 점수가 높은 노드를 선택한다.

### kube-controller-manager

컨트롤러를 구동하는 마스터상의 컴포넌트

### cloud-controller-manager

API를 통해 클라우드 서비스와 연계하는 컨트롤러로, **클라우드 업체에서 개발한다.**

### etcd

**k8s 클러스터의 모든 관리 데이터는 etcd에 저장된다.**

이 etcd는 CoreOS가 개발한 분산 키/값 저장소로 신뢰성이 요구되는 핵심 데이터의 저장 및 접근을 위해 설계되었다.

### kubelet

kubelet은 각 노드에서 다음과 같은 역할을 수행한다.

- 파드와 컨테이너의 실행

- 파드와 노드의 상태를 API 서버에 보고

- 컨테이너의 동작을 확인하는 프로브 실행

- 내장된 cAdvisor를 통해 메트릭 수집 및 공개

### kube-proxy

kube-proxy는 각 노드에서 동작하며 로드밸런싱 기능을 제공한다.

- 서비스와 파드의 변경을 감지하여 최신 상태로 유지

- iptables 규칙을 관리

- 서비스명과 ClusterIP를 내부 DNS에 등록

### coredns

파드가 서비스 이름으로부터 IP 주소를 얻기 위해 사용한다.

버전 1.11부터 kube-dns 대신 coredns가 사용되었다.

이전 kube-dns의 부족한 신뢰성,보안성,유연성이 coredns로 개선되었다.

## 애드온 컴포넌트

### kube-flannel

kube-flannel은 모든 노드에서 실행되어 여러 노드 사이에서 IPv4 네트워크를 제공한다.

이에 따라 컨테이너는 k8s 클러스터 내부에서 사용되는 IP 주소를 바탕으로 다른 노드에 있는 파드와 통신이 가능하다.

네트워크 접근 제어가 필요하다면 calico를 사용해야한다.

### calico-kube-controllers

calico를 위한 컨트롤러.

데이터 스토어로서 etcd를 이용하기 위해 사용된다.

### calico-node

모든 노드에서 실행되어 노드 간 파드 통신, 라우팅, 네트워크 접근 관리 기능을 제공한다.

### kubernetes-dashboard

Web 대시보드

### heapster

kubelet에 내장된 cAdvisor로부터 매트릭 정보를 수집. 그러나 1.11부터 지원 중단

(이름처럼 힙하게 사라졌다)

### metrics-server

heapster를 대신하여 1.8부터 도입되었다.

API의 aggregation layer를 통해 k8s 클러스터 전체로부터 메트릭을 수집한다.

## 쿠버네티스 계층 구조

<img width="747" alt="스크린샷 2020-12-09 오후 6 50 46" src="https://user-images.githubusercontent.com/43809168/101613725-73873400-3a4f-11eb-8321-556ac20fef49.png"/>

[계층 구조 이미지 출처](https://geekflare.com/kubernetes-architecture/)

### 마스터 노드의 역할

- 쿠버네티스의 API서버로서 클라이언트로부터의 명령을 받아들여 실행

- 컨테이너를 파드 단위로 스케줄링 및 삭제

  - 여기서 말하는 스케줄링은 파드를 실행할 노드를 정하는 것을 의미

- 파드의 컨트롤러 기능과 외부 리소스 관리

## 쿠버네티스의 API 오브젝트

쿠버네티스 API 리소스의 개요를 살펴보자.

쿠버네티스에서 사용되는 API 리소스 타입의 이름은 IT 업계에서 관용적으로 사용해던 용어와 다소 다른 의미로 사용되니 주의하자.

### 쿠버네티스 API란?

쿠버네티스의 모든 조작은 API를 통해 이루어진다.

CLI 인터페이스인 kubectl은 마스터 노드 상의 kube-apiserver에게 쿠버네티스 API 규약에 맞게 기술된 목표 상태 선언서인 YAML 형식 또는 JSON 형식으로 전송하여 오브젝트를 만들고, 바꾸고, 제거한다.

### 오브젝트란?

k8s 오브젝트란 k8s 클러스터 내부의 엔터티로서 이후 설명할

**파드**, **컨트롤러**, **서비스** 등의 인스턴스를 의미한다.

각 오브젝트는 메타데이터에 기술된 이름에 의해 식별되며 오브젝트를 만들 때는 반드시 **이름**을 부여해야한다.

같은 종류의 오브젝트 이름은 하나의 네임스페이스에서 반드시 유일해야한다.

### 워크로드(Workload)

워크로드란 오브젝트의 카테고리를 나타내는 용어로 컨테이너와 파드, 그리고 컨트롤러의 그룹을 의미한다.

### 컨테이너(Container)

쿠버네티스는 컨테이너만을 독자적으로 실행하는 것이 불가능하며, 반드시 파드 내에서 실행해야한다.

컨테이너 기동 시 설정할 수 있는 항목은 이미지의 이름, 실행 명령어, 실행 인자, 환경 변수, 볼륨, CPU 사용 시간과 메모리 크기의 요청값 및 상한값 등이 있다.

### 파드(Pod)

파드는 컨테이너를 실행하기 위한 오브젝트이다.

하나의 파드에는 하나 또는 여러개의 컨테이너가 구동할 수 있다.

이 구조는 마치 완두콩이 콩을 담고 있는 모양과 비슷하다.

그래서 꼬투리를 의미하는 영어 단어 Pod이 이름이 되었다.

### 컨트롤러(Controller)

컨트롤러는 파드의 실행을 제어하는 오브젝트로, 여러 종류의 컨트롤러가 있어 각 컨트롤러의 기능을 이해하고 목적에 맞게 적절히 구별해 사용해야한다.

예를 들어, 클라이언트-서버 모델에 적합한 디플로이먼트 컨트롤러는 서버가 돌아가는 파드의 개수가 지정한 숫자보다 적으면 자동으로 지정한 개수가 되도록 파드를 기동시킨다.

배치를 위한 잡 컨트롤러는 배치 처리가 정상 종료될 때 까지 재실행을 반복한다.

### 설정(Configuration)

컨테이너 내 애플리케이션의 설정값이나 비밀번호 등의 정보를 저장할 수 있는 ConfigMap과 Secret이라는 오브젝트가 있다.

이들을 통해 네임스페이스에 저장된 정보는 컨테이너 내의 파일이나 환경 변수를 통해 애플리케이션에서 참조할 수 있다.

### 서비스(Service)

k8s의 서비스는 파드와 클라이언트를 연결하는 역할을 수행한다.

서버 역할의 파드가 클라이언트의 요청을 받을 수 있도록 대표 IP 주소를 취득하여 내부 DNS에 등록한다.

그리고 대표 IP의 주소로서 요청 트래픽을 지정된 파드들에 부하분산하여 전송하는 역할을 수행한다.

### 스토리지(Storage)

파드나 컨테이너는 실행 시에만 존재하는 일시적인 존재이므로 중요한 데이터를 저장하기 위한 공간이 필요하다.

이를 위한 퍼시스턴트 볼륨을 사용하여 전원이 꺼져도 데이터가 유지되는 스토리지 시스템이다.

다만 복수의 노드에서 접속 가능한 퍼시스턴트 볼륨은 쿠버네티스의 범위에 포함되지 않으므로 외부 스토리지 시스템을 연동해야한다.

## 파드의 기본

하나의 파드에 속하는 모든 컨테이너는 같은 노드에서 동작한다.

### 컨테이너 재사용 촉진을 위한 플랫폼

파드는 하나의 목적을 위해 만들어진 컨테이너를 부품처럼 조합할 수 있도록 설계되었다.

1. 파드 내부의 컨테이너는 파드의 IP 주소와 포트번호를 공유한다.
2. 파드 내부 컨테이너들은 localhost로 서로 통신할 수 있다.
3. 파드 내부 컨테이너들은 System V 프로세스 통신이나 POSIX 공유 메모리를 사용하여 서로 통신할 수 있다.
4. 파드의 내부 컨테이너들은 파드의 볼륨을 마운트하여 파일 시스템을 공유할 수 있다.

### 파드는 일시적 존재

파드는 일시적인 존재이며 나타났다, 사라지기를 반복한다.

IP도 고정적이지 않다.

그래서 파드에 요청을 보내고 싶다면 반드시 **서비스**가 필요로하게 된다.

### 파드는 컨테이너의 실행 상태를 관리

파드는 활성 프로브와 준비 상태 프로브를 설정하여 내부 애플리케이션의 사앹를 감시할 수 있다.

활성 프로브를 설정하면 애플리케이션이 멈춰있는 상태를 감지하여 컨테이너를 강제 종료 시킬 수 있고,

준비 상태 프로브를 설정하면 파드가 요청을 받을 준비가 될 때까지 서비스 오브젝트가 요청을 전송하지 않는다.

## 파드의 라이프 사이클

k8s의 트러블 슈팅 중 가장 많이 발생하는 것이 바로 파드의 기동 실패 원인 분석이다.

이 문제를 파악하기 위해서는 `kubectl get pods`를 실행했을 때 나타나는 **STATUS** 열의 정보가 중요하다.

이 필드의 정보는 k8s API를 통해 획득하는데, 이 API를 통해 얻을 수 있는 여러 정보 중 도움이 될 만한 정보가 선별되어 STATUS 열에 표현되기 때문이다.

기본적으로 익히 잘 알고 있는 `Pending(파드 생성 요구를 받았지만 생성이 덜 된 상태)`, `Running(정상 구동 중)`, `Succeded(정상 종료 완료)`, `Failed(파드 내에 적어도 하나 이상의 컨테이너 종료)`, `Unknown(파드 상태 불명)` 외에 저자가 실험해서 얻은 결과를 살펴보자.

### ContainerCreating

이미지를 다운로드 중이거나 컨테이너를 생성하는 중

컨피그맵과 시크릿이 마운트되지 않아 컨테이너 생성이 보류되는 경우일 수 있음

### CrashLoopBackOff

굉장히 빈번하게 발생하는 상태 중 하나이다.

파드 내의 컨테이너가 종료되어 다음 기동 시 까지 대기 상태에 있음을 의미한다.

2회 이상 컨테이너가 종료되면 CrashLoopBackOff 시간 동안 대기하게 된다.

이 경우 컨테이너 내의 프로세스를 검토할 필요가 있다.

### Terminating

컨테이너에 종료 요청 시그널을 보낸 후 컨테이너가 종료할 때까지 대기 중임을 의미.

유예 시간을 넘겨도 컨테이너가 종료할 수 없는 경우 컨테이너를 강제 종료한다.

### Completed

파드 내 컨테이너 정상 종료.

### Error

컨테이너가 이상 종료된 경우.

Exit 코드가 0이 아닌 경우 발생한다.

### 파드의 종료 처리

k8s는 종료 요청 시그널을 받은 컨테이너의 애플리케이션이 일정 시간 내에 종료 처리를 완료하고 정상 종료되도록 요구하고 있다.

이 종료처리의 흐름은 아래와 같다.

1. 사용자가 kubectl delete pod을 실행하면 파드가 종료되기 시작한다. 기본 유예 시간은 30초다

2. kubectl get pod의 status는 Terminating이 표시된다.

3. 다음 세 가지 작업이 동시에 진행된다.

   - 파드의 PreStop hook이 정의되어있다면 파드 내에서 호출된다. 유예 시간을 넘으면 PreStop hook이 실행되더라도 파드 내의 메인 프로세스에 SIGTERM이 보내지며, 2초 후에 SIGKILL로 강제 종료된다.
   - PreStop hook이 정의되어있지않다면 곧바로 파드 내의 메인 프로세스에 SIGTERM 신호가 송된되며 종료 처리가 개시된다.
   - 파드가 서비스의 엔드포인트 목록에서 제거되며 로드 밸런서의 목록에서도 제거된다.

4. 유예 시간을 넘어서서 파드 내의 프로세스가 살아 있다면 파드의 메인 프로세스에 SIGKILL을 보내서 강제로 종료한다.

5. 제거 대상인 파드가 표시되지 않게 한다.

## 클러스터 네트워크

k8s 클러스터 내부에서 사용되는 클러스터 네트워크에 대해 알아보자.

파드는 이 네트워크 상의 IP 주소를 부여받아 다른 노드에 있는 파드와 서로 통신한다.

파드 네트워크는 각 개발사의 특징을 살릴 수 있게 구현되어있는데 우리는 여기서 2개의 대표적인 오픈 소스 네트워크 에드온을 살펴보자.

### Flannel

간단한 L3 네트워크를 노드 간에 구축한다.

Flannel 파드는 데몬셋 컨트롤러에 의해 배포된다. 때문에 클러스터에 새로운 노드가 추가되면 자동적으로 파드 네트워크가 확장된다.

Flannel은 단순 네트워크 기능만 지원하며 ACL 기능은 지원하지 않는다.

### Calico

노드 간 파드 통신에 더해 ACL 기능을 제공한다.

## 서비스의 기본

서비스의 필요성은 파드가 기동할 때 마다 IP 주소가 계속해서 바뀌기 떄문이다.

파드에 접속해야하는 클라이언트는 서비스가 가지는 대표 IP를 사용해 접속해야한다.

서비스의 역할에 대해서 조금 더 자세히 알아보자.

1. 서비스는 로드밸런서의 역할을 가지며 대표 IP 주소를 획득한다.

2. 서비스의 이름은 내부 DNS에 등록되기 때문에 클라이언트는 서비스의 이름만으로 서비스의 IP 주소를 획득할 수 있다.

3. 서비스는 셀렉터에 저장된 라벨과 일치하는 파드 중 하나에게 요청을 전송한다.

4. 서비스가 만들어지고 나서 기동된 파드의 컨테이너에는 서비스에 대한 정보가 담긴 환경 변수가 자동으로 설정된다.

5. 서비스에는 네 종류의 서비스 타입이 있어 클라이언트의 범위를 k8s 클러스터 내부로 한정할지, 외부까지 확장할지, 또한 k8s 클러스터 외부의 IP 주소에 전송할지를 설정한다.

3번에 대한 조금 더 자세한 내용은 다음과 같다.

파드는 기동될 때 라벨이나 IP 주소를 포함한 자신의 오브젝트 정보를 마스터 노드의 etcd에 등록한다.

그래서 서비스의 전송처를 결정할 때 셀렉테(selector)의 라벨에 일치하는 파드를 etcd에서 조회하여 전송할 파드의 IP 주소를 취득한다.

이처럼 라벨에 의해 대상 오브젝트를 결정하는 것이 k8s의 기본 동작이다.

서비스의 기능을 이해할 때 중요한 7개의 키워드는 다음과 같다.

### 대표 IP 주소

서비스는 파드의 그룹을 대표해 클라이언트의 요청을 받을 대표 IP 주소를 가진다.

헤드리스로 지정한 경우에는 대표 IP 주소를 획득하지 않고, 파드의 IP 주소를 직접 내부 DNS에 설정한다.

### 부하분산

서비스의 대표 IP 주소에 도착한 요청은 셀렉터의 라벨과 일치하는 파드에 전송된다.

### 이름 해결

서비스는 IP 주소와 서비스명을 k8s 클러스터 내부의 DNS에 등록한다.

그래서 클러스터 내의 파드에서는 서비스 이름으로 파드에 접근하는 것이 가능하다.

### 환경 변수

서비스가 만들어지나고 나서 생성되는 파드의 컨테이너에는 환경 변수가 설정되어있다.

### 서비스 타입

서비스를 설정할 때는 해당 서비스를 이용하는 클라이언트를 고려하여 서비스 타입을 지정할 수 있다.

### 어피니티

기본적으로 부하분산에 사용되는 알고리즘은 **랜덤**이다.

클라이언트에 따라 전송되는 파드를 고정시키고 싶다면 **sessionAffinity** 항목에 **ClientIP**를 설정한다.

HTTP 헤더안의 쿠키 값에 따라 전송되는 파드를 고정시키고 싶다면 인그레스를 이용해야한다.

### 셀렉터와 라벨

서비스에 도달한 요청 트래픽이 파드에 전송될 때 셀렉터와 라벨을 참조한다.

## 컨트롤러의 기본

컨트롤러는 파드를 제어한다.

파드에게 부여할 워크로드의 타입, 처리에 따라 적절한 컨트롤러를 설정해야한다.

이 세션에서는 워크로드와 컨트롤러의 특징을 살펴보자.

## 워크로드 타입

### 프론트엔드 처리

스마트폰, IoT, 컴퓨터 등 클라이언트로부터 요청을 받아들이는 워크로드를 총칭한다.

이 타입의 워크로드는 대량의 클라이언트 요청에 대해 짧은 시간에 응답을 반환해주는 것이 중요하다.

### 백엔드 처리

백엔드는 요쳥량이 변하더라도 일정한 응답속도를 유지해주어야한다.

또한 요구사항에 맞게 단 기간에 기능을 추가하고 변경하는 것이 가능해야한다.

### 배치 처리

배치 처리는 어떤 트리거에 의해 실행되며 대용량 데이터 전송에 주로 사용된다.

### 시스템 운영 처리

시스템 운영을 돕기 위해 k8s API를 사용하기도 한다.

**구글**이 강조하는 SRE는 소프트웨어 기술자가 시스템 운영의 자동화에 집중하여 효율적인 시스템 운영을 실현한다.

## 컨트롤러 타입

컨트롤러는 앞서 살펴본 워크로드를 처리하기 위해 파드를 제어하고 실행하는 역할을 담당한다.

대표적인 컨트롤러 7개의 역할과 특징은 다음과 같다.

### 디플로이먼트(Deployment)

대등한 관계에 있는 여러 개의 파드로 수평한 클러스터를 구성할 때 사용한다.

가동중인 파드를 차례대로 교체하거나 규모를 조절할 수 있는 기능을 갖추고 있다.

### 스테이트풀셋(StatefulSet)

파드와 퍼시스턴트 볼륨을 조합하여 데이터의 보관에 초점을 둔 컨트롤러이다.

### 잡(Job)

배치 처리를 하는 컨테이너가 정상 종료할 때까지 재실행을 반복하는 컨트롤러이다.

### 크론잡(CronJob)

정해진 시간에 정기적으로 앞서 설명한 잡을 생성한다.

### 데몬셋(DaemonSet)

k8s 클러스터의 모든 노드에서 같은 파드를 실행하기 위해 존재한다.

### 레플리카셋(ReplicaSet)

디플로이먼트 컨트롤러와 연동해 파드가 기동해야하는 수를 관리한다.

레플리카셋은 직접 다루기보다는 디플로이먼트를 통해 이용하는 것이 기본이다.

### 레플리케이션 컨트롤러(Replication Controller)

(구) 디플로이먼트 지금은 안쓴다.

## 노드의 스케일업과 관련하여

CPU 코어수를 늘리거나 메모리 증설 등 노드의 스케일업과 관련된 기능은 컨트롤러에서 담당하지않는다.

이러한 노드 스케일 업은 클라우드의 경우 보다 많은 CPU 코어 수나 메모리 용량을 탑재한 노드를 준비해서 k8s에 추가 후, 파드의 노드 셀렉터를 설정해 마이그레이션해야한다.

### 핵심요약

#### 1) k8s 클러스터는 마스터와 노드로 구성된다

#### 2) CNCF가 배포하는 k8s가 기본이며 클라우드 업체나 솔루션 업체들이 자사 제품을 위해 독자적으로 기능을 추가하거나 확장하기도 한다

#### 3) 마스터는 목표 상태가 기술된 매니페스트를 받아들여서 그 상태가 유지되도록 오브젝트를 제어한다

#### 4) k8s 클러스터의 모든 조작은 쿠버네티스 API에 의해 실행되며 오브젝트 작성, 수정, 삭제, 상태 조회 등을 실행한다

#### 5) 주요 오브젝트로는 파드, 서비스, 컨트롤러 세 가지가 있다

#### 6) 파드는 컨테이너의 기동 단위이며 서비스와 컨트롤러와 함께 사용된다

#### 7) 컨테이너 내 프로그램의 시그널 처리는 데이터 손실을 막고 안전하게 종료하도록 구현되어야한다

#### 8) 서비스는 클라이언트로부터의 요청을 지정한 파드에 부하분산하며 전송하는 역할을 담당한다

#### 9) 워크로드의 특성에 맞게 컨트롤러를 선택해서 쿠버네티스를 사용해야한다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
