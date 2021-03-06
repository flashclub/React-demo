import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Img from "./component/imgBox.jsx";
import "../../style/wx/chat.scss";

export default function ContentP(props) {
  const initialValue = [
    {
      id: null,
      img: "",
      nickName: "",
      lastChatHistory: "",
      time: ""
    }
  ];
  const allowedState = [
    {
      id: 1,
      img: "",
      nickName: "可点击",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 2,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 3,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 4,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 5,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 6,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 7,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 8,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      id: 9,
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    }
  ];
  const [indexList, setIndexList] = useState(initialValue);
  useEffect(() => {
    setIndexList(allowedState);
  }, []);
  let history = useHistory();

  console.log(indexList);
  function jumpDetails() {
    history.push("/wxchatdetails");
  }
  return (
    <div className="content-wrap">
      {indexList.map((items, index) => {
        return (
          <div
            className="content-item"
            onClick={() => jumpDetails()}
            key={items.id}
          >
            {/* <div className="content-image"></div> */}
            <Img size="50" />
            <div className="content-nameandchat">
              <p className="nick-name">{items.nickName}</p>
              <p className="last-chat-history">{items.lastChatHistory}</p>
            </div>
            <div className="content-time">{items.time}</div>
          </div>
        );
      })}
    </div>
  );
}
