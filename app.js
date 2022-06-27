let initialState;
const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};

//Grabbing the board from HTML
const board = document.getElementById("board");
let cells = document.getElementsByClassName("cell")

board.addEventListener("click", (event) => {
 if (!event.target.innerHTML){event.target.innerHTML = gameState.currentPlayer};
  // alternate X and O's by Utilizing a If statement
  if (gameState.currentPlayer === "x") {
    //update currentplayer to be O
    gameState.currentPlayer = "o"
  } else {gameState.currentPlayer = "x"}

  console.log(gameState.board)
  
});






let result = [];

function getRow (board, row){
  return board[row];
}


function getColumn(board, column) {
  let col = [];
  for (let i = 0; i < board.length; i++)
    col.push(board[i][column]);
  return col;
}


function diag1 (board,x,y){
  let diag1win = [board[0][0],board[1][1],board[2][2]];
  return diag1;
}

function diag2 (board,x,y){
  let diag2 = [board[0][2],board[1][1],board[2][0]];
  return diag2;
}

function checkWinner (){
  
  
}

