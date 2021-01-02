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


// the handleMove function takes in a ShortMove from chess.js
// shortMove is an object which has (from), (to), (promotion) properties
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

//first thing we do in handleMove is make the move on chess.js.
//if passed move is valid, it'll return a valid full move otherwise null
//if a played move was valid, we take the updated fen from chess.js and update the fen state.


// after, updating the fen, we set a timeout fro 300ms
  //get all thevalid moves byusing moves() which return array of moves.
  //pick a random move and play it on the chess.js and update the fen again
    //this continues until the game is over

//when onDrop is called we convert sourceSquare and targetSquare to ShortMove
// we are passing promotion as (q) 
    //Telling chess.js to auto-promote to queen whenever a promtion happens


	return (
    <div className="flex-center">
      <h1>Random Chess</h1>
      <Chessboard
        width={400}
        position={fen}
        // adding onDrop prop to Chessboard component.
        // onDrop is called whenever a piece is picked and dropped on the board.
        // passing us the sourceSquare (from square) and targetSquare (to square)
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
