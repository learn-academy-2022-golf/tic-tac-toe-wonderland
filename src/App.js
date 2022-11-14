import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  const emptyArray = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(emptyArray);

  const [user, setUser] = useState("X")

  const gamePlay = (index) => {
    let updatedSquares = [...squares];

    if(user==="X"){
    updatedSquares[index] = "X"}
    setSquares(updatedSquares)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return <Square value={value} gamePlay={gamePlay} key={index} index={index}/>
      })}
      </div>
    </>
  );
};

export default App;
