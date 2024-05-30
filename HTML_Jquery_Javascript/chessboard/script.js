document.addEventListener("DOMContentLoaded", createChessboard);

function createChessboard() {
    const board = document.getElementById('chessboard');
    const dimension = document.getElementById('dimension').value;
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

    for (let row = 0; row < dimension; row++) {
        for (let col = 0; col < dimension; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            board.appendChild(square);
        }
    }
}
