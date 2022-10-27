// const createBoard = require('../modules/DOM').createGameboard;
// const displayMainPage = require('../modules/DOM').displayMainPage;
// const userBoardCoord = require('../helpers/coordinates').board1.ships;
// const enemyBoardCoord = require('../helpers/coordinates').board2.ships;
import Coords from '../helpers/coordinates.js';
import { createGameboard } from './DOM.js';
import { Player } from '../modules/player.js';
import { Computer } from '../modules/player.js';

const board1 = createGameboard(true, false);
const board2 = createGameboard(false, true);
const board1Div = document.querySelector('.userBoard');
const board2Div = document.querySelector('.enemyBoard');
board1Div.appendChild(board1);
board2Div.appendChild(board2);

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
    const user = initPlayer();
    const computer = initEnemy();

    Coords.board1.ships.forEach((ship) => {
      user.gameboard.placeShips(ship);
    });

    Coords.board2.ships.forEach((ship) => {
      computer.gameboard.placeShips(ship);
    });
  };

  return {
    initBoards
  };
};

const myGame = Game();
myGame.initBoards();
