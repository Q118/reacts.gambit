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


	return (
		<div className="flex-center">
			<h1>Random Chess</h1>
			<Chessboard
				width={400}
				position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			/>
		</div>
	);
};

export default App;
