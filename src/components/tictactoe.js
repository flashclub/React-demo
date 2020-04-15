import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// function Chessboard() {
const initMap = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
export function Div() {
  let [mapArray, setMapArray] = useState(initMap);
  let [isWinTarget, setIsWinTarget] = useState(false);
  let [n, setN] = useState(0);
  let [whichWin, setWhichWinTarget] = useState(null);
  function onClickFns(data1, data2) {
    console.log("点击了", data1, data2);
    let newMapArray = JSON.parse(JSON.stringify(mapArray));
    // let newMapArray = mapArray.concat([]);
    if (newMapArray[data1][data2]) return alert("不可重复点击");

    newMapArray[data1][data2] = n % 2 ? "x" : "o";
    setN(n + 1);
    console.log(newMapArray);
    setMapArray(newMapArray);
    if (isWin(newMapArray)) {
      console.log("win", newMapArray[data1][data2]);
      setWhichWinTarget(newMapArray[data1][data2]);
      setIsWinTarget(true);
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
        console.log("error 2");
        return true;
      }
      if (
        array[0][index] === array[1][index] &&
        array[1][index] === array[2][index] &&
        array[2][index] != null
      ) {
        console.log("error x");

        return true;
      }
      if (
        array[0][0] === array[1][1] &&
        array[1][1] === array[2][2] &&
        array[2][2] != null
      ) {
        console.log("error 3");
        return true;
      }
      if (
        array[0][2] === array[1][1] &&
        array[1][1] === array[2][0] &&
        array[2][0] != null
      ) {
        console.log("error 4");
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
  function closeWrap() {
    console.log("关闭赢了的wrap");
    setIsWinTarget(false);
    setMapArray(initMap);
  }
  function clickP(event) {
    event.stopPropagation();
  }
  function ShowMap() {
    return (
      <div className="cellMap">
        {mapArray.map((items, row) => (
          <div className="row" key={row}>
            {items.map((item, col) => (
              <Cell
                key={row + col}
                onClickFn={() => onClickFns(row, col)}
                content={item}
              />
            ))}
          </div>
        ))}
        {isWinTarget && (
          <div className="isWin" onClick={closeWrap}>
            <p onClick={clickP}>{whichWin} 赢了</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="mapWrap">
      <h1>井字棋游戏</h1> <ShowMap />
    </div>
  );
}
// ReactDOM.render(<Div />, document.getElementById("root"));
