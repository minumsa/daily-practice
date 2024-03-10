import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  backgroundColor: string;
  invertedColor: string;
  defaultColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { backgroundColor, invertedColor, defaultColor } = theme;
    return css`
      body,
      header {
        background-color: ${backgroundColor};
      }

      body {
        color: ${defaultColor};
      }

      .marker {
        background-color: ${defaultColor};
      }

      .list-text-wrapper,
      .list-button {
        border: 1px solid ${defaultColor};
      }

      .list-text-wrapper:hover {
        color: ${invertedColor};
        background-color: ${defaultColor};
      }

      .prev-button,
      .next-button {
        border-top: 1.5px solid ${defaultColor};
        border-right: 1.5px solid ${defaultColor};
      }

      .post-line {
        display: inline-block;
        line-height: 160%;
        border-top: 1.5px solid ${defaultColor};
      }

      .hamburger,
      .hamburger-mobile {
        background-color: ${defaultColor};
        box-shadow: 0 7px 0 ${defaultColor}, 0 14px 0 ${defaultColor};
      }

      .category-container {
        background-color: ${backgroundColor};
        border: 1px solid ${defaultColor};
      }

      p::selection,
      span::selection {
        color: ${defaultColor};
        background-color: ${defaultColor};
      }

      .underline {
        text-decoration-color: ${defaultColor};
      }

      .footer-line-mobile {
        background-color: ${defaultColor};
      }

      .prev-post,
      .next-post {
        border-color: ${defaultColor};
        background-color: ${invertedColor};
      }

      .prev-post-title,
      .next-post-title {
        text-decoration-color: ${defaultColor};
      }

      .highlighted-text {
        color: ${invertedColor};
        background-color: ${defaultColor};
      }
    `;
  }}
`;

export default GlobalStyle;
