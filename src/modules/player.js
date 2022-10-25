import { Gameboard } from './gameboard.js';

class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.turn = turn;
    this.gameboard = Gameboard();
  }

  attack(coordinate, enemygGameboard) {
    enemygGameboard.receiveAttack(coordinate);
  }
}

class Computer extends Player {
  constructor(name = 'Computer', turn = true) {
    super(name, turn);
    this.played = [];
  }
  playRandom(randomPlay = Math.floor(Math.random() * 100)) {
    if (!this.played.includes(randomPlay)) {
      this.played.push(randomPlay);
      console.log(randomPlay);
      return randomPlay;
    } else {
      console.error('Playing Again since the number is already played!');
      this.playRandom(Math.floor(Math.random() * 100));
    }
  }
}

// const board2 = Gameboard();

// const myComp = new Computer('Comp', true);
// myComp.attack(myComp.playRandom(), board2);
// myComp.playRandom();
// myComp.playRandom();
// myComp.playRandom();
// console.log(myComp.played);

// myComp.gameboard.placeShips(1, 2, 3);
// console.log(myComp.gameboard);

export { Player, Computer };
