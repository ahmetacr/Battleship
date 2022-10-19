class Player {
  constructor(name, turn) {
    this.name = name;
    this.turn = turn;
  }
}

class Computer extends Player {
  constructor(name, turn) {
    super(name, turn);
  }
  playRandom() {}
}
