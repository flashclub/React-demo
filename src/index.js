import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import "./index.css";
import { Div } from "./components/tictactoe.js";

ReactDOM.render(
  <Router>
    <div>
      <Link to="/">首页</Link>
      <br />
      <Link to="/tictactoe">井字棋</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <h1>首页</h1>
      </Route>
      <Route path="/tictactoe">
        <Div />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
