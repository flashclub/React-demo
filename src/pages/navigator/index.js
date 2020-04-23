import React, { useState } from "react";
import "../../style/nav1.scss";
export default function App() {
  let initInputValue = "";
  const [inputValue, setInputValue] = useState(initInputValue);
  return (
    <div className="nav1">
      <div className="bg-wrap"></div>
      <div className="content">
        <header className="header">
          <p>前端导航</p>
        </header>
        <div className="input-wrap">
          <div className="input-content">
            <input value={inputValue} placeholder="输入关键字" />
            <span className="nav-search">搜索</span>
          </div>
        </div>
      </div>
    </div>
  );
}
