import React, { useState, useEffect } from "react";
import ImgBox from "./component/imgBox.jsx";

import "../../style/wx/findpage.scss";

function FindItem() {
  return (
    <div className="findpage-wrap">
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind">
          <p>朋友圈</p>
          <div>
            <img />
          </div>
        </div>
      </div>
      <div className="findpage-item mt-mb">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind">
          <p>视频号</p>
          <div>
            <img />
          </div>
        </div>
      </div>
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind border-bottom">
          <p>扫一扫</p>
          <div>
            <img />
          </div>
        </div>
      </div>
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind">
          <p>摇一摇</p>
          <div>
            <img />
          </div>
        </div>
      </div>
      <div className="findpage-item mt-mb">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind">
          <p>搜一搜</p>
          <div>
            <img />
          </div>
        </div>
      </div>
      <div className="findpage-item mt-mb">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <ImgBox />
          </div>
        </div>
        <div className="findpage-remind">
          <p>小程序</p>
          <div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function FindPage(params) {
  return (
    <div className="findpage-component">
      <FindItem />
    </div>
  );
}
