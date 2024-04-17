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

      html,
      body {
        background-color: ${backgroundColor};
      }

      p::selection,
      span::selection {
        color: ${textColor};
        background-color: ${textColor};
      }

      .underline {
        text-decoration-color: ${textColor};
      }

      .highlight {
        color: ${invertedColor};
        background-color: ${textColor};
      }

      .post-line {
        display: inline-block;
        line-height: 160%;
        border-top: 1.5px solid ${textColor};
      }
    `;
  }}
`;

export default GlobalStyle;
