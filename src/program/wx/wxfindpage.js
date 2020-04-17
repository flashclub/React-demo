import React, { useState, useEffect } from "react";
import "../style/findpage.scss";

function FindItem() {
  return (
    <div className="findpage-wrap">
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <img />
          </div>
          <p>朋友圈</p>
        </div>
        <div className="findpage-remind">
          <img />
        </div>
      </div>
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <img />
          </div>
          <p>朋友圈</p>
        </div>
        <div className="findpage-remind">
          <img />
        </div>
      </div>
      <div className="findpage-item">
        <div className="findpage-left-wrap">
          <div className="findpage-icon">
            <img />
          </div>
          <p>朋友圈</p>
        </div>
        <div className="findpage-remind">
          <img />
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
