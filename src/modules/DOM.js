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

function displayMainPage(userName) {
  // const userName = document.querySelector('.board1 > input').value
  document.querySelector('.openingPage').style.display = 'none';
  document.querySelector('main').style.display = 'block';
  document.querySelector('.userBoard').textContent = userName;
}

export default {
  createGameboard,
  displayMainPage
};
