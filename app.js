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

board.addEventListener("click", (event) => {
 if (!event.target.innerHTML){event.target.innerHTML = gameState.currentPlayer};
  // alternate X and O's by Utilizing a If statement
  if (gameState.currentPlayer === "x") {
    //update currentplayer to be O
    gameState.currentPlayer = "o"
  } else {gameState.currentPlayer = "x"
  
  
    }
  

  // makes sure if someone clicks on the same square
  // as an occupied square it doesn't change.
  // makes sure that the boards match up.
});
