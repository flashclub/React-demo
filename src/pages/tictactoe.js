import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/tictactoe.scss";
const initMap = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
export default function Div() {
  let [mapArray, setMapArray] = useState(initMap);
  let [isWinTarget, setIsWinTarget] = useState(false);
  let [n, setN] = useState(0);
  let [whichWin, setWhichWinTarget] = useState(null);
  function onClickFns(data1, data2, ev) {
    let newMapArray = JSON.parse(JSON.stringify(mapArray));
    if (newMapArray[data1][data2]) return alert("不可重复点击");
    newMapArray[data1][data2] = n % 2 ? "x" : "o";
    setN(n + 1);
    console.log(newMapArray);
    setMapArray(newMapArray);
    if (isWin(newMapArray)) {
      console.log("win", newMapArray[data1][data2]);
      setWhichWinTarget(newMapArray[data1][data2]+'赢了');
      setIsWinTarget(true);
    }
  }
  function isWin(array) {
    let newArray = [];
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
        array[0][index] === array[1][index] &&
        array[1][index] === array[2][index] &&
        array[2][index] != null
      ) {
        return true;
      }
      if (
        array[0][0] === array[1][1] &&
        array[1][1] === array[2][2] &&
        array[2][2] != null
      ) {
        return true;
      }
      if (
        array[0][2] === array[1][1] &&
        array[1][1] === array[2][0] &&
        array[2][0] != null
      ) {
        return true;
      }
      console.log('element',element);
      newArray.push(...element)
      console.log(newArray);
    }
    let fullTarget = newArray.every((item) => item !== null);
    if (fullTarget) {
      setWhichWinTarget('游戏结束');
      setIsWinTarget(true);
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
                onClickFn={(ev) => onClickFns(row, col, ev)}
                content={item}
              />
            ))}
          </div>
        ))}
        {isWinTarget && (
          <div className="isWin" onClick={closeWrap}>
            <p onClick={clickP}>{whichWin}</p>
          </div>
        )}
      </div>
    );
  }
  function BackIndex() {
    let history = useHistory();
    function handleClick() {
      history.push("/");
    }
    return (
      <div className="back-button" onClick={handleClick}>
        返回
      </div>
    );
  }

  return (
    <div className="mapWrap">
      <h1>井字棋游戏</h1>
      <BackIndex />
      <ShowMap />
    </div>
  );
}
