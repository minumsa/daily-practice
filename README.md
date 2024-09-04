## 📝 전자책 형태의 블로그 서비스 웹, 일상연습

| 메인 페이지                              |
| ---------------------------------------- |
| ![mainPage](/src/images/readme/main.gif) |

- 배포 URL: https://blog.divdivdiv.com

## 프로젝트 소개

- 일상연습은 전자책 형태의 블로그로, 텍스트 중심의 글을 업로드할 수 있는 사이트입니다.
- 다크모드 기능을 제공합니다.
- 마크다운 파일을 통해 글을 자유롭게 쓰거나 수정하고 삭제할 수 있습니다.
- 게시글 페이지에서 좌우 방향키를 클릭 시 작성일 기준으로 이전, 다음 페이지로 이동합니다.
- 워프 게시판을 클릭하면 랜덤한 게시글로 이동합니다.
- CSS 미디어 쿼리를 통해 반응형 웹을 구현했습니다.

## 개발 환경

- Front-end: HTML, CSS, TypeScript, React, GatsbyJs
- 서비스 배포: Vercel
- 커밋 컨벤션
- 코드 컨벤션
- 스프라이트

## 채택한 개발 기술

### React

- 기능별 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
- 레이아웃 컴포넌트를 설계해 사이트의 전체 구조를 일관성 있게 유지하고 디자인 시스템 관리의 효율성을 높였습니다.

### GatsbyJs

- Static Site Generation(SSG)으로 빌드 시 모든 페이지를 미리 생성해 사이트의 초기 로딩 속도를 향상시켰습니다.
- GraphQL 쿼리를 통해 각 페이지에 필요한 데이터만 선택적으로 가져와 불필요한 데이터 전달을 막고 성능을 최적화했습니다.
- 플러그인을 통해 SEO와 성능을 최적화해 검색 엔진에서 높은 평가를 받을 수 있도록 했습니다.

### eslint, prettier

- 정해진 규칙에 따라 자동으로 코드 스타일을 정리해 코드의 일관성을 유지했습니다.
- eslint로 코드 품질 관리를, prettier로 코드 포맷팅을 했습니다.

## 프로젝트 실행 방법

사용한 `npm` 버전은 9.2.0이며, `Node.js` 버전은 v19.4.0입니다.

```bash
npm install
npm start
```

## 프로젝트 구조

```bash
.
├── README.md
├── .gitignore
├── package-lock.json
├── package.json
└── src
    ├── components
    │   ├── footer
    │   ├── home
    │   │   ├── main
    │   │   └── title
    │   └── mobile
    ├── content
    ├── images
    │   └── readme
    ├── lib
    └── pages
        └── posts
```

## 개발 기간

- 개발 기간: 2023.04 ~ 2023.06

## 관련 문서

- [최유일 포트폴리오](https://rust-ocicat-1b0.notion.site/f61c9cea780144819507bf0616d3bd70?pvs=4)

## 신경 쓴 부분

- [레이아웃 컴포넌트 활용](https://github.com/minumsa/carver-music/wiki/%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84:-API-%EB%AA%A8%EB%93%88%ED%99%94)
- [폴더 구조화](https://github.com/minumsa/carver-music/wiki/%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84:-API-%EB%AA%A8%EB%93%88%ED%99%94)

## 페이지별 기능

### [메인 페이지]

- `CSS flexbox`를 통해 전자책 형태의 레이아웃 구축했습니다.
- 게시글을 블록 링크 형태로 나열했습니다.

| 메인 페이지                              |
| ---------------------------------------- |
| ![mainPage](/src/images/readme/main.gif) |

<br>

### [다크 모드]

- `styled-components` 패키지의 `ThemeProvider`에 다크 모드 테마를 연동했습니다.
- `ThemeProvider`로 `React`의 디자인 패턴을 활용한 Layout 컴포넌트를 감싸 전역 스타일 관리했습니다.
- 페이지 이동 및 새로고침 시에도 유지시키기 위해 `GatsbyJS`의 `gatsby-plugin-dark-mode` 플러그인을 통해 로컬 스토리지에 사용자의 환경 설정을 저장했습니다.
- 로컬 스토리지에 현재 테마 상태를 저장해 사이트 재방문 시 해당 테마를 자동으로 적용합니다.

| 다크 모드                                    |
| -------------------------------------------- |
| ![darkMode](/src/images/readme/darkMode.gif) |

<br>

### [포스트 페이지]

- `GatsbyJS`의 `GraphQL`을 사용해 게시글 MD 파일의 각종 데이터를 쿼리하고 가져옵니다.
- 좌우 방향키를 클릭 시 작성일 기준으로 이전, 다음 페이지로 이동합니다.
- 글 번호 및 제목을 화면 우측에 책등처럼 표시합니다.

| 포스트 페이지                            |
| ---------------------------------------- |
| ![postPage](/src/images/readme/post.gif) |

<br>

### [모바일 페이지]

- 반응형 웹
  - `CSS` 미디어 쿼리를 통해 현재 뷰포트 크기에 적합한 스타일 적용합니다.
- 반응형 모바일 헤더
  - `useEffect` 훅으로 현재 스크롤 값을 실시간으로 체크합니다.
  - 스크롤을 위로 올리는 동작이 감지되면 `state` 상태를 변경해 헤더를 표시합니다.

| 모바일 페이지 1                                | 모바일 페이지 2                                |
| ---------------------------------------------- | ---------------------------------------------- |
| ![mobilePage1](/src/images/readme/mobile1.gif) | ![mobilePage2](/src/images/readme/mobile2.gif) |

## 개선 목표

## 프로젝트 후기

## 개발자

<div>

|                                                                   **최유일**                                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://carver-bucket.s3.ap-northeast-2.amazonaws.com/user/carver" height=150 width=150> <br/> @minumsa](https://github.com/minumsa) |

</div>
