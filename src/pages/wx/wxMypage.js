import React, { useState, useEffect } from "react";
import ImgBox from "./component/imgBox.jsx";
import "../../style/wx/mypage.scss";

export default function Contacts(params) {
  return (
    <div className="mypage-component">
      <div className="info-box">img nick-name</div>
      <div className="mypage-item mt-mb">
        <ImgBox />
        <p>支付</p>
      </div>
      <div className="mypage-item">
        <ImgBox />
        <p>收藏</p>
      </div>
      <div className="mypage-item">
        <ImgBox />
        <p>相册</p>
      </div>
      <div className="mypage-item">
        <ImgBox />
        <p>卡包</p>
      </div>
      <div className="mypage-item mb">
        <ImgBox />
        <p>表情</p>
      </div>
      <div className="mypage-item">
        <ImgBox />
        <p>设置</p>
      </div>
    </div>
  );
}
