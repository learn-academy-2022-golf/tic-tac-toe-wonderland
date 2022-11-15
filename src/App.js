import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  const emptyArray = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(emptyArray);

  const [user, setUser] = useState("X");

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(squares[a]);
      if (squares[a] === "X" && squares[b] === "X" && squares[c] === "X") {
        alert(`Congrats! The winner is X`);
      } else if (
        squares[a] === "O" &&
        squares[b] === "O" &&
        squares[c] === "O"
      ) {
        alert(`Congrats! The winner is O`);
      }
    }
  };

  const gamePlay = (index) => {
    let updatedSquares = [...squares];

    if (updatedSquares[index] !== "") {
      alert("please choose another box");
    } else if (user === "X") {
      updatedSquares[index] = "X";
      setUser("O");
    } else if (user === "O") {
      updatedSquares[index] = "O";
      setUser("X");
    }
    setSquares(updatedSquares);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              gamePlay={gamePlay}
              key={index}
              index={index}
              checkWinner={checkWinner}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
