import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function Chessboard() {
function Div() {
  let [mapArray, setMapArray] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  let [n, setN] = useState(0);
  function onClickFns(data1, data2) {
    console.log("点击了", data1, data2);
    let newMapArray = JSON.parse(JSON.stringify(mapArray));
    newMapArray[data1][data2] = n % 2 ? "x" : "o";
    setN(n + 1);
    console.log(newMapArray);
    setMapArray(newMapArray);
    if (isWin(newMapArray)) {
      console.log("win");
      // alert("赢了！");
      // return;
    }
  }
  function isWin(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (
        element[0] === element[1] &&
        element[1] === element[2] &&
        element[2] !== null
      ) {
        return true;
      }
      if (
        array[index][0] === array[index][1] &&
        array[index][1] === array[index][2] &&
        array[index][2] != null
      ) {
        return true;
      }
      if (
        array[0][0] === array[1][1] &&
        array[1][1] === array[2][2] &&
        array[index][2] != null
      ) {
        return true;
      }
      if (
        array[0][2] === array[1][1] &&
        array[1][1] === array[2][0] &&
        array[index][2] != null
      ) {
        return true;
      }
    }
  }
  function Cell(props) {
    return (
      <div className="cell" onClick={props.onClickFn}>
        {props.content}
      </div>
    );
  }
  function ShowMap() {
    return (
      <div>
        {mapArray.map((items, row) => (
          <div className="row">
            {items.map((item, col) => (
              <Cell onClickFn={() => onClickFns(row, col)} content={item} />
            ))}
          </div>
        ))}
        <div></div>
      </div>
    );
  }
  return (
    <div>
      <ShowMap />
    </div>
  );
}
ReactDOM.render(<Div />, document.getElementById("root"));
