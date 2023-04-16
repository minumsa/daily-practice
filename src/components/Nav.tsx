import React from "react";
import Menu from "./Nav/Menu";
import DarkMode from "./Nav/DarkMode";
import "./Nav.css";

// Child: React.FC or Child: FC
const Nav = ({ page, info, dark }: { page: React.ReactNode; info: any; dark: any }) => {
  return (
    <div className="nav-container">
      <div className="middle">
        <Menu />
        <div className="info-container">{info}</div>
        <DarkMode dark={dark} />
      </div>
      <div className="blank"></div>
      <div
        className="page-number"
        onClick={() => {
          colorChange();
        }}
      >
        {page}
      </div>
    </div>
  );
};

function colorChange() {
  var color = ["#E05DFF", "#00FF55", "#00FFB1", "#FF5646", "#2F8FFF", "#2CFFFF"];

  var num = Math.floor(Math.random() * color.length);
  //Math.random()이용하여 배열의 데이터 개수(length) 이용하여 배열의 인덱스, 변수 num이 랜덤으로 나옴
  // var bodyTag = document.getElementById("___gatsby");
  // bodyTag.style.backgroundColor = color[num];
  document.body.style.backgroundColor = color[num];
  //body의 css 배경색상을 배열 데이터의 num번째 컬러로 선택
}

export default Nav;
