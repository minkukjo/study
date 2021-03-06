---
id: 18-job
title: 18. Job과 Cron Job
---

> 쿠버네티스의 Job과 Cron Job에 대하여

## 잡과 크론잡

잡 컨트롤러는 파드에 있는 모든 컨테이너가 정상적으로 종료할 때까지 재실행한다는 특징이 있습니다.

크론잡은 UNIX의 크론과 같은 포맷으로 실행 스케줄을 지정할 수 있는 컨트롤러입니다.

## 잡 컨트롤러의 동작

- 잡 컨트롤러에서의 잡은 배치 처리라고 불리며 하나의 묶음 프로그램을 실행하는 기능

1. 지정한 실행 횟수와 병행 개수에 따라 한 개 이상의 파드 실행

2. 전체 컨테이너 중 하나라도 실패하면 모두 비정상 종료로 취급

3. 잡에 기술한 파드의 실행 횟수를 전부 정상 종료하면 잡은 종료한다. 마찬가지로 비정상 종료에 따른 재실행 횟수의 상한에 도달했을 때도 잡을 중단

4. 노드 이상으로 잡의 파드가 제거된 경우 다른 노드에서 파드를 재실행

5. 잡에 의해 실행된 파드는 잡이 삭제될 때까지 유지

## 잡 컨트롤러 사용 시 주의점

1. 여러 프로그램의 실행 순서나 비정상 종료의 분기처리는 컨테이너 내 셸에서 제어

2. 파드 내에 여러 개의 컨테이너가 존재할 때 잡 컨트롤러는 파드 내의 모든 컨테이너가 정상 종료할 때까지 재실행을 반복

3. `kubectl get pod`로 체크했을 때 STATUS가 completed여도 비정상 종료일 가능성 있음

## 스케쥴에 따라 파드를 제어하는 크론잡

<img width="1740" alt="스크린샷 2021-03-26 오후 3 59 37" src="https://user-images.githubusercontent.com/43809168/112594456-4d45a280-8e4c-11eb-8adc-f434a8cf766c.png"/>

크론잡은 지정 시각에 잡을 만들고, 생성된 파드의 개수가 정해진 수를 넘어서면 가비지 수집 컨트롤러가 종료된 파드를 삭제합니다.

이런 크론잡은 어디서 써먹을 수 있을까요?

## 잡 활용의 예시 - 동시 실행과 순차 실행 -

복수의 처리들 간에 순서가 없어 상호 독립적으로 실행할 수 있는 배치 처리를 생각해보겠습니다.

잡 컨트롤러는 복수의 노드 위에서 여러 개의 파드를 동시에 실행하여 배치 처리를 빠르게 완료할 수 있습니다. ( IAM 마이그레이션에서 써볼만 했을 것 같기도...? )

대표적인 예로는 대량 메일 발송, 이미지 동영상과 같은 파일의 변환 처리, 대량 데이터를 포함하는 KVS형 데이터베이스 검색 등이 있습니다.

## 잡 활용의 예시 - 파드를 실행할 노드 선택 -

다양한 사양의 노드로 구성된 클러스터에서 배치 처리를 실행해야할 때, 성능이 좋은 노드에서는 비싼 연산 (GPU 작업)을 수행하고 성능이 낮은 노드에서는 더 적은 연산의 잡을 수행하게 하는 배치를 잡 컨트롤러를 활용해볼 수 있습니다.

## 잡 활용의 예시 - 온라인 배치 처리 요청 -

메시지 큐에 있는 메시지를 읽어서 실행하는 잡(파드)를 생성해볼 수도 있습니다.

온라인에서 요청을 받아 처리하는 작업도 잡 파드를 사용해볼 수 있습니다.

## 잡 활용의 예시 - 정기 실행 배치 처리 -

크론잡은 설정한 시간에 정기적으로 잡을 실행합니다.

따라서 데이터의 백업이나 매시간마다 실행되는 배치 처리 등에 사용할 수 있습니다.

## 잡의 실행수와 동시 실행수

잡 컨트롤러의 기본 설정이라할 수 있는 실행수(Completions)와 동시 실행수(Parallelism)에 대해 알아봅시다.

다음은 간단한 잡을 생성하는 매니페스트입니다.

파드는 5초간 슬립하고 정상 종료합니다.

이는 실행 횟수(Coletions)만큼 반복 실행합니다.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: normal-end
spec:
  template:
    spec:
      containers:
        - name: busybox
          image: busybox:latest
          command: ['sh', '-c', 'sleep 5; exit 0']
      restartPolicy: Never
  completions: 6
  # parallelism: 2
```

위 잡 컨트롤러는 총 6번을 수행하는 잡을 만들어냈습니다.

parallelism 주석을 해제하면, 매 실행마다 파드가 2개씩 실행되는 것을 확인할 수 있습니다.

## 하나의 컨테이너로 구성된 파드가 이상 종료 되는 경우

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: normal-end
spec:
  backoffLimit: 3
  template:
    spec:
      containers:
        - name: busybox
          image: busybox:latest
          command: ['sh', '-c', 'sleep 5; exit 0']
      restartPolicy: Never
  # completions: 1 // Default는 1이다.
  # parallelism: 1 // Default는 1이다.
```

backoffLimit은 반복 상한선을 정의합니다.

즉, 파드가 이상종료할 경우 재 실행을 최대 3번까지 해주며 그 이상 반복해도 정상 종료되지 않는다면 그대로 모든 잡을 중지합니다.

## 여러 컨테이너 중 일부가 이상 종료할 때의 동작

잡 컨트롤러에서 여러 컨테이너 중 일부가 종료하면 어떤 일이 일어날까요?

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: normal-end
spec:
  backoffLimit: 3
  template:
    spec:
      containers:
        - name: busybox
          image: busybox:latest
          command: ['sh', '-c', 'sleep 5; exit 0']
      restartPolicy: Never
        - name: busybox2
          image: busybox:latest
          command: ['sh', '-c', 'sleep 5; exit 0']
      restartPolicy: Never
  # completions: 1 // Default는 1이다.
  # parallelism: 1 // Default는 1이다.
```

`kubectl get pod` 명령어로는 `Completed` 이벤트인 것으로 나오지만, `kubectl describe job` 명령어를 통해 확인해보면 실패하는 컨테이너의 경우 재실행이 반복되다가 backoffLimit에 도달하는 것을 알 수 있습니다.

이로 인해 잡 컨틀로러는 파드의 `STATUS`를 보는게 아닌 컨테이너가 `정상 종료 했는지`의 여부로 재실행을 반복한다는 것을 알 수 있습니다.

## 크론잡

크론잡은 cron 형식으로 기술된 스케쥴에 맞춰 잡을 실행하는 컨트롤러입니다.

이미 잘 알고 계시겠지만 유닉스 계열의 운영체제에서 구현된 타임 기반의 스케줄입니다.

cron이라는 이름의 유래는 시간의 신인 크로노스(Chronos)에서 이름이 유래했다는 문서도 있다고 하네요.

크론잡을 사용하면 `매일 0시에 데이트베이스 백업`, `8시부터 20시까지 매 시각 동기화 실시`와 같은 정해진 시간에 잡 컨트롤러하의 파드를 실행시킬 수 있습니다.

크론잡 매니페스트는 다음과 같이 작성할 수 있습니다.

```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: '*/1 * * * *'
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: hello
              image: busybox
              args:
                - /bin/sh
                - -c
                - date; echo Hello from the k8s cluster
          restartPolicy: OnFailure
```

### 핵심 요약

#### 1) 잡 컨트롤러는 일괄 처리 타입의 워크로드에 적합합니다

#### 2) 잡 컨트롤러 관리하의 파드 위에서 돌아가는 컨테이너가 비정상 종료 하면 재실행 횟수의 상한치에 도달하거나, 정상 종료 할 때까지 반복해서 파드가 실행됩니다

#### 3) 크론잡은 시간에 맞춰 정기적으로 잡을 실행하는 컨트롤러입니다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
