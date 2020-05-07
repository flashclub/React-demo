import React from "react";
import "../style/index.scss";
import imgUrl from '../static/img/bg.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
export default function IndexPage() {
  let history = useHistory();
  return (
    <div className="index-page">
      <h1>首页</h1>
      <div onClick={() => history.push("/tictactoe")}>井字棋</div>
      <div onClick={() => history.push("/wxchatpage")}>仿微信</div>
      <div onClick={() => history.push("/dragdiv")}>拖拽div</div>
      <div onClick={() => history.push("/nav1")}>导航1</div>
      <img src={imgUrl} className='hide' alt="" />
    </div>
  );
}
