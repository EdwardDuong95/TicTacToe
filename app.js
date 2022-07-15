const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};
const statusText = document.getElementById("status");
const restart = document.getElementById("restartButton");
const board = document.getElementById("board");

// restart.addEventListener ("click", restartGame);

board.addEventListener("click", (event) => {
  if (!event.target.innerHTML) {
    event.target.innerHTML = gameState.currentPlayer;
  }

  let currentId = event.target.id;
  let [rowId, colId] = currentId.split("");
  gameState.board[rowId][colId] = gameState.currentPlayer;

  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
  statusText.textContent = `${gameState.currentPlayer}'s turn`;

  checkWinner(gameState.board);
});

function getRow(board, row) {
  return board[row];
}

function getColumn(board, column) {
  let col = [];
  for (let i = 0; i < board.length; i++) col.push(board[i][column]);
  return col;
}

function getDiag1(board) {
  let diag1 = [board[0][0], board[1][1], board[2][2]];
  return diag1;
}

function getDiag2(board) {
  let diag2 = [board[0][2], board[1][1], board[2][0]];
  return diag2;
}

function checkArrays(array) {
  if (array.join("") === "xxx") {
    statusText.textContent = "x wins!";
    console.log("x is winner");
  }
  if (array.join("") === "ooo") {
    console.log("o is winner");
    statusText.textContent = "o wins!";
  }
}

function checkWinner(board) {
  checkArrays(getColumn(board, 0));
  checkArrays(getColumn(board, 1));
  checkArrays(getColumn(board, 2));
  checkArrays(getRow(board, 0));
  checkArrays(getRow(board, 0));
  checkArrays(getRow(board, 0));
  checkArrays(getDiag1(board));
  checkArrays(getDiag2(board));
}

// let restartGame = () => {
//   gameState = {
//   players: ["x", "o"],
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   currentPlayer: "x",
// };
// }
