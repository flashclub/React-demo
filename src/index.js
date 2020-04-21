import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
// import { useHistory } from "react-router-dom";

import "./style/index.scss";
import ReactDOM from "react-dom";
import Tictactoe from "./components/tictactoe.js";
import DragDiv from "./components/dragDiv.jsx";
import LearnState from "./components/learnDemo.js";
import { AddNumber } from "./components/addNumber.js";
import Nav1 from "./components/nav1.jsx";
import WxIndex from "./program/wx/wxIndex.js";
import WxChat from "./program/wx/wxChat.js";
import WxContacts from "./program/wx/wxContacts.js";
import WxFindpage from "./program/wx/wxFindpage.js";
import WxMypage from "./program/wx/wxMypage.js";
import WxChatdetails from "./program/wx/wxChatdetails.js";
import WxBottomtab from "./program/wx/wxBottomtab.js";
function IndexPage() {
  let history = useHistory();
  return (
    <div className="index-page">
      <h1>首页</h1>
      <div onClick={() => history.push("/tictactoe")}>井字棋</div>
      <div onClick={() => history.push("/wxchatpage")}>仿微信</div>
      <div onClick={() => history.push("/dragdiv")}>拖拽div</div>
      <div onClick={() => history.push("/nav1")}>导航1</div>
    </div>
  );
}
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/tictactoe" component={Tictactoe} />
      <Route path="/wxchatpage">
        <WxChat />
        <WxBottomtab />
      </Route>
      <Route path="/dragdiv">
        <DragDiv />
      </Route>
      <Route path="/nav1">
        <Nav1 />
      </Route>
      <Route path="/setstate">
        <LearnState />
      </Route>
      <Route path="/addnumber">
        <AddNumber />
      </Route>
      <Route path="/wxcontacts">
        <WxContacts />
        <WxBottomtab />
      </Route>
      <Route path="/wxfindpage">
        <WxFindpage />
        <WxBottomtab />
      </Route>
      <Route path="/wxchatdetails">
        <WxChatdetails />
      </Route>
      <Route path="/wxmypage">
        <WxMypage />
        <WxBottomtab />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
