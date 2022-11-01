import Coords from '../helpers/coordinates.js';
// Create Gameboards and display them
function createGameboard(player1 = false, player2 = false) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('cellContainer');
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add(`C${i}`);
    cell.classList.add('cell');
    if (player1) {
      Coords.board1.ships.forEach((ship) => {
        ship.forEach((point) => {
          if (i === point) {
            cell.classList.add('myShip');
            // Add the fire icon to the spans and if hit, show them later on
            const fireSpan = createFireSpan();
            cell.appendChild(fireSpan);
          }
        });
      });
    } else if (player2) {
      Coords.board2.ships.forEach((ship) => {
        ship.forEach((point) => {
          if (i === point) {
            cell.classList.add('enemyShip');
            const fireSpan = createFireSpan();
            cell.appendChild(fireSpan);
          }
        });
      });
    }
    boardDiv.appendChild(cell);
  }
  return boardDiv;
}

function createFireSpan() {
  const fireSpan = document.createElement('span');
  fireSpan.classList.add('material-symbols-outlined');
  fireSpan.textContent = 'local_fire_department';
  // fireSpan.style.display = 'none';
  return fireSpan;
}

function displayMainPage() {
  const userName = document.querySelector('.board1 > input').value;
  document.querySelector('.openingPage').style.display = 'none';
  document.querySelector('main').style.display = 'block';
  document.querySelector('.userBoard h1').textContent = userName + "'s Board";
}

function displayResult(user = false, computer = false) {
  let result;
  if (user) result = 'You Won!';
  if (computer) result = 'You Lost!';
  document.querySelector('.result').textContent = result;
}

export { createGameboard, displayMainPage, displayResult };
