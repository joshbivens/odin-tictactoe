const Player = (name) => {
  return {
    name
  }
}

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", "",];
  return { gameboard }
})();

// What do we leave in init and what do we move to gameplay?
// Maybe we have: init, gameplay, AND render?

// Gameplay needs to house movement and winstate
const gamePlay = (() => {
  // const checkWin = () => {

  // }

  const makeMove = (e) => {
    init.switchSides = !init.switchSides;
    if (init.switchSides) {
      init.newGame.gameboard[e.target.dataset.id] = "O";
      render(init.player1);
    } else {
      init.newGame.gameboard[e.target.dataset.id] = "X";
      render(init.player2);
    }
    // checkWin();
  }

  return {
    makeMove
  }
})();
// Init needs to initialize the players and gameboard
const init = (() => {
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
  init.grid.forEach((space, index) => space.innerHTML = init.newGame.gameboard[index]);
  init.info.innerHTML = `${player.name}'s turn`;
};

init;
render();

// console.log(`${player1.name} (${player1.side}) vs ${player2.name} (${player2.side})!`);