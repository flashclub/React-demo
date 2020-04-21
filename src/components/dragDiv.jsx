import React, { useState } from "react";
import "../style/dragdiv.scss";
export default function App() {
  let initLeftTop = { top: "100px", left: "100px" };
  const [mouseXY, setMouseXY] = useState([0, 0]);
  const [leftTop, setLeftTop] = useState(initLeftTop);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [text, setText] = useState("");
  const [canMove, setCanMove] = useState(true);
  function mouseDown(event) {
    let nativeEvent = event.nativeEvent;
    setShowTips(true);
    setMouseXY([nativeEvent.offsetX, nativeEvent.offsetY]);
    setIsMouseDown(true);
  }
  function wrapMouseMove(event) {
    let nativeEvent = event.nativeEvent;
    if (isMouseDown) {
      let { x, y } = nativeEvent;
      moveDiv({ x: x - mouseXY[0], y: y - mouseXY[1] });
    }
  }
  function touchMove(e) {
    setCanMove(false);
    let nativeEvent = e.nativeEvent.touches[0];
    if (isMouseDown) {
      let { clientX, clientY } = nativeEvent;
      moveDiv({ x: clientX, y: clientY });
    }
  }
  function touchDown(e) {
    let nativeEvent = e.nativeEvent.touches[0];
    setShowTips(true);
    setMouseXY([nativeEvent.clientX, nativeEvent.clientY]);
    setIsMouseDown(true);
  }
  function moveDiv(event) {
    setText(` 左${Math.floor(event.x)} 上${Math.floor(event.y)}`);
    setLeftTop({ top: event.y - 50 + "px", left: event.x - 50 + "px" });
  }
  return (
    <div
      className="dragdiv-wrap"
      onMouseMove={wrapMouseMove}
      onTouchMove={touchMove}
      onTouchEnd={() => setIsMouseDown(false)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <div
        className="dragdiv"
        onMouseDown={mouseDown}
        onTouchMove={touchDown}
        style={leftTop}
      ></div>
      <div className="tips-wrap">
        <p className={showTips ? " tips show-tips" : "tips"}>
          1. 拖动div 支持移动端和PC端 {text}
        </p>
        {/* <p className="show-tips">1. 拖动div</p> */}
      </div>
    </div>
  );
}
