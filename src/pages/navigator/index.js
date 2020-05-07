import React, { useState } from "react";
import "../../style/nav1.scss";
import PickItem from "./components/shiftItem.js";
let platformUrl = {
  zhihu: "https://www.zhihu.com/search?type=content&q=",
  sifou: "https://segmentfault.com/search?q=",
  juejin: function(value){
    return `https://juejin.im/search?query=${value}&type=all`;
  },
};
export default function App() {
  let initInputValue = "";
  const [inputValue, setInputValue] = useState(initInputValue);
  const [target, setTarget] = useState('zhihu');

  function getInputValue(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  function search(params) {
    if (typeof platformUrl[target] === 'string') {
      window.location.href = platformUrl[target] + inputValue;
    } else {
      window.location.href = platformUrl[target](inputValue);
    }
  }
  function clickPlatform(target) {
    setTarget(target)
  }
  return (
    <div className="nav1">
      <div className="bg-wrap"></div>
      <div className="content">
        <header className="header">
          <p>前端导航</p>
        </header>
        <PickItem clickFn = {clickPlatform}/>
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
