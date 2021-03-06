---
id: 15-autoscale
title: 15. 오토스케일
---

> 쿠버네티스의 오토스케일에 대하여

## 오토스케일

오토스케일은 **CPU**와 **메모리** 사용률에 따라 파드나 노드의 수를 자동으로 늘리고 줄이는 기능을 말한다.

퍼블릭 클라우드에서는 노드의 개수와 이용 시간에 따라 비용이 달라지기 때문에 비용 최적화와도 관련이 있다.

온프레미스라면 제한된 서버의 자원을 최대한 활용하는 것이 좋다.

가령 업무 시간대에는 사용자의 요청을 처리하는 서버 애플리케이션 파드 비중을 높이고,

심야 시간대에는 배치 처리를 수행하는 애플리케이션 파드의 비중을 높일 수 있다.

k8s에서는 오토스케일을 개발하는 여러 서브 프로젝트가 있다.

그 중에서도 특히 주목할 만한 것이 바로 다음 두 프로젝트이다.

1. 수평 파드 애플리케이션 (Horizontal Pod Autoscaler, HPA)

2. 클러스터 오토스케일러 (Cluster Autoscaler, CA)

HPA는 파드의 CPU 사용률을 감시하면서 파드의 레플리카 수를 늘리거나 줄인다.

CA는 필요할 때 노드를 자동으로 추가해준다.

## 오토스케일링 작업

HPA는 루프를 돌면서 대상이 되는 파드의 CPU 사용률을 정기적으로 수집한다.

여기서 파드의 CPU 사용률에 따라 파드의 수를 늘리는데 공식은 다음과 같다.

파드 수 = 소수점 값을 올려서 정수(파드들의 CPU 사용률 총합 / 목표 CPU 사용률 )

파드의 사용률이 218 밀리초이고 요구 시간이 200밀리초이면 파드의 CPU 사용률은 109%가 된다. (218/200)

CPU 목표 사용률이 50%라고 한다면,

파드의 필요 개수는 109% / 50% = 2.18 -> 레플리카 수는 3개가 된다.

## 오토스케일 체험

그럼 직접 GKE에서 이 오토스케일을 체험해보자.

이를 위해서는 CPU 사용률을 수집하는 metrics-server가 있어야하는데, 미니쿠베에서는 정상적으로 동작하지 않는다고 한다.

이를 위해 우리는 php 서버를 사용할 것 이다.

```Dockerfile
FROM php:7.0-apache
COPY src/ /var/www/html/
RUN chmod a+rx /var/www/html/*.php
```

CPU 사용률을 높이기 위한 PHP 코드도 준비되었다.

```php
<?php
  $x = 0.0001;
  for ($i = 0; $i <= 200000; $i++) {
    $x += sqrt($x);
  }
  echo "OK!";
?>
```

컨테이너를 빌드해서 리포지터리에 등록해주자.

```
docker build -t harrycode/php .

docker push harrycode/php
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-php
spec:
  replicas: 1
  selector:
    matchLabels:
      run: web-php
  template:
    metadata:
      labels:
        run: web-php
    spec:
      containers:
        - image: harrycode/php # 리포지터리명
          name: web-php
          resources:
            requests:
              cpu: 200m # HPA가 평가하는 CPU 사용률에 영향을 준다
---
apiVersion: v1
kind: Service
metadata:
  name: web-php
spec:
  type: NodePort
  selector:
    run: web-php
  ports:
    - port: 80
      protocol: TCP
      nodePort: 31446
```

구글 클라우드 k8s를 생성하고 연결 후 배포해주자.

```
gcloud container clusters get-credentials cluster-1 --zone=asia-northeast1-c

kubectl apply -f autoscale.yml

// 출력
deployment.apps/web-php created
service/web-php created
```

디플로이먼트에 HPA를 적용할 시간이다.

HPA는 kubectl 명령어로 제공할 수 있다.

```
kubectl autoscale -f <파일명> | <컨트롤러> <오브젝트명> | <컨트롤러>/<오브젝트명> [--min<최소_파드_수>] --max=<최대_파드_수> [--cpu-percent=<목표_CPU_사용률>] [옵션]
```

아래 명령어로 php 서버에 HPA를 적용해주자.
'

```
kubectl autoscale deployment web-php --cpu-percent=50 --min=1 --max=10

 ✘  ~/TestDatas/15_DandK/step14   master ±  kubectl get deploy,rs,hpa,po,svc
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/web-php   1/1     1            1           3m26s

NAME                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/web-php-5567d4fd96   1         1         1       3m27s

NAME                                          REFERENCE            TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
horizontalpodautoscaler.autoscaling/web-php   Deployment/web-php   0%/50%    1         10        1          30s

NAME                           READY   STATUS    RESTARTS   AGE
pod/web-php-5567d4fd96-s4vlp   1/1     Running   0          3m27s

NAME                 TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
service/kubernetes   ClusterIP   10.68.0.1     <none>        443/TCP        5m57s
service/web-php      NodePort    10.68.6.190   <none>        80:31446/TCP   3m26s
```

부하를 주기 위해 BusyBox 파드를 기동하여 web-php를 대상으로 wget 명령어를 반복해서 날려줄 것이다.

```
kubectl run -it bustbox --restart=Never --rm --image=busybox sh

If you don't see a command prompt, try pressing enter.
/ # while true; do wget -q -O - http://web-php>/dev/null; done
```

```
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   377%/50%   1         10        1          2m26s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   377%/50%   1         10        4          2m44s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   377%/50%   1         10        4          2m45s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   377%/50%   1         10        4          2m45s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   377%/50%   1         10        4          2m46s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   119%/50%   1         10        8          2m54s
 ~  kubectl get hpa
NAME      REFERENCE            TARGETS    MINPODS   MAXPODS   REPLICAS   AGE
web-php   Deployment/web-php   119%/50%   1         10        8          2m55s
```

레플리카 수가 증가하는 것을 볼 수 있다.

스케일업에는 3분의 대기시간, 스케일 다운에는 5분의 대기시간이 존재한다.

HPA는 성급하게 파드의 개수를 조절하지않는다.

### 핵심 요약

#### 1) 파드 수를 부하에 맞게 조절하는 수평 파드 오토 스케일러(Horizontal Pod Autoscaler, HPA)를 사용할 수 있다

#### 2) HPA는 CPU의 평균 사용률과 목표 사용률이 일치하도록 레플리카 수를 조절한다

#### 3) HPA가 목표로하는 CPU 사용률은 실제 CPU 사용 시간을 매니페스트에 기재한 CPU 요구 시간으로 나누어서 구한다

#### 4) HPA는 파드 개수만 조절하므로 노드 수를 조절하고 싶으면 클러스터 오토스케일러 (Cluster Autosacler, CA)를 고려한다. 단 이 기능은 클라우드 프로바이더의 기능 지원이 필수다

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
