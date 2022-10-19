const Ship = require('../modules/ship');

describe('Ship functions', () => {
  test('Calling hit() increases the hit count', () => {
    const myShip = Ship([11, 12, 13]);
    myShip.hit();
    expect(myShip.isSunk()).toBe(false);
  });

  test('Multiple hit works', () => {
    const myOtherShip = Ship([1, 2, 3]);
    myOtherShip.hit();
    myOtherShip.hit();
    expect(myOtherShip.isSunk()).toBe(false);
  });

  test('isSunk() returns true when myShip is sunk', () => {
    const mySunkShip = Ship([4, 5, 6, 7]);
    mySunkShip.hit();
    mySunkShip.hit();
    mySunkShip.hit();
    mySunkShip.hit();
    expect(mySunkShip.isSunk()).toBe(true);
  });
});
