import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import "./index.css";
import { Div } from "./components/tictactoe.js";
import LearnState from "./components/learnDemo.js";
import { AddNumber } from "./components/addNumber.js";
function IndexPage() {
  return (
    <div>
      <Link to="/">首页</Link>
      <br />
      <Link to="/setstate">setState</Link>
      <br />
      <Link to="/tictactoe">井字棋</Link>
      <br />
      <Link to="/addnumber">++</Link>
    </div>
  );
}
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/tictactoe">
        <Div />
      </Route>
      <Route path="/setstate">
        <LearnState />
      </Route>
      <Route path="/addnumber">
        <AddNumber />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
