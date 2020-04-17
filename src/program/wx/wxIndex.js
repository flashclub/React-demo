import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BottomTab from "./wxbottomtab";
import Content from "./wxcontent.js";
import FindPage from "./wxfindpage.js";
import "../style/index.scss";

function ShiftPage(data) {
  if (data === "/index") {
    return <Content />;
  } else {
    return <FindPage />;
  }
}
function bottomClick(path) {
  // path: /index /find
}
export default function WxIndex(params) {
  return (
    <div className="wxindex-wrap">
      <ShiftPage />
      <BottomTab onClicks={bottomClick} />
    </div>
  );
}
