---
id: 07-container-network
title: 07. 컨테이너 네트워크
---

> 컨테이너 네트워크에 대하여

### 컨테이너 네트워크와 포트 공개 방법

실행 중인 컨테이너는 IP 주소를 할당 받아 컨테이너 간 통신이 가능하다.

<img width="1514" alt="스크린샷 2020-12-09 오후 11 17 17" src="https://user-images.githubusercontent.com/43809168/101641122-b60f3780-3a74-11eb-9278-3ca9c628d2d0.png"/>

왼쪽 그림처럼 호스트 내의 WAS와 DB를 연결하는 것도 가능하며,

컨테이너를 호스트의 외부 네트워크에 공개하는 것도 가능하다.

### 컨테이너 네트워크

`docker network` 명령어는 컨테이너 네트워크를 만들거나 지울 수있다.

- docker network ls : 컨테이너 네트워크를 리스트로 표시

- docker network inspect : 네트워크명을 지정해서 자세한 내용을 표시

- docker network create : 컨테이너 네트워크를 생성

- docker network rm : 컨테이너 네트워크를 삭제

- docker network connect : 컨테이너를 컨테이너 네트워크에 접속

- docker network disconnect : 컨테이너를 컨테이너 네트워크에서 분리

### 외부에 포트 공개하기

컨테이너 포트를 외부에 공개하기 위해서는 `-p` 옵션을 사용할 수 있다.

`공개_포트번호:컨테이너_내_포트번호`로 컨테이너 내 포트를 호스트의 IP 주소상의 포트번호로 매핑할 수 있다.

## Reference

![k8s](https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png)

15단계로 배우는 도커와 쿠버네티스 - 타카라 마호 저서
