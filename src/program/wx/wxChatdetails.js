import React, { useState, useEffect } from "react";
import InputWrap from "./component/wxBottomInput.jsx";
import Img from "./component/imgBox.jsx";
import "../style/chatdetails.scss";
export default function ContentDetails(params) {
  let initPerson = { a: "", b: "" };
  let initRole = "0";
  // let [person, setPerson] = useState(initPerson);
  // let [ownRole,setOwnRole] = useState(initRole)
  // Object.assign
  // setPerson(Object.assign(person,{a:'lili',b:'lala'}))
  // setOwnRole('b')
  let initChatList = [
    {
      a: ["我通过了你的朋友验证请求，现在我们可以开始聊天了", "你好"]
    },
    {
      b: ["你好", "你是谁"]
    },
    {
      a: [
        "我们不定期会推出一些老客户免费试新，或者半价的活动，亲可以留我在您的朋友圈偶尔关注一下哦不会发广告的"
      ]
    },
    {
      b: ["儿子？"]
    },
    {
      a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
    },
    {
      b: ["？？？"]
    },
    {
      a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
    },
    {
      b: ["？？？"]
    },
    {
      a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
    }
  ];
  const [chatList, setChatList] = useState(initChatList);
  function clickSend(data) {
    // console.log('点击了 发送',data);
    setChatList(chatList.concat({ b: [data] }));
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  useEffect(() => {
    getElementsByClassName("chat-details").scrollTop = getElementsByClassName(
      "chat-wrap"
    ).clientHeight;
    console.log("数据改好了");
  }, [chatList]);
  function getElementsByClassName(className) {
    return document.getElementsByClassName(className)[0];
  }
  function clickInput(params) {
    console.log("点击 input", getElementsByClassName("chat-wrap").clientHeight);
    setTimeout(() => {
      getElementsByClassName("chat-details").scrollTop =
        getElementsByClassName("chat-wrap").offsetHeight -
        getElementsByClassName("chat-details").offsetHeight;
    }, 80);
  }
  function getChatList() {
    return [
      {
        a: ["我通过了你的好友请求", "你好"]
      },
      {
        b: ["你好", "你是谁"]
      },
      {
        a: ["你猜猜呢额"]
      },
      {
        b: ["儿子？"]
      },
      {
        b: ["？？？"]
      },
      {
        a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
      },
      {
        b: ["？？？"]
      },
      {
        a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
      },
      {
        b: ["？？？"]
      },
      {
        a: ["你在无中生有暗度陈仓凭空捏造凭空想象，我是你爹"]
      }
    ];
  }
  return (
    <div className="chat-details">
      <div className="chat-wrap">
        {chatList.map(items =>
          Object.values(items)[0].map(item => (
            <div key={item + items} className="detail-content">
              <div className={Object.keys(items)[0] === "a" ? "left" : "right"}>
                {/* <div className="img"></div> */}
                <Img />
                <div className="nameandwords">
                  <div className="nick-name">lili</div>
                  <div
                    className={
                      Object.keys(items)[0] === "b"
                        ? "own-chat-words"
                        : "chat-words"
                    }
                  >
                    {item}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <InputWrap detailClickInput={clickInput} detailOnLlick={clickSend} />
      </div>
    </div>
  );
}
