import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  const emptyArray = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(emptyArray);

  const [user, setUser] = useState("X");

  const [winner, setWinner] = useState("");

  const checkWinner = (array) => {
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
      if (array[a] === "X" && array[b] === "X" && array[c] === "X") {
        setWinner("X is the winner!");
      } else if (array[a] === "O" && array[b] === "O" && array[c] === "O") {
        setWinner("O is the winner!");
      }

    }
  };

  const gamePlay = (index) => {
    checkWinner(squares);
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


  useEffect(() => checkWinner(squares));


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
              // checkWinner={checkWinner}
            />
          );
        })}
        {winner}
      </div>
    </>
  );
};

export default App;
