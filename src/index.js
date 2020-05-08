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

import "./style/root.scss";
import ReactDOM from "react-dom";
import IndexPage from "./pages/indexpage.js";
import Tictactoe from "./pages/tictactoe.js";
import DragDiv from "./pages/dragDiv.js";
import Thermos from "./pages/thermos.js";
import WxChat from "./pages/wx/wxChat.js";
import Navigator from "./pages/navigator/index.js";
import WxContacts from "./pages/wx/wxContacts.js";
import WxFindpage from "./pages/wx/wxFindpage.js";
import WxMypage from "./pages/wx/wxMypage.js";
import WxChatdetails from "./pages/wx/wxChatdetails.js";
import WxBottomtab from "./pages/wx/wxBottomtab.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/tictactoe" component={Tictactoe} />
      <Route path="/thermos" component={Thermos} />
      <Route path="/wxchatpage">
        <WxChat />
        <WxBottomtab />
      </Route>
      <Route path="/dragdiv">
        <DragDiv />
      </Route>
      <Route path="/nav1" component={Navigator} />
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
