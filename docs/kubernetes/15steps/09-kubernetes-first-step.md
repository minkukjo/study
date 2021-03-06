---
id: 09-kubernetes-first-step
title: 09. 쿠버네티스 첫 걸음
---

> 로컬 환경의 쿠버네티스 클러스터를 생성하고 실습

## 쿠버네티스 첫걸음

hello-world 컨테이너를 쿠버네티스에서 돌려보자.

본 장에서는 **minikube**라고 하는 로컬 쿠버네티스를 사용할 예정이다.

mac os를 사용하고 있다면 아래 명령어로 아주 간단하게 설치가 가능하다.

```bash
brew install minikube
```

다음 명령어로 실행해주자.

```bash
minikube start
```

다음 명령어를 입력하여 미니쿠베의 클러스터 상태를 확인해보자.

```bash
kubectl cluster-info
```

다음 명령어를 입력하여 미니쿠베의 클러스터의 노드 구성을 확인해보자.

```bash
kubectl get node
```

## 파드 실행

미니쿠베에 hello-world 컨테이너를 실행해보자

```bash
kubectl run hello-world --image=hello-world -it --restart=Never
```

위에서 사용된 옵션을 하나씩 알아보자.

| 값                  | 해설                                                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kubectl             | k8s 클러스터를 조작하기 위한 커맨드                                                                                                                                     |
| run                 | 컨테이너 실행을 명령하는 서브 커맨드                                                                                                                                    |
| --image=hello-world | 컨테이너의 이미지, 쿠버네티스에서는 파드 단위로 컨테이너가 기동되며 리포지터리명이 생략된 경우 **도커 허브를 default**로 사용한다.                                      |
| -it                 | 도커에서의 -it와 마찬가지로 -i는 키보드를 표준 입력에 연결하고, -t는 유사 터미널과 연결하여 대화 설정. --restart=Never인 경우에만 유효하며, 그 외에는 백그라운드로 실행 |
| --restart=Never     | 이 옵션에 따라 파드의 기동 방법을 변경할 수 있다. Never는 직접 파드가 기동되며 Always나 OnFailure는 컨트롤러를 통해 파드가 기동된다.                                    |

```bash
kubectl delete pod hello-world
```

도커 컨테이너를 지우듯이 위 명령어로 파드를 지울 수 있다.

```bash
 kubectl run hello-world --image=hello-world -it --restart=Never --rm
```

`--rm` 옵션은 실행 후 종료된 팟을 자동으로 제거해주는 옵션이다.

`kubectl run` 명령어를 입력하고 결과가 표시될 때까지의 흐름은 다음과 같다.

1. kubectl이 쿠버네티스에게 명령을 전달한다.

2. 노드에 이미지가 없으면 원격 레포지터리(Docker Hub)에서 다운로드한다.

3. 노드의 containerd가 컨테이너를 실행한다.

4. kubectl이 터미널에 메시지를 표시한다.

위의 과정으로 실행한 `hello-world` 팟의 경우 실행 후 팟이 어떤 실행 결과를 보였는지 알 수 없다.

그래서 우리는 로그를 출력시켜서 결과를 확인해볼 것이다.

다음의 명령어로 팟의 로그를 확인하자.

```bash
kubectl run hello-world --image=hello-world -it --restart=Never
kubectl logs hello-world
```

## 컨트롤러에 의한 파드 실행

`kubectl run`에 옵션을 지정하면 디플로이먼트 컨트롤러의 제어하에 실행하는 것이 가능하다.

이때 사용하는 옵션이 바로 `--restart=Always`다.

`kubectl run`에서 `--restart=Always`는 default 옵션이므로 위 명령어에서 `--restart=Never`를 제거하자.

```
kubectl run hello-world --image=hello-world

// 출력
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-world created
```

`kubectl run` 서브커맨드의 기능이 지나치게 방대해지는 것을 막기 위해 파드 자체를 만들 때만 run을 사용하는 것을 추천하고 있다.

디플로이먼트를 만들 때는 `kubectl create deployment --image hello-world hello-world`를 사용할 것을 추천하고 있다.

<img width="557" alt="스크린샷 2020-12-13 오후 10 02 34" src="https://user-images.githubusercontent.com/43809168/102012640-e87ba600-3d8e-11eb-8eea-849969d0503e.png"/>

`kubectl get all` 명령어를 사용해 디플로이먼트가 만든 모든 오브젝트를 확인할 수 있다.

하나씩 살펴보도록 하자.

### deployment.apps/hello-world

만드렁진 디플로이먼트 오브젝트의 이름은 hello-world이다.

이 컨트롤러는 레플리카셋 컨트롤러와 함께 파들르 관리하여 이미지의 버전, 파드의 개수 등이 목표 상태가 되도록 관리해준다.

### replicaset.apps/hello-world-66bff7794f

디플로이먼트와 함께 만들어진 레플리카셋 오브젝트의 이름은 `hello-world-66bff7794f`이다.

레플리카셋은 디플로이먼트와 함께 파드의 수가 지정한 개수가 되도록 제어한다.

유저가 직접 레플리카셋을 조작하는 것은 권장되지 않는다. (디플로이먼트를 통해 조작할 것)

### pod/hello-world-66bff7794f-9vzpc

디플로이먼트가 생성한 `pod`이다. 고유한 이름을 갖고 있으며 잘 보면 레플리카셋 이름 뒤에 해시 문자열이 추가되어 유일한 이름을 형성하고 있는 것을 확인할 수 있다.

이제 hello-world 컨테이너가 디플로이먼트에 의해 어떻게 제어되는지 살펴보자.

<img width="583" alt="스크린샷 2020-12-13 오후 10 09 18" src="https://user-images.githubusercontent.com/43809168/102012827-d9e1be80-3d8f-11eb-88ff-477f362a6c98.png"/>

위는 디플로이먼트를 실행하고 약 8분이 경과했을 시점의 상태이다.

위 상태로 우리는 여러 정보들을 얻을 수 있는데 그 정보들에 대해 알아보자.

우선 `replica=숫자`를 생략했으므로 기본 값인 1으로 설정이되어있는 것을 확인할 수 있다.

그리고 `AVAILABLE` 컬럼의 값은 0으로 나오는데 이는 **파드가 기동에 실패**했음을 의미한다.

아래는 `kubectl get deployment` 각 항목의 의미이다.

| 항목명     | 설명                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| NAME       | 디플로이먼트 오브젝트 명                                                                                                   |
| READY      | 파드의 기동 완료수. 분자와 분모의 형태로 숫자가 표시된다. 분모의 경우 최종 실행 목표 개수, 분자의 경우 현재 실행 개수이다. |
| UP-TO-DATE | 최근 업데이트된 파드의 개수. 즉 컨트롤러에 의해 조정된 파드 수                                                             |
| AVAILABLE  | 사용 가능한 파드 수. 정상적으로 기동되어 서비스 가능한 파드 수                                                             |
| AGE        | 오브젝트가 만들어진 후 경과 시간                                                                                           |

파드에 대한 항목은 아래와 같다.

위 실행 결과에서 파드의 `STATUS`가 `CrashLoopBackOff`라는 상태를 표시하는데 이는 hello-world 파드가 어떤 문제로 인해 재시작을 계속해서 반복하고 있는 상태임을 의미한다.

`CrashLoopBackOff` 상태가 되면 컨테이너를 재기동할 때 CPU 부하가 많이 발생하므로, CPU 과부하를 막기 위해 일정 간격을 두고 재시작을 실행한다.

| 항목명   | 설명                                               |
| -------- | -------------------------------------------------- |
| NAME     | 디플로이먼트 오브젝트 명                           |
| READY    | 기동 완료수. 분자와 분모의 형태로 숫자가 표시된다. |
| STATUS   | 파드의 상태.                                       |
| RESTARTS | 파드가 재시작한 횟수                               |
| AGE      | 오브젝트 생성 후 경과 시간                         |

파드가 예외에 의해 재시작을 반복한다는 것은 어떤 의미를 가질까?

디플로이먼트에 의해 관리되는 파드는 보통 웹 서버처럼 **상시** 구동되는 경우가 많다.

그러나 위의 `hello-world` 파드는 실행 후 종료되므로 디플로이먼트가 파드를 계속해서 재시작 하고 있으므로 `CrashLoopBackOff` 상태가 된 것이다.

따라서 처음부터 `hello-world` 디플로이먼트는 컨트롤러에 맞지 않는 워크로드를 가진다고 볼 수 있다.

그러니 디플로이먼트에 적합한 워크로드를 가지는 파드를 새롭게 생성하자.

디플로이먼트 삭제는 아래의 명령어로 가능하다.

```bash
kubectl delete deployment hello-world
```

이번엔 웹 서버의 파드 5개를 기동해보자.

```
kubectl run webserver --image=nginx --replicas=5
```

<img width="605" alt="스크린샷 2020-12-13 오후 10 23 04" src="https://user-images.githubusercontent.com/43809168/102013162-c8011b00-3d91-11eb-8cf0-54edb506e83c.png"/>

이 웹서버는 총 5대의 파드로 구동되고 있으며 하나를 지우더라도 파드가 자동으로 재실행된다.

## 잡에 의한 파드 실행

`kubectl run`의 옵션으로 `--restart=OnFailure`를 지정하여 잡 컨트롤러의 제어하에 파드를 기동해보자.

```
kubectl run hello-world --image=hello-world --restart=OnFailure
```

<img width="536" alt="스크린샷 2020-12-13 오후 10 25 53" src="https://user-images.githubusercontent.com/43809168/102013232-2a5a1b80-3d92-11eb-9798-a7699ecaee4f.png"/>

이번에는 디플로이먼트가 아닌 `job` 오브젝트가 생성된 것을 확인할 수 있다.

잡 컨트롤러의 역할은 컨테이너의 프로세스 종료 코드 값으로 성공과 실패를 판별한다.

잡 컨트롤러는 추후 스텝 10에서 다시 자세하게 다루므로 이후에 더 자세히 배우도록 하자.

### 핵심 요약

#### 1) 파드를 관리하는 여러 컨트롤러가 있으며 워크로드에 맞게 선택해야 한다

#### 2) 디플로이먼트는 웹 서버나 API 서버처럼 지속적으로 서비스를 제공해야 하는 워크로드에 적합한 컨트롤러이다

#### 3) 잡 컨트롤러는 배치 처리와 같은 워크로드에 적합한 컨트롤러다

## 다양한 POD 구성

### 단독 파드 구동

<img width="1317" alt="스크린샷 2020-12-13 오후 10 38 16" src="https://user-images.githubusercontent.com/43809168/102013515-039ce480-3d94-11eb-97e3-39c447351861.png"/>

- 비정상적으로 종료해도 재기동하지 않음

- 컨테이너 종료 후 삭제 필요

- 수평 스케일이 안 됨

### 서버 타입의 파드 제어

<img width="1350" alt="스크린샷 2020-12-13 오후 10 38 24" src="https://user-images.githubusercontent.com/43809168/102013517-0697d500-3d94-11eb-998b-0405ab54c13d.png"/>

- 요구를 계속 대기하면서 종료하지 않는 타입

- 수평 스케일

- 비정상 종료 시 기동함

### 배치 처리 타입 파드 제어

<img width="1070" alt="스크린샷 2020-12-13 오후 10 38 55" src="https://user-images.githubusercontent.com/43809168/102013520-08619880-3d94-11eb-881e-7988939ec027.png"/>

- 처리가 정상 종료 시 완료함

- 처리가 실패하면 재시도

- 병렬 처리 수를 설정해서 시간 단축

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
