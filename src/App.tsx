/** @format */

import React, { useState } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";

const Chess = require("chess.js");

// by using chess, we will allow users to only make valid moves. 
  //and play random computer move

const App: React.FC = () => {
	const [chess] = useState<ChessInstance>(
		new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
	);

const [fen, setFen] = useState(chess.fen());

const handleMove = (move: ShortMove) => {
  if(chess.move(move)) {
    setTimeout(() => {
      const moves = chess.moves();

      if (moves.length > 0) {
        const computerMove= moves[Math.floor(Math.random() * moves.length)];
        chess.move(computerMove);
        setFen(chess.fen());
        }
    }, 300);
    
    setFen(chess.fen());
  }
};


	return (
    <div className="flex-center">
      <h1>Random Chess</h1>
      <Chessboard
        width={400}
        position={fen}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })
        }
      />
    </div>
  );
};

export default App;
