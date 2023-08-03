import React, { useState, useEffect } from "react";
import "./Tictactoe.css";

const Tictactoe = ({ showTicTacToe, onHideTicTacToe }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("⭕️");
  const [winner, setWinner] = useState(null);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(showTicTacToe);
  }, [showTicTacToe]);

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard, currentPlayer)) {
      setWinner(currentPlayer);
    } else if (checkTie(newBoard)) {
      setWinner("draw");
    } else {
      setCurrentPlayer(currentPlayer === "⭕️" ? "❌" : "⭕️");
    }
  };

  const checkWin = (board, player) => {
    return winningCombos.some((combo) => {
      return combo.every((index) => {
        return board[index] === player;
      });
    });
  };

  const checkTie = (board) => {
    return board.every((cell) => cell !== null);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("⭕️");
    setWinner(null);
  };

  const handleHideTicTacToe = () => {
    setWinner(null); 
    setBoard(Array(9).fill(null)); 
    setCurrentPlayer("⭕️"); 
    onHideTicTacToe(); 
  };

  return (
    <div className="tictactoe-page-content">
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell}`}
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {winner && (
        <div className="status">
          {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
        </div>
      )}

      {!winner && <div className="status">Current Player: {currentPlayer}</div>}
      <br />
      <button className="reset-button" onClick={reset}>
        Reset Game
      </button>
    </div>
  );
};

export default Tictactoe;
