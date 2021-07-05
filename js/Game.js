export default class Game {
  constructor() {
    this.turn = 'p1';
    this.board = new Array(16).fill(null);
    this.score = new Array();
    this.scoreTotal = 0;
    this.trysCounter = 0;
  }
  setNewArray() {
    let baseArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    for (const tile in this.board) {
      let random = Math.floor(Math.random() * baseArray.length);
      this.board[tile] = baseArray[random];
      baseArray.splice(random, 1);
    }
    console.log(this.board, ' in setNewArray');
    return this.board;
  }
}
