//
export default class Game {
    constructor() {
        this.board = new Array(9).fill(null);
        this.turn = 'X'
    }
    nextTurn() {
        if (this.turn == 'X') {
            this.turn = 'O';
        } else {
            this.turn = 'X';
        }
    }
    makeMove(i) {
        this.board[i] = this.turn;
    }
}
