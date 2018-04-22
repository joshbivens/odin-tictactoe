const Player = (name) => {
  return {
    name
  }
}

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", "",];
  return { gameboard }
})();

// What do we leave in game and what do we move to gameplay?
// Maybe we have: game, gameplay, AND render?

// Gameplay needs to house movement and winstate
const gamePlay = (() => {

  // const checkWin = () => {

  // }

  const markSpace = (e, side) => {
    game.newGame.gameboard[e.target.dataset.id] = side;
  }

  const initiateMove = (e) => {
    game.switchSides = !game.switchSides;
    if (game.switchSides) {
      markSpace(e, "O");
      render(game.player1);
    } else {
      markSpace(e, "X");
      render(game.player2);
    }
    // checkWin();
  }

  return {
    initiateMove
  }
})();
// Init needs to initialize the players and gameboard
const game = (() => {
  const player1 = "Josh"; // prompt("Enter the first player's name.");
  const player2 = "Chris"; // prompt("Enter the second player's name.");
  const info = document.querySelector(".info");
  const grid = document.querySelectorAll(".space");
  let newGame = gameBoard;
  let switchSides = true;

  grid.forEach(space => space.addEventListener("click", gamePlay.initiateMove));

  return {
    switchSides,
    newGame,
    player1,
    player2,
    grid,
    info,
  }
})();

// Render needs to render the everything after a move is made
// return player from makeMove and use it in render?
const render = (player) => {
  game.grid.forEach((space, index) => space.innerHTML = game.newGame.gameboard[index]);
  if (!firstTurn) {
    game.info.innerHTML =
      `<div>
        ${player.name}'s turn
      </div>`;
  }
};

let firstTurn = true;

const firstTurnFunction = () => {
  console.log(game.player1.name)
  firstTurn = false;
  game.info.innerHTML =
    `<div>
      <div>${game.player1.name} is X, ${game.player2.name} is O.</div>
    </div>`;
}

game;
console.log(game.player1)
setTimeout(() => {
  render();
  firstTurnFunction();
}, 500)

// console.log(`${player1.name} (${player1.side}) vs ${player2.name} (${player2.side})!`);