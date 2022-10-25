// const createBoard = require('../modules/DOM').createGameboard;
// const displayMainPage = require('../modules/DOM').displayMainPage;
// const userBoardCoord = require('../helpers/coordinates').board1.ships;
// const enemyBoardCoord = require('../helpers/coordinates').board2.ships;
import Coords from '../helpers/coordinates.js';
import { Player } from '../modules/player.js';
import { Computer } from '../modules/player.js';
import { Gameboard } from './gameboard.js';

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

  const initBoards = (userBoardCoord, enemyBoardCoord) => {
    const user = initPlayer();
    const computer = initEnemy();
  };
};

console.log('ahmed');
