import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  const emptyArray = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(emptyArray);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map(value => {
        return <Square value={value}/>
      })}
      </div>
    </>
  );
};

export default App;
