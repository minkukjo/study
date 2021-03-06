---
id: node-isolation
title: 특정 노드에만 파드 배포하기
---

## 개요

이번 시간에는 쿠버네티스의 특정 노드에만 파드를 배포하는 방법에 대해서 알아보겠습니다.

이를 위해서는 `Node-Affinity`와 `Taints`와 `Toleration`에 대해서 알아야합니다.

`Taints`는 `Node-Affinity`와 반대되는 옵션입니다.

`Node-Affinity`가 `Pod가 특정 Node`에 배포될 수 있게 하는 옵션이라면,

`Taints`는 `Node가 특정 Pod`를 쫓아내는 옵션입니다.

## Node-Affinity

<img width="1627" alt="스크린샷 2021-02-17 오전 12 16 20" src="https://user-images.githubusercontent.com/43809168/108082421-6cb31800-70b5-11eb-8ee1-2ba1d82617f2.png"/>

<img width="1616" alt="스크린샷 2021-02-17 오전 12 16 28" src="https://user-images.githubusercontent.com/43809168/108082429-6f157200-70b5-11eb-8972-318be36e40f4.png"/>

Node-Affinity에서 주목할 옵션은 아래입니다.

`requiredDuringSchedulingIgnoredDuringExecution` 인데요.

막상 보면 길어보이지만 잘라서 보면 이해하기 쉽습니다.

Node-Affinity의 옵션은 크게 가장 앞 부분인 `required`와 `preferred` 조건으로 나누어집니다.

`required`는 `반드시` 이 파드가 해당 노드에 배포가 되어야한다는 점이고 `preferred`는 가급적이면~ 이라는 옵션입니다.

그리고 꼬리에 해당하는 `IgnoredDuringExecution`의 경우 런타임에 노드의 Label이 바뀌더라도 무시할 것인지, 즉시 eviction할 것인지에 대한 옵션입니다.

반대 옵션으로는 `RequiredDuringExecution`가 있습니다.

이를 종합해보면,

- `requiredDuringSchedulingIgnoredDuringExecution`

- `preferredDuringSchedulingIgnoredDuringExecution`

- `requiredDuringSchedulingRequiredDuringExecution`
- `preferredDuringSchedulingRequiredDuringExecution`

총 네 개의 조합이 가능해집니다.

## Node의 입장에서

`Node-Affinity`는 **특정 파드**가 **특정 노드**로 배포할 것을 설정하는 옵션입니다.

그러나 A Pod가 Node01로의 배포를 반드시 보장해주지만,

Node01에서 B,C 파드가 배포될 것을 보장해주지는 않습니다.

<img width="1765" alt="스크린샷 2021-02-17 오전 12 16 33" src="https://user-images.githubusercontent.com/43809168/108082437-70df3580-70b5-11eb-831a-d2a171cbc531.png"/>

## Node-Affinity VS Node-Selector

우리는 이전에, Node-Selector를 이용해서도 Node-Affinity와 비슷한 기능을 구현할 수 있는 것을 알고 있습니다.

```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: A
spec:
  containers:
    - name: with-node-affinity
      image: k8s.gcr.io/pause:2.0
  nodeSelector:
    nodeName: node01
```

얼핏 봐서는 이 옵션이 `Node-Affinity` 보다 더 명확하고 직관적이라는 생각도 듭니다.

하지만 k8s에서는 이 `Node-Selector`보다 `Node-Affinity`를 권장하고 있으며, 추후에 `Node-Selector`를 Deprecate하고 `Node-Affinity`만을 사용할 것이라고 밝혔습니다.

그 이유는 `Node-Affinity`에서는 조금 더 다양한 표현식으로 선택이 가능하며, 제약조건의 주체가 노드에 있는 것이 아닌 파드에 부여함으로써 서로 같이 배치될 수 있는 파드와 아닌 파드를 정의하는게 가능해지기 때문인데요.

`Node-Selector`에서는 `반드시` 해당 노드에 배포가 된다는 식의 설정이지만, `Node-Affinity`의 경우 `가급적이면 그렇게 해줘`라는 옵션도 설정이 가능하므로 조금 더 유연하게 사용할 수 있다는 장점도 있습니다.

## Taints와 Toleration

그러면 `Node-Affinity`에 반대되는 옵션인 `Taints`는 무엇일까요?

`Taints`의 사전적 의미는 **오염**, **감염**이라는 뜻을 갖고 있는데요.

노드에 `Taints`를 하면, `Toleration`을 가진 `Pod`만 해당 노드에 배포될 수 있게 하는 옵션입니다.

<img width="1769" alt="스크린샷 2021-02-17 오전 12 17 43" src="https://user-images.githubusercontent.com/43809168/108082623-a3892e00-70b5-11eb-8a24-42854cc6c8a2.png"/>

<img width="1762" alt="스크린샷 2021-02-17 오전 12 17 48" src="https://user-images.githubusercontent.com/43809168/108082624-a4ba5b00-70b5-11eb-98a1-ae79f889766f.png"/>

<img width="1780" alt="스크린샷 2021-02-17 오전 12 17 53" src="https://user-images.githubusercontent.com/43809168/108082627-a5eb8800-70b5-11eb-8aad-c8f96804fd4c.png"/>

<img width="1761" alt="스크린샷 2021-02-17 오전 12 17 57" src="https://user-images.githubusercontent.com/43809168/108082631-a6841e80-70b5-11eb-93bd-9c359171d51a.png"/>

<img width="1826" alt="스크린샷 2021-02-17 오전 12 18 04" src="https://user-images.githubusercontent.com/43809168/108082636-a7b54b80-70b5-11eb-9452-94571345164e.png"/>

노드에 `Taints`를 추가하는 명령어는 다음과 같습니다.

`kubectl taints node 노드_이름 key=value:effect`

여기서 key와 value는 임의로 줄 수 있으나 `effect`는 정해진 것을 사용해야합니다.

노드에 추가된 `Taints`를 제거하는 명령은 다음과 같습니다.

`kubectl taints node 노드_이름 key=value:effect-`

Taints `effect`에는 `NoSchedule`, `NoExecute`, `PreferNoSchedule` 세 가지 `effect`가 존재합니다.

`NoSchedule`은 일치하는 `Toleration`이 없으면 해당 노드에 파드를 배치할 수 없음을 의미합니다.

`PreferNoSchedule`은 toleration이 없으면 포드를 스케쥴링 하지 않으려고 하지만, 이는 필수는 아닙니다. 클러스터 내의 자원이 부족하다면 taint가 있는 노드에도 파드가 스케쥴 될 수 있습니다.

`NoExecute`의 경우 새롭게 생성된 파드가 toleration이 없으면 배치되지 않게 하고, 기존에 존재하던 파드도 taint에 맞는 toleration이 없다면 즉시 종료시킵니다.

Node01에 다음과 같이 taints를 주고, A Pod에 Toleration을 부여해보겠습니다.

`kubectl taints node node01 color=white:NoSchedule`

```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: A
spec:
  containers:
    - name: with-node-affinity
      image: k8s.gcr.io/pause:2.0
  tolerations:
    - key: 'color'
      operator: 'Equal'
      value: 'white'
      effect: 'NoSchedule'
```

참고로 `operator`의 경우 `Equal` 외에도 `Exists`도 사용가능합니다만, 이 경우 `value`를 따로 명시하지않아야 합니다.

만약 다음과 같이 `effect`가 `NoExecute`인 경우 특정 시간 이후에 노드 내에 있는 Toleration의 파드들을 제거하고 싶다면 다음과 같은 옵션을 줄 수도 있습니다.

```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: A
spec:
  containers:
    - name: with-node-affinity
      image: k8s.gcr.io/pause:2.0
  tolerations:
    - key: 'color'
      operator: 'Equal'
      value: 'white'
      effect: 'NoExecute'
      tolerationSeconds: 3600
```

이렇게 하면 5분 뒤에 노드 내에 Toleration이 없는 파드들은 모두 제거될 것입니다.

## Pod의 입장에서

<img width="1808" alt="스크린샷 2021-02-17 오전 12 18 10" src="https://user-images.githubusercontent.com/43809168/108082639-a84de200-70b5-11eb-9983-a34f366b120f.png"/>

그러나 특정 노드의 `Taints`의 `Toleration`을 가진 파드가 반드시 해당 노드에 배포되는 것은 아닙니다.

해당 파드는 얼마든지 다른 노드로도 배포될 수 있습니다.

## Node-Affinity + Taints And Toleration

그렇다면 앞서 배운 `Node-Affinity`와 `Taints And Toleration`를 모두 사용해보겠습니다.

`kubectl taints node node01 color=white:NoSchedule`

<img width="1766" alt="스크린샷 2021-02-17 오전 12 20 15" src="https://user-images.githubusercontent.com/43809168/108082951-ee0aaa80-70b5-11eb-96fc-55e2dc1ed3cb.png"/>

두 기능을 조합하면 특정 파드가 반드시 특정 노드에 배포되는 것을,

특정 노드는 반드시 특정 파드만 배포되게 허락하는 것을 설정할 수 있습니다.

## 한 줄 요약

`Node-Affinity + Taints And Toleration`를 사용하면 특정 노드와 특정 파드가 서로 반드시 배치하고 배치되어지는 것을 보장할 수 있다!
