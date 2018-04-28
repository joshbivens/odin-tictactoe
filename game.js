const player = (name) => {
  return {
    name
  }
}

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", "",];
  return {
    gameboard
  }
})();

const gamePlay = (() => {
  const checkWin = () => {
    const winningCombos = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Diagonal
      [0, 4, 8],
      [2, 4, 6],

      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    winningCombos.forEach(combo => {
      const first =  game.newGame.gameboard[combo[0]];
      const second =  game.newGame.gameboard[combo[1]];
      const third =  game.newGame.gameboard[combo[2]];

      if(first === "X" && second === "X" && third === "X" ||
         first === "O" && second === "O" && third === "O") {
        game.won = true;
        console.log(game.won);
      }
    });

  }

  const markSpace = (e, side) => {
    game.newGame.gameboard[e.target.dataset.id] = side;
  }

  const move = (e) => {
    if(!game.won) {
      game.switchSides = !game.switchSides;
      if (game.switchSides) {
        markSpace(e, "O");
        render();
      } else {
        markSpace(e, "X");
        render();
      }
      checkWin();
    }
  }
 
  return {
    move
  }
})();

const game = (() => {

  const info = document.querySelector(".info");
  const playersBox = document.querySelector(".players");
  const player1Field = document.querySelector("#player1");
  const player2Field = document.querySelector("#player2");
  const playButton = document.querySelector("#btn-play");
  const spaces = document.querySelectorAll(".space");

  spaces.forEach(space => space.addEventListener("click", gamePlay.move)); 
  
  let player1;
  let player2;
  let newGame = gameBoard;
  let switchSides = true;
  let won;
  
  const setPlayerNames = () => {
    player1 = player(player1Field.value);
    player2 = player(player2Field.value);
    playersBox.style.display = "none";
  }
  
  playButton.addEventListener("click", setPlayerNames);

  return {
    switchSides,
    newGame,
    player1,
    player2,
    spaces,
    info,
    won
  }
})();

const render = () => {
  game.spaces.forEach((space, index) => space.innerHTML = game.newGame.gameboard[index]);
};

game;

// console.log(`${player1.name} (${player1.side}) vs ${player2.name} (${player2.side})!`);
