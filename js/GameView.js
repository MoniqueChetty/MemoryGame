export default class GameView {
  constructor() {}

  newGame() {
    // console.log('newGame');

    let tile = document.querySelectorAll('.board-tile');
    let winner = document.querySelector('.winner');
    let trysCount = document.querySelector('.trysCounter');

    for (let i = 0; i < 16; i++) {
      tile[i].classList.add('active');
      tile[i].classList.remove('activeCard');
      tile[i].classList.remove('activeWin');
      tile[i].innerHTML = ``;
    }
    winner.style.visibility = 'hidden';
    trysCount.innerHTML = ``;
  }

  updateBoard(game) {
    let tile = document.querySelectorAll('.board-tile');

    if (game.scoreTotal == 8) {
      return;
    }
    if (game.score[0].tileIndex == game.score[1].tileIndex) {
      let index3 = game.score[0].tileIndex;
      tile[index3].classList.remove('activeCard');
      tile[index3].classList.add('active');
      tile[index3].innerHTML = ``;
      game.score = [];
      return;
    }
    // console.log(game.score, 'in Gameview Top');
    if (game.score[0].pick == game.score[1].pick) {
      game.score.forEach((item) => {
        tile[item.tileIndex].classList.add('activeWin');
      });
      game.scoreTotal++;
      //   console.log(game.scoreTotal);
    } else {
      let index0 = game.score[0].tileIndex;
      let index1 = game.score[1].tileIndex;
      setTimeout(function () {
        tile[index0].classList.remove('activeCard');
        tile[index0].classList.add('active');
        tile[index0].innerHTML = ``;
        tile[index1].classList.remove('activeCard');
        tile[index1].classList.add('active');
        tile[index1].innerHTML = ``;
      }, 500);
    }

    game.score = [];
  }
}
