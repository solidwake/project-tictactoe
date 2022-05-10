import Game from './game.js';
import GameView from './view.js';

let game = new Game();
let gameView = new GameView();

document.querySelector('.restart').addEventListener('click', () => {
    restartGame();
})

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        onTileClick(tile.dataset.index);
    })
})
function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}
function restartGame() {
    game = new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game);