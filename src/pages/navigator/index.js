import React, { useState } from "react";
import "../../style/nav1.scss";
import PickItem from "./components/shiftItem.js";
export default function App() {
  let initInputValue = "";
  const [inputValue, setInputValue] = useState(initInputValue);
  function getInputValue(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  function search(params) {
    // 知乎
    window.location.href = `https://www.zhihu.com/search?type=content&q=${inputValue}`;
    // 思否
    window.location.href = `https://segmentfault.com/search?q=${inputValue}`;
    // 掘金
    window.location.href = `https://juejin.im/search?query=${inputValue}&type=all`;
  }
  return (
    <div className="nav1">
      <div className="bg-wrap"></div>
      <div className="content">
        <header className="header">
          <p>前端导航</p>
        </header>
        <PickItem />
        <div className="input-wrap">
          <div className="input-content">
            <input
              value={inputValue}
              onChange={getInputValue}
              placeholder="输入关键字"
            />
            <span className="nav-search" onClick={search}>
              搜索
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
