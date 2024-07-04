const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  /**
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const upadatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      upadatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return upadatedBoard;
    });

    onSelectSquare();
  }; */

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={!!playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
