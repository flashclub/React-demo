import React, { useState, useEffect, useContext } from "react";
import BottomTab from "./wxBottomtab";
import Chat from "./wxChat.js";
import ChatDetails from "./wxChatdetails.js";
import FindPage from "./wxFindpage.js";
import Contacts from "./wxContacts.js";
import "../style/root.scss";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  let [showBottom, setShowBottom] = useState(true);
  let [myRouter, setMyRouter] = useState("/wxindex");
  // 使用context：1，给定一个初始值，并记录回参
  const ShiftPageContext = React.createContext("/wxindex");
  function ShiftContent() {
    // 3，使用这个context，就可以通过改变myrouter得到想要的内容了
    const path = useContext(ShiftPageContext);
    // console.log(path);
    if (path === "/wxindex") {
      return <Chat parentOnClick={bottomClick} />;
      // return <ChatDetails />;
    } else if (path === "/chatdetails") {
      // setShowBottom(false)
      return <ChatDetails />;
    } else if (path === "/address") {
      return <Contacts />;
    } else {
      return <FindPage />;
    }
  }
  function bottomClick(route) {
    // 修改route
    // history.push(route)
    setMyRouter(route);
  }
  return (
    <div className="wxindex-wrap">
      {/* 2，嵌套刚刚返回的context实例，并赋值，拿到myRouter*/}
      <ShiftPageContext.Provider value={myRouter}>
        <ShiftContent />
      </ShiftPageContext.Provider>
      {showBottom && <BottomTab parentOnClick={bottomClick} />}
    </div>
  );
}
export default function WxIndex(params) {
  return <Chat />;
}
