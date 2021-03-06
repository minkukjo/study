---
id: 13-deplyoment
title: 13. 디플로이먼트
---

> 쿠버네티스의 디플로이먼트에 대하여

## 디플로이먼트

디플로이먼트의 역할에 대해 이해해보자.

1장에서 언급했듯이 디플로이먼트는 백엔드의 워크로드에 적합한 **컨트롤러**이다.

디플로이먼트의 주 역할은 파드의 개수를 관리하는 것이다.

k8s 클러스터에서 파드는 서버의 역할을 담당하며 처리 능력을 높이고 싶다면 **파드의 개수를 늘리면** 된다.

물론 불필요하게 많은 파드를 구동시키면 CPU와 메모리가 낭비될 수 있으므로 적절히 조절해야한다.

이처럼 파드의 개수를 관리하는 것은 시스템의 처리 능력과 서비스를 중단하지 않는 가용성, 그리고 비용 측면에서 매우 중요하다.

디플로이먼트는 요청한 개수만큼 파드를 기동하며 장애 등의 이유로 파드의 개수가 줄어들면 새롭게 파드를 만들어 기동한다.

그리고 애플리케이션의 버전을 업그레이드할 때 새로운 버전의 파드로 조금씩 바꾸는 기능(롤링 업데이트) 기능도 제공한다.

그런데 로드밸런서에 해당하는 기능은 디플로이먼트에 포함되지 않는데, 이는 쿠버네티스의 **서비스**라는 오브젝트가 담당하고 있다.

디플로이먼트는 혼자 동작하지 않고 **레플리카**와 함게 동작한다.

이 관계는 아래의 그림과 같다.

![B80Z9](https://user-images.githubusercontent.com/43809168/103437408-d5ac1100-4c6a-11eb-910a-823fd93438a2.png)

레플리카셋은 디플로이먼트의 매니페스트에 적힌 레플리카의 값을 기준으로 파드의 개수를 조절하며 사용자가 직접 조작하는 경우는 거의 없고 주로 상태를 참조한다.

## 디플로이먼트 생성과 삭제

디플로이먼트를 만들고 지워보자.

디플로이먼트를 만드는 명렁어는 `kubectl apply -f {YAML_파일명}`이고 지울 때는 `kubectl delete -f {YAML_파일명}`이다.

아래는 디플로이먼트 매니페스트이다.

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deploy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web # 매치 라벨은 디플로이먼트와 파드를 엮을 라벨 명이다.
  template:
    metadata:
      labels:
        app: web # 디플로이먼트에 정의된 라벨을 적어준다.
    spec: # spec은 template 안에 적어야한다.
      containers:
        - name: nginx
          image: 'nginx:latest' # 도커허브로부터 이미지를 가져온다.
```

```
 ✘  ~/TestDatas  kubectl apply -f deployment.yml
deployment.apps/web-deploy created
 ✘  ~/TestDatas  kubectl get deploy
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
web-deploy   2/3     3            2           10s
 ~/TestDatas  kubectl get rs
NAME                    DESIRED   CURRENT   READY   AGE
web-deploy-86cd4d65b9   3         3         3       83s
 ~/TestDatas  kubectl get po -o wide
NAME                          READY   STATUS    RESTARTS   AGE   IP           NODE       NOMINATED NODE   READINESS GATES
web-deploy-86cd4d65b9-gvg5l   1/1     Running   0          87s   172.17.0.3   minikube   <none>           <none>
web-deploy-86cd4d65b9-p7hn8   1/1     Running   0          87s   172.17.0.5   minikube   <none>           <none>
web-deploy-86cd4d65b9-sb956   1/1     Running   0          87s   172.17.0.4   minikube   <none>           <none>
```

위와 같은 로그를 확인할 수 있다.

미니쿠베의 경우 단일 노드를 사용하므로 3개의 파드가 같은 노드에 배치된다.

만약 노드가 여러개라면 k8s 클러스터는 여러 노드에 파드를 분산 배치시킨다.

## 스케일 기능

스케일 기능은 레플리카의 값을 변경하는 기능을 의미한다.

레플리카에 명시된 파드의 개수를 조절하여 처리 능력을 높이거나 낮추는 기능이다.

여기서는 수동으로 변경하는 방법을 사용하지만 CPU 사용량과 연동해서 동적으로 레플리카의 값을 조절하는 오토스케일 기능도 존재한다.

여기서는 레플리카를 조절하는 두 가지 방법에 대해서 설명할 것이다.

하나는 **매니페스트를 변경한 후 적용하는 방법**과 **kubectl scale** 명령을 사용하여 파드의 개수를 늘리는 방법, 두 가지 방법이 존재한다.

### 매니페스트 변경 후 적용

이미 배포된 디플로이먼트의 레플리카 값을 변경하여 처리 능력을 올려보자.

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deploy
spec:
  replicas: 10 # 10으로 증가시켜보았다.
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: 'nginx:latest'
```

```
 ~/TestDatas  kubectl apply -f deployment.yml
deployment.apps/web-deploy configured

 ~/TestDatas  kubectl get po
NAME                          READY   STATUS    RESTARTS   AGE
web-deploy-86cd4d65b9-49tf4   1/1     Running   0          33s
web-deploy-86cd4d65b9-7lj77   1/1     Running   0          33s
web-deploy-86cd4d65b9-bdjd6   1/1     Running   0          33s
web-deploy-86cd4d65b9-dsjdh   1/1     Running   0          33s
web-deploy-86cd4d65b9-gqvw6   1/1     Running   0          33s
web-deploy-86cd4d65b9-gvg5l   1/1     Running   0          5m40s
web-deploy-86cd4d65b9-p7hn8   1/1     Running   0          5m40s
web-deploy-86cd4d65b9-r25ts   1/1     Running   0          33s
web-deploy-86cd4d65b9-sb956   1/1     Running   0          5m40s
web-deploy-86cd4d65b9-xlxxr   1/1     Running   0          33s
```

### 스케일 명령어 사용

```
 ✘  ~/TestDatas  kubectl get deploy
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
mysql   1/1     1            1           14m

 ~/TestDatas  kubectl scale deployment/mysql --replicas=3
deployment.apps/mysql scaled
 ~/TestDatas  kubectl get deploy
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
mysql   1/3     3            1           17m
```

디플로이먼트를 통해 늘릴 수 있는 것은 파드의 개수 뿐이다.

파드의 개수를 늘리는 중에 k8s 클러스터의 자원(CPU, 메모리)이 부족해서 노드를 추가하여 자원이 생길 때 까지 파드 생성이 미뤄진다.

메모리가 부족한 상황에서 까지 가상 메모리를 사용해 메인 메모리를 페이징하면서 까지 파드를 늘려주지는 않는다고 한다.

메인 메모리로 파드를 배치할 수 없으면 파드는 생성되지 않는다.

따라서 파드의 개수를 늘리기 전에 클러스터의 가용 자원을 확인해서 노드 증설을 검토할 필요가 있다.

### 실제 서비스 환경에서

이미 배포된 서비스의 경우 CI에서 버저닝이 따지는데 해당 버전의 이미지로 레플리카 수를 조절해볼 수 있을 것 같다.

가령 트래픽이 증가할 수 있는 상황에서는 따로 빌드-배포를 하지 않고 로컬에서 레플리카 수만 조절하는 것도 가능하지 않을까 싶다.

그러면 순간적으로 트래픽이 몰리는 시간대를 대비해서 파드 수를 늘려서 처리력을 높일 수 있을 것 같다.

## 롤아웃 기능

롤아웃은 쿠버네티스에서 **컨테이너의 업데이트**를 의미한다.

롤아웃을 할 때는 사용자의 요청을 처리할 수 있도록 정해진 개수만큼 업데이트를 진행할 수 있다.

쿠버네티스 롤아웃 디폴트 전략은 **RollingUpdateStrategy**를 사용한다.

```
~/TestDatas  kubectl describe deployment web-deploy
Name:                   web-deploy
Namespace:              default
CreationTimestamp:      Fri, 01 Jan 2021 22:51:09 +0900
Labels:                 <none>
Annotations:            deployment.kubernetes.io/revision: 1
                        kubectl.kubernetes.io/last-applied-configuration:
                          {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"name":"web-deploy","namespace":"default"},"spec":{"replicas":10,...
Selector:               app=web
Replicas:               10 desired | 10 updated | 10 total | 10 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge // 이 부분 주목
Pod Template:
  Labels:  app=web
  Containers:
   nginx:
    Image:        nginx:latest
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Progressing    True    NewReplicaSetAvailable
  Available      True    MinimumReplicasAvailable
OldReplicaSets:  <none>
NewReplicaSet:   web-deploy-86cd4d65b9 (10/10 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  18m   deployment-controller  Scaled up replica set web-deploy-86cd4d65b9 to 3
  Normal  ScalingReplicaSet  13m   deployment-controller  Scaled up replica set web-deploy-86cd4d65b9 to 10
```

위 디플로이먼트 상태에서 `RollingUpdateStrategy: 25% max unavailable, 25% max surge`를 확인할 수 있다.

최대 25%의 파드를 정지할 수 있고, 최대 25%만큼 초과할 수 있음을 의미한다.

가령 레필라카 값이 10이면, 최소 파드수는 `10-10X0.25=7.5`라는 계산식이 나오는데 소수점을 올려 8이 된다.

초과 파드수는 12.5이므로 13이 된다.

정리하면 최소 8개의 파드를 유지하면서 최대 13개의 파드가 되도록 롤아웃이 점진적으로 진행된다.

롤아웃에 의해 종료되는 파드에는 종료 요청 시그널 SIGTERM이 전송된다.

만약 컨테이너에서 애플리케이션이 이 시그널을 받아 종료 처리를 하지 않으면 30초 후에 SIGKILL에 의해 강제 종료 된다.

종료 요청을 받은 컨테이너는 더 이상 클라이언트로부터 새로운 요청을 전달받지 않게 된다.

그리고 종료 시그널을 받은 후 메인 프로세스를 종료시킨다.

## 롤백 기능

이전 버전의 애플리케이션으로 되돌리는 **Rollback** 기능에 대해 알아보자.

k8s에서는 아주 간단한 명령어로 롤백을 수행할 수 있다.

`kubectl rollout undo deployment web-deploy` 한 줄이면 된다.

## 파드의 IP 주소가 변경되는 경우와 아닌 경우

파드의 IP 주소는 특정 이벤트에 의해 변할 수도 있고 변하지 않을 수도 있다.

기본적으로는 가동시에 할당되며 종료 시에 회수되어 다른 파드에 할당된다.

롤아웃이나 롤백, 스케일에 의해 파드가 종료되고 새롭게 만들어지는 경우라면 새로운 IP 주소가 할당된다고 볼 수 있다.

한편 파드가 컨테이너의 프로세스가 이상 종료를 한 경우 재시작하여 RESTARTS 값이 증가한 경우라면 파드의 IP 주소는 바뀌지 않는다.

## 자동 복구

파드 내의 컨테이너가 모종의 이유로 죽으면, 기본적으로는 파드가 컨테이너를 재구동 시켜준다.

즉, 파드는 컨테이너 수준의 장애에 대한 복구를 시도한다.

이에 반해 디플로이먼트의 자동 복구 기능은 파드 단위로 복구한다.

디플로이먼트는 노드가 중지되더라도 성급하게 복구를 시도하지 않는다.

노드가 중지하면 디플로이먼트는 5분을 기다리며 거기서 1분이 경과하면 중지된 노드의 파드들의 상태가 **UNKNOWN**으로 바뀐다.

그리고 동시에 다른 노드에 **UNKNOWN** 상태의 파드만큼 새로운 파드를 실행한다.

여기서 중지된 노드가 다시 구동하면 그제서야 **UNKNOWN** 상태의 파드를 제거한다.

이처럼 디플로이먼트의 자동복구 기능은 최대한 신중하게 동작하도록 구성되어있다.

## 디플로이먼트를 이용한 고가용성 구성

하나의 파드와 퍼시스턴트 볼륨을 사용하면 고가용성 구성 ( 이하 HA 구성 )을 만들 수 있다.

파드는 어떤 노드에 있더라도 퍼시스턴트 볼륨을 마운트할 수 있다.

지금부터는 2개의 노드로 구성된 k8s 클러스터를 생성하고 파드가 배포된 노드를 중지시킨 이후 파드가 이동하는 것을 확인해볼 것이다.

```
gcloud container clusters create test --num-nodes=2
```

클러스터 생성 이후 아래의 스크립트로 MySQL 서버와 퍼시스턴트 볼륨을 마운트한 HA 구성을 만들어보자.

클라이언트에서 접근할 수 있도록 서비스 오브젝트도 만들었다.

```yml
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: gvol-1
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 12Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: mysql
  name: mysql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
        - env:
            - name: MYSQL_ROOT_PASSWORD
              value: qwerty
          image: mysql:5.7
          livenessProbe:
            exec:
              command:
                - mysqladmin
                - ping
            initialDelaySeconds: 120
            timeoutSeconds: 10
          name: mysql
          ports:
            - containerPort: 3306
          volumeMounts:
            - mountPath: /var/lib/mysql
              name: pvc
              subPath: mysql-data
      volumes:
        - name: pvc
          persistentVolumeClaim:
            claimName: gvol-1
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: mysql
  name: mysql-dpl
spec:
  ports:
    - nodePort: 30306
      port: 3306
  selector:
    app: mysql
  type: NodePort
```

배포 이후 MySQL 파드가 어떤 노드에 배포되었는지를 확인해보자

```
 ✘  ~/TestDatas  kubectl get node
NAME                                  STATUS   ROLES    AGE   VERSION
gke-test-default-pool-a97e525d-6dl1   Ready    <none>   13m   v1.16.15-gke.4901
gke-test-default-pool-a97e525d-tfdc   Ready    <none>   13m   v1.16.15-gke.4901
 ~/TestDatas  kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE                                  NOMINATED NODE   READINESS GATES
mysql-58665b948b-ndjpd   1/1     Running   0          45s   10.100.1.7   gke-test-default-pool-a97e525d-6dl1   <none>           <none>
```

이제 이 노드에 더 이상 새로운 파드가 스케줄 되지 않도록 명령하는 `cordon` 명령을 사용해보자.

이 명령은 필수는 아니다. 왜냐하면 `drain` 명령을 사용하면 `cordon`도 같이 실행되기 때문이다.

```
 ~/TestDatas  kubectl cordon gke-test-default-pool-a97e525d-6dl1
node/gke-test-default-pool-a97e525d-6dl1 cordoned
```

이후 drain 명령을 사용하여 해당 노드에 가동 중인 파드를 다른 노드로 이동시키자.

```
kubectl drain gke-test-default-pool-a97e525d-6dl1 --ignore-daemonsets
```

파드 이동이 정상적으로 완료되었는지 확인해보자.

```
 ~/TestDatas  kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP            NODE                                  NOMINATED NODE   READINESS GATES
mysql-58665b948b-wwgj2   1/1     Running   0          50s   10.100.0.10   gke-test-default-pool-a97e525d-tfdc   <none>           <none>
```

MySQL 서버가 정상적으로 다른 노드로 이동한 것을 확인할 수 있다.

중지 시킨 노드에 다시 파드가 배치될 수 있게 스케줄 금지를 해제해주자.

```
 ~/TestDatas  kubectl uncordon gke-test-default-pool-a97e525d-6dl1
node/gke-test-default-pool-a97e525d-6dl1 uncordoned
```

이처럼 특정 노드의 파드를 전부 클러스터 내의 다른 노드로 옮겨주는 것이 가능하다.

## 핵심 요약

#### 1) 디플로이먼트는 서버 타입의 워크로드에 적합한 컨트롤러다

#### 2) 디플로이먼트는 스케일, 롤아웃, 롤ㄹ백, 자동 복구라는 네 가지 기능이 있다

#### 3) 스케일을 사용하면 파드의 개수를 늘리거나 줄일 수 있다

#### 4) 롤아웃과 롤백은 서비스를 유지하면서 파드를 교체한다. 이를 위해 애플리케이션의 설계와 구현이 필요하다

#### 5) 자동 복구 기능은 노드 수준에서 장애가 발생했을 때 파드를 복구하는 기능이다

#### 6) 디플로이먼트, 퍼시스턴트 볼륨, 서비스 컨트롤러 이 3개를 조합하면 HA 구성이 가능하다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
