import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import Top from "./Mobile/MobileHeader";
import Nav from "./Nav";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
  page?: React.ReactNode;
  info?: React.ReactNode;
};

// void는 JavaScript에서 데이터 타입이 없는 값을 반환할 때 사용되는 예약어다. 이 코드에서 void는 toggleTheme 함수가 반환하는 값이 없음을 나타낸다. toggleTheme 함수는 선택적으로 문자열 타입의 매개변수를 받을 수 있지만, 반환값은 없다. 따라서 void 예약어를 사용하여 명시적으로 반환값이 없음을 나타내고 있다.
interface ThemeProps {
  theme: string | null;
  toggleTheme: (theme?: string) => void;
}

const Layout: React.FC<Props> = ({ children, page, info }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeProps) => {
        if (theme == null) {
          return null;
        }
        return (
          <LayoutInternal page={page} info={info} theme={theme} toggleTheme={toggleTheme}>
            {" "}
            {children}{" "}
          </LayoutInternal>
        );
      }}
    </ThemeToggler>
  );
};

type LayoutInternalProps = {
  children: React.ReactNode;
  page?: React.ReactNode;
  info?: React.ReactNode;
  theme: string | null;
  toggleTheme: (theme?: string) => void;
};

const LayoutInternal: React.FC<LayoutInternalProps> = ({
  children,
  page,
  info,
  theme,
  toggleTheme,
}) => {
  // 현재 스크롤 위치를 저장하는 state를 선언한다.
  const [position, setPosition] = useState(0);
  // 상단바가 보여질지 숨겨질지를 결정하는 state를 선언한다. true면 보이고 false면 숨긴다.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 스크롤 이벤트를 처리하는 함수를 선언한다.
    const handleScroll = () => {
      // 현재 스크롤 위치를 구한다.
      let moving = window.pageYOffset;

      // 현재 스크롤 위치와 이전 스크롤 위치를 비교해 visible state를 업데이트한다.
      setVisible(position > moving);
      // 현재 스크롤 위치를 position state에 저장한다.
      setPosition(moving);
    };

    // 스크롤 이벤트를 등록한다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 unmount될 때 등록한 이벤트를 제거한다.
    // position state가 업데이트될 때마다 useEffect가 실행된다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  // visible 값에 따라 클래스 이름을 지정한다.
  const cls = visible ? "visible" : "hidden";
  // theme 변수의 값이 "dark"와 일치하는지 여부를 판단해 isDarkMode 변수에 불리언 형태로 할당한다. 즉, 현재 앱의 테마가 다크 모드인지 아닌지를 나타내는 변수인 isDarkMode를 선언하고, theme 값이 "dark"인 경우 isDarkMode는 true가 되고, 그렇지 않은 경우 false가 됩니다.
  const isDarkMode = theme === "dark";

  return (
    // 다크 모드인 경우 darkTheme을 사용하고, 그렇지 않은 경우 lightTheme을 사용한다.
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        <Top
          header={position > 50 ? cls : "visible"}
          // 클릭 이벤트가 발생하면 toggleTheme 함수를 호출한다. toggleTheme 함수는 인자로 받은 테마 값을 theme 변수에 업데이트한다. 테마 값이 "dark"인 경우 "light"로, "light"인 경우 "dark"로 전환된다. 이렇게 전환된 theme 값은 이후 ThemeProvider의 theme prop으로 전달되어 화면 전체의 테마를 변경한다.
          darkmodeButton={
            <div
              className="mode-button"
              onClick={() => {
                toggleTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {isDarkMode ? "밤" : "낮"}
            </div>
          }
        />
        {children}
        <Nav
          page={page}
          info={info}
          dark={
            <div
              className="mode-button"
              onClick={() => {
                toggleTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {isDarkMode ? "밤" : "낮"}
            </div>
          }
        />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
