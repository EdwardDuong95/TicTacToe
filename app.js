
let initialState;
const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

//Grabbing the board from HTML
const board = document.getElementById("board");


board.addEventListener('click', (event) => {

  event.target.innerHTML = gameState.players[0]

  // alternate X and O's by Utilizing a If statement

  // makes sure if someone clicks on the same square 
  // as an occupied square it doesn't change.
  // makes sure that the boards match up.

} );

