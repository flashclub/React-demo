import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "../style/bottom.scss";

export default function BottomTab(props) {
  console.log(props);
  const [whichOne, setWhichOne] = useState(0)
  let history = useHistory();
  function shiftPage(path,num) {
    history.push(path);
    setWhichOne(num)
  }
  return (
    <div className="bottom-wrap">
      <div
        className={whichOne === 0 && "checked"}
        onClick={() => shiftPage("/wxindex",0)}
      >
        微信
      </div>
      <div
        className={whichOne === 1 && "checked"}
        onClick={() => shiftPage("/wxcontacts",1)}
      >
        通讯录
      </div>
      <div
        className={whichOne === 2 && "checked"}
        onClick={() => shiftPage("/wxfindpage",2)}
      >
        发现
      </div>
      <div
        className={whichOne === 3 && "checked"}
        onClick={() => shiftPage("/wxmypage",3)}
      >
        我的
      </div>
    </div>
  );
}
