const Gameboard = require('../modules/gameboard');
// const Ship = require('../modules/ship');
const myGameBoard = Gameboard();
myGameBoard.placeShips(4, 5, 6);
console.log(myGameBoard.myShips[0]);

describe('Gameboard factory functions well', () => {
  let myGameBoard;
  let hit;
  beforeEach(() => {
    myGameBoard = Gameboard();
    myGameBoard.placeShips(4, 5, 6);
    hit = jest.spyOn(myGameBoard.myShips[0], 'hit');
  });
  test('Given the accurate coordinates, receiveAttack function calls the hit function', () => {
    myGameBoard.receiveAttack(4);
    expect(hit).toHaveBeenCalledTimes(1);
  });
  test('Given the wrong coordinates, receiveAttack function would never call the hit', () => {
    myGameBoard.receiveAttack(1);
    myGameBoard.receiveAttack(98);
    expect(hit).toHaveBeenCalledTimes(0);
  });
  test('Calls hit multiple times when multiple attacks received', () => {
    myGameBoard.receiveAttack(4);
    myGameBoard.receiveAttack(5);
    myGameBoard.receiveAttack(6);
    expect(hit).toHaveBeenCalledTimes(3);
  });
  test('isSunk() returns true for a ship on the gameboard when hit enough', () => {
    myGameBoard.placeShips(1, 2, 3);
    myGameBoard.receiveAttack(1);
    myGameBoard.receiveAttack(2);
    myGameBoard.receiveAttack(3);
    expect(myGameBoard.myShips[1].isSunk()).toBe(true);
  });
  test('All ships sunk function works as expected', () => {
    myGameBoard.placeShips(1, 2, 3);
    myGameBoard.receiveAttack(4);
    myGameBoard.receiveAttack(5);
    myGameBoard.receiveAttack(6);
    expect(myGameBoard.shipsSunk()).toBe(false);
    myGameBoard.receiveAttack(1);
    myGameBoard.receiveAttack(2);
    myGameBoard.receiveAttack(3);
    expect(myGameBoard.shipsSunk()).toBe(true);
  });
});
