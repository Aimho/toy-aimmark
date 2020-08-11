### boilerplate-react 개요

- UI 스타일은 `styled-components`를 사용해서 구현
- 패키지 설치 (`yarn install`) 후 실행하면 동작함(`yarn start`)

### 폴더 구조

- public
  - data: (json) 더미 데이터 파일
- src
  - api: (axios) 데이터 json 요청
  - assets (fonts, reset.css, icons, images) 기본 스타일 및 리소스 파일
  - component: 재사용 컴포넌트
  - config: 환경변수
  - hooks: custom hooks
  - locale: i18n 번역
  - modules: redux 설정
  - page: view 컴포넌트
  - util: 재사용 함수

### 설치된 패키지

- body-scroll-lock
- lodash
- react-intl
- react-redux, typesafe-actions
- styled-components
- axios
- react-hook-form

### 구현시 참고

- 반응형
  - 기본 스타일 Desktop
  - @media only screen and (max-width: 960px) Tablet Portrait
  - @media only screen and (max-width: 576px) Mobile
