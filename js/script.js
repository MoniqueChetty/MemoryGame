import Game from './Game.js';
import GameView from './GameView.js';

let tiles = document.querySelectorAll('.board-tile');
let newGameButton = document.getElementById('newGameButton');
let winner = document.querySelector('.winner');
let trysCount = document.querySelector('.trysCounter');

let game = new Game();
let gameView = new GameView();

gameView.newGame(); // create back of card
game.setNewArray(); //create random array

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index);
  });
});

let onTileClick = (tileIndex) => {
  let pick = game.board[tileIndex];
  game.score.push({tileIndex: tileIndex, pick: pick});

  tiles[tileIndex].classList.remove('active');
  tiles[tileIndex].classList.add('activeCard');
  tiles[tileIndex].innerHTML = `<img src="./assets/pic${pick}.png" alt="" >`;

  // console.log(game.score);
  if (game.score.length == 2) {
    gameView.updateBoard(game);
    game.trysCounter++;
  }
  if (game.scoreTotal == 8) {
    winner.style.visibility = 'visible';
  }

  trysCount.innerHTML = `${game.trysCounter} Tries`;
};

newGameButton.addEventListener('click', () => {
  game = new Game();
  gameView.newGame(); // create back of card
  game.setNewArray(); //create random array
});
