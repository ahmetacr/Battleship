import { Gameboard } from './gameboard.js';

class Player {
  constructor(name, turn = true) {
    this.name = name;
    this.turn = turn;
    this.gameboard = Gameboard();
  }

  attack(coordinate, enemygGameboard) {
    enemygGameboard.receiveAttack(coordinate);
  }
}

class Computer extends Player {
  constructor(name = 'Computer', turn = false) {
    super(name, turn);
    this.possiblePlays = [...Array(100).keys()];
  }
  playRandom() {
    const randomIndex = Math.floor(Math.random() * this.possiblePlays.length);
    const randomNumber = this.possiblePlays[randomIndex];
    this.possiblePlays.splice(randomIndex, 1);
    return randomNumber;
  }
}
export { Player, Computer };
