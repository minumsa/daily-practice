import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  backgroundColor: string;
  defaultColor: string;
  invertedColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { backgroundColor, defaultColor, invertedColor } = theme;
    return css`
      body {
        background-color: ${backgroundColor};
      }

      body,
      .list-text,
      .list-button {
        color: ${invertedColor};
      }

      .marker {
        background-color: ${invertedColor};
      }

      .list-text:hover {
        border: 1px dashed ${invertedColor};
        color: ${defaultColor};
        background-color: ${invertedColor};
      }

      .list-text,
      .list-button {
        border: 1px solid ${invertedColor};
      }

      .prev-button {
        border-top: 1.5px solid ${invertedColor};
        border-right: 1.5px solid ${invertedColor};
      }

      .next-button {
        border-top: 1.5px solid ${invertedColor};
        border-right: 1.5px solid ${invertedColor};
      }

      .post-line {
        display: inline-block;
        line-height: 160%;
        border-top: 1.5px solid ${invertedColor};
      }

      .hamburger,
      .hamburger-mobile {
        background-color: ${invertedColor};
        box-shadow: 0 7px 0 ${invertedColor}, 0 14px 0 ${invertedColor};
      }

      .category-container {
        color: ${invertedColor};
        background-color: ${backgroundColor};
        border: 1px solid ${invertedColor};
      }

      p::selection,
      span::selection {
        color: ${invertedColor};
        background-color: ${invertedColor};
      }

      .underline {
        text-decoration-color: ${invertedColor};
      }

      .footer-line-mobile {
        background-color: ${invertedColor};
      }

      .prev-post,
      .next-post {
        border-color: ${invertedColor};
        background-color: ${defaultColor};
      }
      .prev-post-title,
      .next-post-title {
        text-decoration-color: ${invertedColor};
      }

      .header-title {
        color: ${invertedColor};
      }

      .mode-button {
        color: ${invertedColor};
      }

      header {
        background-color: ${backgroundColor};
      }

      .create-date-mobile {
        color: ${invertedColor};
      }

      .highlighted-text {
        color: ${defaultColor};
        background-color: ${invertedColor};
      }
    `;
  }}
`;

export default GlobalStyle;
