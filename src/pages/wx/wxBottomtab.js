import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../style/wx/bottom.scss";

export default function BottomTab(props) {
  console.log(props);
  const [whichOne, setWhichOne] = useState(0);
  let history = useHistory();
  function shiftPage(path, num) {
    history.push(path);
    setWhichOne(num);
  }
  return (
    <div className="bottom-wrap">
      <div
        className={whichOne === 0 ? "checked" : undefined}
        onClick={() => shiftPage("/wxchatpage", 0)}
      >
        微信
      </div>
      <div
        className={whichOne === 1 ? "checked" : undefined}
        onClick={() => shiftPage("/wxcontacts", 1)}
      >
        通讯录
      </div>
      <div
        className={whichOne === 2 ? "checked" : undefined}
        onClick={() => shiftPage("/wxfindpage", 2)}
      >
        发现
      </div>
      <div
        className={whichOne === 3 ? "checked" : undefined}
        onClick={() => shiftPage("/wxmypage", 3)}
      >
        我的
      </div>
    </div>
  );
}
