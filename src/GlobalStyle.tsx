import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  backgroundColor: string;
  invertedColor: string;
  textColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { backgroundColor, invertedColor, textColor } = theme;
    return css`
      :root {
        --background-color: ${backgroundColor};
        --text-color: ${textColor};
        --inverted-color: ${invertedColor};
      }

      .post-line {
        display: inline-block;
        line-height: 160%;
        border-top: 1.5px solid ${textColor};
      }

      .hamburger,
      .hamburger-mobile {
        background-color: ${textColor};
        box-shadow: 0 7px 0 ${textColor}, 0 14px 0 ${textColor};
      }

      p::selection,
      span::selection {
        color: ${textColor};
        background-color: ${textColor};
      }

      .underline {
        text-decoration-color: ${textColor};
      }

      .footer-line-mobile {
        background-color: ${textColor};
      }

      .prev-post,
      .next-post {
        border-color: ${textColor};
        background-color: ${invertedColor};
      }

      .prev-post-title,
      .next-post-title {
        text-decoration-color: ${textColor};
      }

      .highlighted-text {
        color: ${invertedColor};
        background-color: ${textColor};
      }
    `;
  }}
`;

export default GlobalStyle;
