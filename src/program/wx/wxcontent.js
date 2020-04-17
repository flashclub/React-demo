import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../style/content.scss";

function ContentP() {
  const initialValue = [
    {
      img: "",
      nickName: "",
      lastChatHistory: "",
      time: ""
    }
  ];
  const allowedState = [
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
      img: "",
      nickName: "用户名，",
      lastChatHistory: "最后一条聊天记录",
      time: `${new Date()
        .getHours()
        .toString()} : ${new Date().getMinutes().toString()}`
    },
    {
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
  console.log(indexList);

  return (
    <div className="content-wrap">
      {indexList.map(items => {
        return (
          <div className="content-item" key={items.nickName}>
            <div className="content-image"></div>
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
export default function Content(params) {
  return (
    <div className="content-component">
      <ContentP />
    </div>
  );
}
