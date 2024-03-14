import "./App.css";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import WINNING_COMBINATIONS from "./winning_compinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
};

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState({
        X: "Player 1",
        O: "Player 2",
    });
    // const [hasWinner, setHasWinner] = useState(false);
    // const [activePlayer, setActivePlayer] = useState("X");
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map((array) => [...array])];
    let winner = null;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
        console.log(gameBoard);
    }

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    const handleSelectSquare = (rowIndex, colIndex) => {
        // setActivePlayer((currentlyActivePlayer) =>
        //     currentlyActivePlayer === "X" ? "O" : "X"
        // );
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    };

    const handleRestart = () => {
        setGameTurns([]);
    };

    const handlePlayerNameChange = (symbol, newName) => {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    };

    return (
        <main>
            <div className="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && (
                    <GameOver winner={winner} onRestart={handleRestart} />
                )}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    // activePlayerSymbol={activePlayer}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
