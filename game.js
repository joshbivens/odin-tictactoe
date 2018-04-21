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

  const makeMove = (e) => {
    game.switchSides = !game.switchSides;
    if (game.switchSides) {
      game.newGame.gameboard[e.target.dataset.id] = "O";
      render(game.player1);
    } else {
      game.newGame.gameboard[e.target.dataset.id] = "X";
      render(game.player2);
    }
    // checkWin();
  }

  return {
    makeMove
  }
})();
// Init needs to initialize the players and gameboard
const game = (() => {
  const player1 = Player("Josh");
  const player2 = Player("Chris");
  const info = document.querySelector(".info");
  const grid = document.querySelectorAll(".space");
  let newGame = gameBoard;
  let switchSides = true;

  grid.forEach(space => space.addEventListener("click", gamePlay.makeMove));

  return {
    switchSides,
    newGame,
    player1,
    player2,
    grid,
    info
  }
})(); 

// Render needs to render the everything after a move is made
// return player from makeMove and use it in render?
const render = (player) => {
  game.grid.forEach((space, index) => space.innerHTML = game.newGame.gameboard[index]);
  game.info.innerHTML = `${player.name}'s turn`;
};

game;
render();

// console.log(`${player1.name} (${player1.side}) vs ${player2.name} (${player2.side})!`);