import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const emptyArray = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(emptyArray);

  const [user1Mark, setuser1Mark] = useState("X");

  const [user2Mark, setuser2Mark] = useState("O");

  const [user, setUser] = useState(user1Mark);

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
    if (array.includes("") === false) {
      setWinner("Tie game! No moves left.");
    }
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        array[a] === user1Mark &&
        array[b] === user1Mark &&
        array[c] === user1Mark
      ) {
        setWinner(`${user1Mark} is the winner!`);
      } else if (
        array[a] === user2Mark &&
        array[b] === user2Mark &&
        array[c] === user2Mark
      ) {
        setWinner(`${user2Mark} is the winner!`);
      }
    }
  };

  const refresh = () => {
    setSquares(emptyArray);
    setUser(user1Mark);
    setWinner("");
  };

  const choose1 = (string) => {
    setuser1Mark(string);
    setUser(string);
  };

  const choose2 = (string) => {
    setuser2Mark(string);
    setUser(string);
  };

  const gamePlay = (index) => {
    let updatedSquares = [...squares];
    if (winner !== "") {
      alert("This game is over! Please click Restart to start a new game.");
    } else if (updatedSquares.includes("") === false) {
      setWinner("Tie game! No moves left.");
    } else if (updatedSquares[index] !== "") {
      alert("Oops! Please choose another box");
    } else if (user === user1Mark) {
      updatedSquares[index] = user1Mark;
      setUser(user2Mark);
      setSquares(updatedSquares);
    } else if (user === user2Mark) {
      updatedSquares[index] = user2Mark;
      setUser(user1Mark);
      setSquares(updatedSquares);
    }
  };

  useEffect(() => checkWinner(squares));

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="choose">
        <div>
          <p> Player 1, choose a mark:</p>

          <button
            className="button"
            onClick={() => {
              choose1("🦋");
            }}
          >
            🦋
          </button>
          <button
            className="button"
            onClick={() => {
              choose1("🐝");
            }}
          >
            🐝
          </button>
          <button
            className="button"
            onClick={() => {
              choose1("🐞");
            }}
          >
            🐞
          </button>
          <button
            className="button"
            onClick={() => {
              choose1("🪲");
            }}
          >
            🪲
          </button>
        </div>
        <div>
          <p> Player 2, choose a mark:</p>
          <button
            className="button"
            onClick={() => {
              choose2("🦉");
            }}
          >
            🦉
          </button>
          <button
            className="button"
            onClick={() => {
              choose2("🐿");
            }}
          >
            🐿
          </button>
          <button
            className="button"
            onClick={() => {
              choose2("🦔");
            }}
          >
            🦔
          </button>
          <button
            className="button"
            onClick={() => {
              choose2("🦦");
            }}
          >
            🦦
          </button>
        </div>
      </div>
      <p className="yourmove">Your move: {user}</p>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              gamePlay={gamePlay}
              key={index}
              index={index}
            />
          );
        })}
        <p></p>
        <Button refresh={refresh} />
        <div className="winner">{winner}</div>
      </div>
    </>
  );
};

export default App;
