### boilerplate-react 개요

- UI 스타일은 `styled-components`를 사용해서 구현
- 패키지 설치 (`yarn install`) 후 실행하면 동작함(`yarn start`)

### 지켜야 할 폴더 구조

- public
  - data: (json) 더미 데이터 파일
- src
  - api: (axios) 데이터 요청
  - component: 재사용 컴포넌트
  - config: 환경변수
  - hooks: custom hooks
  - locale: i18n(react-intl) 번역
  - modules: redux 설정
  - routes: view 컴포넌트
  - styles: styled-component, material-ui theme
  - util: 재사용 함수

### 설치된 패키지

- body-scroll-lock
- react-hook-form
- react-router-dom
- styled-components
- styled-reset
