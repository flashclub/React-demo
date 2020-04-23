import React from "react";
import "./contactItem.scss";
import Img from "./imgBox.jsx";
export default function ContactItem() {
  return (
    <div className="contact-item">
      <div className="contact-item-content">
        <Img size="40" />
        <div className="contact-item-nickname">新的朋友</div>
      </div>
      <div className="contact-item-content">
        <Img size="40" />
        <div className="contact-item-nickname">群聊</div>
      </div>
      <div className="contact-item-content">
        <Img size="40" />
        <div className="contact-item-nickname">标签</div>
      </div>
      <div className="contact-item-content">
        <Img size="40" />
        <div className="contact-item-nickname">公众号</div>
      </div>
      <div className="star-friend">
        <p>星标朋友</p>
      </div>
    </div>
  );
}
