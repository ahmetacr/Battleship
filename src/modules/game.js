// const createBoard = require('../modules/DOM').createGameboard;
// const displayMainPage = require('../modules/DOM').displayMainPage;
// const userBoardCoord = require('../helpers/coordinates').board1.ships;
// const enemyBoardCoord = require('../helpers/coordinates').board2.ships;
import Coords from '../helpers/coordinates.js';
import { createGameboard } from './DOM.js';
import { displayResult } from './DOM.js';
import { Player } from '../modules/player.js';
import { Computer } from '../modules/player.js';

const Game = () => {
  const initPlayer = () => {
    const userName = document.querySelector('.board1 > input').value;
    const user = new Player(userName);
    return user;
  };

  const initEnemy = () => {
    // For now, the enemy player will be the computer
    const computer = new Computer('Computer');
    return computer;
  };

  const initBoards = () => {
    const board1 = createGameboard(true, false);
    const board2 = createGameboard(false, true);
    const board1Div = document.querySelector('.userBoard');
    const board2Div = document.querySelector('.enemyBoard');
    board1Div.appendChild(board1);
    board2Div.appendChild(board2);

    const user = initPlayer();
    const computer = initEnemy();

    Coords.board1.ships.forEach((ship) => {
      user.gameboard.placeShips(ship);
    });

    Coords.board2.ships.forEach((ship) => {
      computer.gameboard.placeShips(ship);
    });

    return {
      user,
      computer
    };
  };

  const boards = initBoards();

  const play = (event, enemy, user) => {
    let userPlayCoordinate = event.target.classList[0];
    userPlayCoordinate = userPlayCoordinate.replace('C', '');
    // User plays
    enemy.gameboard.receiveAttack(userPlayCoordinate);
    if (event.target.children[0]) {
      event.target.children[0].style.display = 'block';
    } else {
      event.target.classList.add('hit');
    }

    // Computer Plays
    const enemyPlayCoordinate = enemy.playRandom();
    user.gameboard.receiveAttack(enemyPlayCoordinate);
    if (
      document.querySelector(`.userBoard .C${enemyPlayCoordinate}`).children[0]
    ) {
      document.querySelector(
        `.userBoard .C${enemyPlayCoordinate}`
      ).children[0].style.display = 'block';
    } else {
      document
        .querySelector(`.userBoard .C${enemyPlayCoordinate}`)
        .classList.add('hit');
    }

    if (enemy.gameboard.shipsSunk()) {
      displayResult(true, false);
    } else if (user.gameboard.shipsSunk()) {
      displayResult(false, true);
    }
  };

  const addListeners = () => {
    const enemyCells = document.querySelectorAll(
      '.enemyBoard .cellContainer .cell'
    );
    enemyCells.forEach((cell) =>
      cell.addEventListener('click', function startAttack(event) {
        play(event, boards.computer, boards.user);
        cell.removeEventListener('click', startAttack);
      })
    );
  };

  return {
    initBoards,
    addListeners
  };
};

// const myGame = Game();
// myGame.addListeners();

export { Game };
