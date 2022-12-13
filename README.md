# 미세먼지 정보 앱

<img width="350" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d7aeb13f-f36a-44a9-9eb8-801abe5e96ab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T033055Z&X-Amz-Expires=86400&X-Amz-Signature=d936767a899babd6f987724e0ddfb71effc43ae67f5789971c99ec3befba4e56&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" />

---

## 프로젝트 소개

- **공공 데이터 API를 사용하여 지역별 미세먼지를 조회할 수 있는 애플리케이션을 제작했습니다**
- **배포 사이트 → [https://fine-dust-app.netlify.app/](https://fine-dust-app.netlify.app/)**
- **깃헙 링크 → [https://github.com/hoona1011/finedust-renewal](https://github.com/hoona1011/finedust-renewal)**

---

## 사용한 기술

- **언어: TypeScript**
- **프레임워크: React**
- **전역 상태관리 라이브러리: Redux Toolkit**
- **비동기 처리: axios**
- **스타일링 라이브러리:** **Tailwind CSS**

---

## 기능 및 기타사항

- **에어비앤비 eslint, prettier 규칙 적용**
  - 모든 것을 명시적으로 작성해야 한다는 장점이자 단점이 있었습니다
    ex) `useEffect` 의 의존성 배열에 콜백함수에 포함된 모든 식별자를 명시해야 했습니다
  - **장점**: 의존성 배열에 모든 데이터를 작성하면 해당 함수형 컴포넌트가 재평가되면서 새로운 함수 등을 생성하고 이에 따라 `useEffect` 의 콜백함수가 실행되기 때문에 이를 막기 위해서는 `useCallback` 사용하여 메모이제이션을 하도록 유도했습니다
  - **단점**: 린트 규칙이 너무 까다로워서 코드 로직 자체에 집중하기가 힘들었습니다
    ex) props 타입을 지정한 `interface` 내에서 `?` 를 사용하여 선택적으로 props를 받는다고 명시했음에도 리액트 자체 기능인 default props 설정을 요구함
- **전체 지역 보기 기능, 상세 지역 보기 기능, 즐겨찾기 기능**
  - 공공 데이터 API에서 받아온 데이터를 렌더링 합니다
  - 데이터를 받아올 때 즐겨찾기와 관련된 프로퍼티를 설정하여 즐겨찾기 페이지에서는 하트를 누른 지역만 필터링해서 볼 수 있습니다
  - `dustGrader` , `gradeToColor` 라는 이름의 유틸함수를 사용해 글자색상과 미세먼지 등급을 표현할 수 있습니다
- **`useFetch` 커스텀 훅**
  - 재사용성을 고려해 `useFetch` 라는 데이터 페칭용 커스텀 훅을 만들어 두 페이지의 상위 컴포넌트에서 데이터와 요청을 관리했습니다

---

## 결과 화면

### 도시 전체의 미세먼지 정보

- 특정 도시의 모든 미세먼지 정보를 조회할 수 있습니다. (ex) 강남구, 영등포구...

![image](https://user-images.githubusercontent.com/77940847/207243628-78dd1f20-14d1-44e4-b568-014c94ce7641.gif)
<br><br>

---

### 특정 구역의 미세먼지 정보

- 특정 행정구역의 미세먼지 정보를 조회할 수 있습니다

![image](https://user-images.githubusercontent.com/77940847/207243647-99f13b8d-75d7-4668-b934-0ecd6ab06835.gif)
<br><br>

---

### 즐겨찾기

- 즐겨찾기에 등록한 미세먼지 정보를 조회할 수 있습니다

![image](https://user-images.githubusercontent.com/77940847/207243668-5594bfae-f857-431c-aa19-856ea9108822.gif)
<br><br>
