import React from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import "../style/bottom.scss";

export default function BottomTab(props) {
  console.log(props);

  let history = useHistory();
  function shiftPage(path) {
    history.push(path);
  }
  return (
    <div className="bottom-wrap">
      <div onClick={() => props.onClicks("/")}>微信</div>
      <div onClick={() => props.onClicks("/address")}>通讯录</div>
      <div onClick={() => props.onClicks("/find")}>发现</div>
      <div onClick={() => props.onClicks("/own")}>我的</div>
    </div>
  );
}
