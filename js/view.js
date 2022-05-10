export default class GameView {
    updateBoard(game) {
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for(let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);

            tile.classList.remove('winning-tiles');

            let tileMarker = game.board[i] == 'X' ? 'tile-x' : 'tile-o';
            tile.innerHTML = `<span class="${tileMarker}">${game.board[i] ? game.board[i] : ""}</span>`

            if(winningCombination && winningCombination.includes(i)) {
                tile.classList.add('winning-tiles');
            }
        }
    }
    updateTurn(game) {
        let playerX = document.querySelector('.player-x');
        let playerO = document.querySelector('.player-o');
        playerX.classList.remove('active');
        playerO.classList.remove('active');

        if (game.turn == 'X') {
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
    }
}