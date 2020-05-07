import React, { useState } from "react";

import "./shiftItem.scss";
const platformArray = [
  {
    text:'知乎',
    target:'zhihu'
  },
  {
    text:'掘金',
    target:'juejin'
  },
  {
    text:'思否',
    target:'sifou'
  },
]
function App(props) {
  const initPlatform = 'zhihu'
  const [platform, setPlatform] = useState(initPlatform);
  function changePlatform(event){
    let target = event.target.getAttribute("target");
    setPlatform(target);
    props.clickFn(target)
  }
  return (
    <div className="shiftItem" onClick={changePlatform}>
      {platformArray.map((item) => {
        return (
          <button key={item.target} target={item.target} className={platform===item.target?'choose':''}>
            {item.text}
          </button>
        );
      })}
    </div>
  );
}
export default App;
