// Create Gameboards and display them
function createGameboard() {
  const boardDiv = document.createElement('div');
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add(i);
    boardDiv.appendChild(cell);
  }
  return boardDiv;
}

module.exports = {
  createGameboard
};
