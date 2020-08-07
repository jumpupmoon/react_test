# 기술분석서(yakiyo)

Created: Aug 7, 2020 10:02 AM
Engineers: 은정 추, Jihoon Jin, 형진 황
Product Manager: 은정 추

# 블록체인 기술 개요

## 0. 처방전 전송 시스템의 이해 및 최근 이슈

- 기존 종이로 발급되는 처방전은 병원에서 약국으로 사용자가 직접 전달해야 하는 시스템임.
- 이로 인해 훼손 및 분실의 가능성이 존재함.

> 환자가 처방전을 분실, 재발급을 위해 진료을 받는 경우 진료비 일부는 환자가 부담해야 한다. (2012.01.09, 의사신문[http://www.doctorstimes.com/news/articleView.html?idxno=149203](http://www.doctorstimes.com/news/articleView.html?idxno=149203))

- 종이 처방전 복사로 인하여 약물 오남용의 가능성이 존재함.(수면제 과다 처방 등)

> 약 중복처방 연간 390만건…오남용 위험↑ (2013.01.28, 중앙일보, [https://news.joins.com/article/10536356](https://news.joins.com/article/10536356))

- 약국에서 의무적으로 처방전을 2년 간 보관해야 하는데 천재 지변으로 훼손 시 약사 책임이 없음, 이를 방지할수 있음.
- 또한 현재 코로나19로 인하여 사람간의 접촉이 최소화 되는 시점에서 비대면 전송 시스템은 수요가 있을 것으로 보임.
- 코로나19로 인한 외출과 타인 접촉에 대한 우려가 높은 상황에서 진료의 모든 절차를 비대면으로 진행해 환자의 이동을 최소화하고 약국 내의 조제 대기시간도 없애 편리함과 동시에 안전하게 진행할 수 있어 이용자의 호응도가 높을 것으로 보임.

> 전화상담 처방도 모바일 앱으로 안전하게"...앱에 전자처방전 전송기능 추가(2020.04.24, 알리오폴릿, [http://www.alioplus.go.kr/news/newsDetail.do;jsessionid=7dm44bZcyLGZol0mk4Ynx-dG.node21?brdSeq=7619](http://www.alioplus.go.kr/news/newsDetail.do;jsessionid=7dm44bZcyLGZol0mk4Ynx-dG.node21?brdSeq=7619))

- 병원과 약국의 담합 문제를 방지할 수 있음.(특정 병원에서 제조시 특정 약국에 납품된 약만 사용 하는 사례) - 내 경험...

## 1. 하이퍼레저 패브릭 개발환경

### 프로젝트 개요

- 프로젝트명 : **약이요**(yakiyo)

> "비대면으로 사용자가 원하는 약국에 처방전을 전송하는 시스템 구축"

> "사용자가 따로 서류를 준비하지 않아도 보험회사에 간편하게 청구 할 수 있는 보험 청구 시스템 구축"

> "병원 진료 예약을 손쉽게 진행 가능한 시스템 구축"

- 참여자(병원, 약국, 보험회사, 제약회사)
- 주요 예상 기능
    - 병원(처방전 조회, 처방전 발급, 병원 관리, 게시판)
    - 약국(처방전 조회, 처방전 접수, 약국 관리, 재고 관리 및 주문)
    - 보험회사(보험 접수, 청구 진행)
    - 제약회사(약품 공급, 사용자 비제조 약 구매 추천 유도)
    - 사용자(처방전 조회, 처방전 전송, 보험 청구, 비제조 약 구매, 병원 진료 예약)

## 2. 네트워크 기술 정리

1. 하드웨어 소프트웨어 관련
    - Ubuntu
    - docker
    - Hyperledger
    - node.js - experss
    - mongoDB
    - react
2. [ID](http://2.ID) 관련
    - Organization(Hospitals, Pharmacies, Insurances, Pharmaceuticals)
    - CA(Hospitals, Pharmacies, Insurances, Pharmaceuticals)
    - Peer 확장 가능
3. 프로세스 관련

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%201.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%201.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%202.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%202.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%203.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%203.png)

## 3. 스마트컨트랙트 기술 정리

1. 구현
    - 구조체

    Description

    [Untitled](https://www.notion.so/ae559810f1354e6ea54ab646b27d3e95)

    Medicine

2. 설치
3. 배포
4. 테스트

## 4. 웹서비스 관련

- 웹 서버/웹 클라이언트
    - frontend
        1. web framework - react.js
    - backend
        1. Node.js (Express)
        2. MongoDB
    - openAPI
        1. 공공데이터 포털 -질병정보서비스
        2. 공공데이터 포털 - 의약품 제품 허가 서비스

- 스마트 컨트랙트 연동

# 블록체인 기술 개요

## 0. 처방전 전송 시스템의 이해 및 최근 이슈

- 기존 종이로 발급되는 처방전은 병원에서 약국으로 사용자가 직접 전달해야 하는 시스템임.
- 이로 인해 훼손 및 분실의 가능성이 존재함.

> 환자가 처방전을 분실, 재발급을 위해 진료을 받는 경우 진료비 일부는 환자가 부담해야 한다. (2012.01.09, 의사신문[http://www.doctorstimes.com/news/articleView.html?idxno=149203](http://www.doctorstimes.com/news/articleView.html?idxno=149203))

- 종이 처방전 복사로 인하여 약물 오남용의 가능성이 존재함.(수면제 과다 처방 등)

> 약 중복처방 연간 390만건…오남용 위험↑ (2013.01.28, 중앙일보, [https://news.joins.com/article/10536356](https://news.joins.com/article/10536356))

- 약국에서 의무적으로 처방전을 2년 간 보관해야 하는데 천재 지변으로 훼손 시 약사 책임이 없음, 이를 방지할수 있음.
- 또한 현재 코로나19로 인하여 사람간의 접촉이 최소화 되는 시점에서 비대면 전송 시스템은 수요가 있을 것으로 보임.
- 코로나19로 인한 외출과 타인 접촉에 대한 우려가 높은 상황에서 진료의 모든 절차를 비대면으로 진행해 환자의 이동을 최소화하고 약국 내의 조제 대기시간도 없애 편리함과 동시에 안전하게 진행할 수 있어 이용자의 호응도가 높을 것으로 보임.

> 전화상담 처방도 모바일 앱으로 안전하게"...앱에 전자처방전 전송기능 추가(2020.04.24, 알리오폴릿, [http://www.alioplus.go.kr/news/newsDetail.do;jsessionid=7dm44bZcyLGZol0mk4Ynx-dG.node21?brdSeq=7619](http://www.alioplus.go.kr/news/newsDetail.do;jsessionid=7dm44bZcyLGZol0mk4Ynx-dG.node21?brdSeq=7619))

- 병원과 약국의 담합 문제를 방지할 수 있음.(특정 병원에서 제조시 특정 약국에 납품된 약만 사용 하는 사례) - 내 경험...

## 1. 하이퍼레저 패브릭 개발환경

### 프로젝트 개요

- 프로젝트명 : **약이요**(yakiyo)

> "비대면으로 사용자가 원하는 약국에 처방전을 전송하는 시스템 구축"

> "사용자가 따로 서류를 준비하지 않아도 보험회사에 간편하게 청구 할 수 있는 보험 청구 시스템 구축"

> "병원 진료 예약을 손쉽게 진행 가능한 시스템 구축"

- 참여자(병원, 약국, 보험회사, 제약회사)
- 주요 예상 기능
    - 병원(처방전 조회, 처방전 발급, 병원 관리, 게시판)
    - 약국(처방전 조회, 처방전 접수, 약국 관리, 재고 관리 및 주문)
    - 보험회사(보험 접수, 청구 진행)
    - 제약회사(약품 공급, 사용자 비제조 약 구매 추천 유도)
    - 사용자(처방전 조회, 처방전 전송, 보험 청구, 비제조 약 구매, 병원 진료 예약)

## 2. 네트워크 기술 정리

1. 하드웨어 소프트웨어 관련
    - Ubuntu
    - docker
    - Hyperledger
    - node.js - experss
    - mongoDB
    - react
2. [ID](http://2.ID) 관련
    - Organization(Hospitals, Pharmacies, Insurances, Pharmaceuticals)
    - CA(Hospitals, Pharmacies, Insurances, Pharmaceuticals)
    - Peer 확장 가능
3. 프로세스 관련

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%201.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%201.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%202.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%202.png)

![%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%203.png](%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A5(yakiyo)%20b85410f79ad94c4795bf24b4f66b3c97/Untitled%203.png)

## 3. 스마트컨트랙트 기술 정리

1. 구현
    - 구조체

    Description

    [Untitled](https://www.notion.so/22b84812e5644334a6bedf3fc5f88606)

    Medicine

2. 설치
3. 배포
4. 테스트

## 4. 웹서비스 관련

- 웹 서버/웹 클라이언트
    - frontend
        1. web framework - react.js
    - backend
        1. Node.js (Express)
        2. MongoDB
    - openAPI
        1. 공공데이터 포털 -질병정보서비스
        2. 공공데이터 포털 - 의약품 제품 허가 서비스

- 스마트 컨트랙트 연동
