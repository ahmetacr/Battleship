import Ship from './ship.js';
/**
 * Make sure player cannot hit the same point twice!
 *
 */

// 1 of 4 length ship
// 2 of 3 length ship
// 2 of 2 length ship
// 2 of 1 length ship

const Gameboard = () => {
  let missedAttacks = 0;
  let myShips = [];
  let hitCoordinates = [];

  const placeShips = (...coordinates) => {
    let pass = true;
    if (myShips.length > 0) {
      loop1: for (let i in myShips) {
        for (let k in myShips[i].coordinates) {
          if (coordinates.includes(myShips[i].coordinates[k])) {
            console.log(`${myShips[i].coordinates[k]} is not empty!`);
            pass = false;
            break loop1;
          }
        }
      }
    }
    if (pass) {
      const newShip = Ship(coordinates);
      myShips.push(newShip);
      console.log(`${newShip} is added!`);
    }
  };

  const shipsSunk = () => {
    return !myShips.some((ship) => !ship.sunk);
  };

  // Determines whether or not the attack hit a ship and sends the fit function to the correct ship
  // or records the coordinates of the missed shot
  const receiveAttack = (coordinate) => {
    coordinate = Number.parseInt(coordinate);
    console.log('Coordinate: ', coordinate);
    let hit = false;
    for (let i = 0; i < myShips.length; i++) {
      if (!hitCoordinates.includes(coordinate)) {
        if (myShips[i].coordinates[0].includes(coordinate)) {
          console.log(`${coordinate} hitted`);
          hitCoordinates.push(coordinate);
          myShips[i].hit();
          console.log('SUNK? ' + myShips[i].isSunk());
          if (myShips[i].isSunk()) myShips[i].sunk = true;
          hit = true;
          break;
        } else {
          continue;
        }
      } else {
        console.log(`${coordinate} is already hit!`);
        hit = true;
        break;
      }
    }
    if (!hit) {
      console.log(coordinate, ': Missed!');
      missedAttacks += 1;
    }
  };

  return {
    placeShips: placeShips,
    receiveAttack: receiveAttack,
    myShips: myShips,
    missedAttacks: missedAttacks,
    shipsSunk: shipsSunk
  };
};

// const myGameBoard = Gameboard();
// myGameBoard.placeShips(1, 2, 3);
// console.log(myGameBoard.myShips[0].coordinates.includes(1));
// myGameBoard.receiveAttack(3);
// myGameBoard.receiveAttack(2);
// myGameBoard.receiveAttack(2);
// myGameBoard.placeShips(5, 6, 7);

// // console.log(myGameBoard);

// const myGameBoard2 = Gameboard();
// myGameBoard2.placeShips(4, 5, 6);
// myGameBoard2.placeShips(1, 2, 3);
// myGameBoard2.receiveAttack(4);
// myGameBoard2.receiveAttack(5);
// myGameBoard2.receiveAttack(6);
// myGameBoard2.receiveAttack(1);
// myGameBoard2.receiveAttack(2);
// myGameBoard2.receiveAttack(3);

// console.log(myGameBoard2.shipsSunk());

export { Gameboard };
