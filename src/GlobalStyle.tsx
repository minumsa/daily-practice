import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  bgColor: string;
  textColor: string;
  categoryColor: string;
  listBgColor: string;
  opacity: number;
  hamburgerColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { bgColor, textColor, categoryColor, listBgColor, opacity, hamburgerColor } = theme;
    return css`
      body {
        background-color: ${bgColor};
        color: ${textColor};
      }

      .marker {
        background-color: ${textColor};
        opacity: ${opacity};
      }

      // FIXME: 수정 필요
      .list-text:hover {
        border: 1px dashed ${textColor};
        color: #ffffff;
        background-color: #000000;
      }

      .list-text,
      .list-button {
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
        display: inline-block;
        line-height: 160%;
        border-top: 1.5px solid ${textColor};
      }

      .hamburger,
      .hamburger-mobile {
        background-color: ${textColor};
        box-shadow: 0 7px 0 ${textColor}, 0 14px 0 ${textColor};
      }

      .category-container {
        color: ${listBgColor};
        background-color: ${hamburgerColor};
        border-color: ${listBgColor};
      }

      @media (max-width: 550px) {
        .post-line {
          border-top-color: ${textColor};
        }
      }

      p::selection,
      span::selection {
        color: ${categoryColor};
        background-color: ${textColor};
      }

      .date-created,
      .button-container,
      .page-container,
      .title-container,
      .info-container,
      .explanation-container,
      .introduction-container,
      .contact-container,
      .warp-container,
      .line-color,
      .content-text {
        opacity: ${opacity};
      }

      .underline {
        text-decoration-color: ${textColor};
      }

      .footer-line {
        background-color: ${textColor};
        opacity: ${opacity};
      }

      .prev-post,
      .next-post {
        border-color: ${textColor};
        background-color: ${categoryColor};
      }
      .prev-post-title,
      .next-post-title {
        text-decoration-color: ${textColor};
      }

      .header-title {
        color: ${textColor};
        opacity: ${opacity};
      }

      .mode-button {
        color: ${textColor};
        opacity: ${opacity};
      }

      header {
        background-color: ${bgColor};
      }

      .mobile-post-date {
        color: ${textColor};
        opacity: ${opacity};
      }
    `;
  }}
`;

export default GlobalStyle;
