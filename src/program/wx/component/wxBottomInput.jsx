import React, { useState } from "react";
import '../../style/bottominput.scss'
export default function App(prop){
  let defaultValue = ''
  const [inputValue, setinputValue] = useState(defaultValue);
  const [enablePluaFlag, setEnablePluaFlag] = useState(true);
  function valueChange(event) {
    console.log(event,event.target.value);
    let value = event.target.value;
    shiftPlusOrSend(value)
  }
  function shiftPlusOrSend(value = "") {
    // console.log('触发 plus or send');
    setinputValue(value);
    if (value.length >= 1) return setEnablePluaFlag(false);
    return setEnablePluaFlag(true);
  }
  return (
    <div className="bottom-input-wrap">
      <div className="bottom-input-content">
        <div>语音</div>
        <input
          className="input-content"
          value={inputValue}
          onChange={valueChange}
          onClick={()=>prop.detailClickInput()}
        ></input>
        <div>表情</div>
        {enablePluaFlag && <div>加号</div>}
        {!enablePluaFlag && (
          <div onClick={() => prop.detailOnLlick(inputValue).then(shiftPlusOrSend)}>发送</div>
        )}
      </div>
    </div>
  );
}