import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  bgColor: string;
  textColor: string;
  categoryColor: string;
  listBgColor: string;
  opacity: number;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { bgColor, textColor, categoryColor, listBgColor, opacity } = theme;
    return css`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");

      body {
        margin: 0;
        background-color: ${bgColor};
        color: ${textColor};
        font-family: "Pretendard Variable", Pretendard, -apple-system,
          BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
          "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      }

      .line {
        background-color: ${textColor};
        opacity: ${opacity};
      }

      .list-text:hover {
        border: 1px dashed ${textColor};
        border-radius: 0;
        font-weight: 700;
      }

      .list-text,
      .list-button {
        background-color: ${categoryColor};
        color: ${textColor};
        border: 1px solid ${textColor};
      }

      .prev-button {
        border-top: 1.5px solid ${textColor};
        border-right: 1.5px solid ${textColor};
        opacity: ${opacity};
      }

      .next-button {
        border-top: 1.5px solid ${textColor};
        border-right: 1.5px solid ${textColor};
        opacity: ${opacity};
      }

      .post-line {
        border-top: 1.5px solid ${textColor};
      }

      .hamburger,
      .top-hamburger {
        background-color: ${textColor};
        box-shadow: 0 7px 0 ${textColor}, 0 14px 0 ${textColor};
        // opacity: ${opacity};
      }

      .category-container {
        color: ${listBgColor};
        background-color: ${categoryColor};
        border: 1px solid ${listBgColor};
        box-shadow: 1px 1px 5px ${listBgColor};
      }

      .content-text {
        width: 85vw;
        max-width: 530px;
        font-weight: 400;
        font-size: 20px;
        line-height: 210%;
        word-break: keep-all;
        opacity: ${opacity};
      }

      .content-text p:first-child {
        text-indent: 0%;
      }

      .content-text p {
        margin: 0;
        text-indent: 10%;
      }

      @media (max-width: 950px) {
        .content-text {
          font-size: 20px;
        }
      }

      @media (max-width: 550px) {
        .content-text {
          width: 85vw;
          font-weight: 400;
          font-size: 16px;
          line-height: 210%;
        }

        .post-line {
          border-top: 1px solid ${textColor};
        }
      }

      p::selection {
        color: ${categoryColor};
        background-color: ${textColor};
      }

      .date-created,
      .button-container,
      .page-container,
      .title-container,
      .info-container,
      .intro-container,
      .explain-container,
      .connect-container,
      .warp-container,
      .line-color {
        opacity: ${opacity};
      }

      .underline {
        text-decoration: wavy underline ${textColor};
      }

      .mobile-line {
        background-color: ${textColor};
        opacity: ${opacity};
      }

      .prev-post,
      .next-post {
        border: 1px solid ${textColor};
        background-color: ${categoryColor};
      }
      .prev-post-title,
      .next-post-title {
        text-decoration: wavy underline ${textColor};
      }

      .top-title {
        color: ${textColor};
        opacity: ${opacity};
      }

      .mode-button {
        color: ${textColor};
        opacity: ${opacity};
      }

      header {
        display: flex;
        background-color: ${bgColor};
      }

      .mobile-middle {
        font-size: 16px;
        color: ${textColor};
        opacity: ${opacity};
      }
    `;
  }}
`;

export default GlobalStyle;
