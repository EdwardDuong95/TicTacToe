const gameState = {
  gameRunning: true,
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
const player1 = document.getElementById("player1Label");
const player2 = document.getElementById("player2Label");
const cells = document.getElementsByClassName("cell");
const player1Input = document.getElementById("player1Input");
const player2Input = document.getElementById("player2Input");

player1Input.addEventListener("submit", (event) => {
  event.preventDefault();
  player1.innerHTML = event.target[0].value;
  event.target[0].value = "";
});

player2Input.addEventListener("submit", (event) => {
  event.preventDefault();
  player2.innerHTML = event.target[0].value;
  event.target[0].value = "";
});

restart.addEventListener("click", () => {
  (gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]),
    (gameState.currentPlayer = "x");
  gameState.gameRunning = true;
  [...document.querySelectorAll(".cell")].forEach(
    (cellDomElement) => (cellDomElement.innerHTML = "")
  );
  player1.innerHTML = "Player 1";
  player2.innerHTML = "Player 2";
  statusText.textContent = "";
});

board.addEventListener("click", (event) => {
  if (!event.target.innerHTML && gameState.gameRunning) {
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
    gameState.gameRunning = false;
  }
  if (array.join("") === "ooo") {
    statusText.textContent = "o wins!";
    gameState.gameRunning = false;
  }
}

function checkWinner(board) {
  checkArrays(getColumn(board, 0));
  checkArrays(getColumn(board, 1));
  checkArrays(getColumn(board, 2));
  checkArrays(getRow(board, 0));
  checkArrays(getRow(board, 1));
  checkArrays(getRow(board, 2));
  checkArrays(getDiag1(board));
  checkArrays(getDiag2(board));
}
