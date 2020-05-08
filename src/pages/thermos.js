import React from 'react'
import "../style/thermos.scss";
import thermosReal from "../static/img/thermos-real.jpeg";
export default function App(){
  // return <div>111</div>
  return (
    <div className="cupWrap">
      <div className='img-box'></div>
      <div id="cup">
        {/* 杯盖  */}
        <div className="cupTop">
          {/* 杯子顶部  */}
          <div className="div1"></div>
          {/* 三个点  */}
          <div className="dot">
            <div className="dot1"></div>
            <div className="dot1"></div>
            <div className="dot1"></div>
          </div>
        </div>
        {/* 杯子本体  */}
        <div id="cupBody">
          {/* 杯子颈部  */}
          <div className="div2">
            <div className="div3"></div>
            <div className="div3 div4"></div>
          </div>
          {/* 杯子身体  */}
          <div id="mainBody">
            <div className="div5"></div>
            <div className="div5 div6"></div>
            <div id="txt">THERMOS</div>
          </div>
          <div className="line0"></div>
          <div className="line0 line">底部的线</div>
        </div>
      </div>
    </div>
  );

}