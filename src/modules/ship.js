const Ship = (coordinates) => {
  // console.log('Coordinates for my ship: ', coordinates[0]);
  let length = coordinates[0].length;
  let livesLeft = length;

  const hit = () => {
    if (!isSunk()) {
      livesLeft--;
    } else {
      return 'Ship is sunk!';
    }
  };

  const isSunk = () => {
    if (livesLeft > 0) {
      return false;
    }
    return true;
  };

  let sunk = isSunk();

  return {
    sunk: sunk,
    hit: hit,
    isSunk: isSunk,
    livesLeft: livesLeft,
    coordinates: coordinates
  };
};

// const myShip = Ship([4, 5, 6]);

// console.log(myShip.isSunk());
// myShip.isSunk();
// myShip.hit();
// myShip.hit();
// myShip.hit();
// console.log(myShip.isSunk());
// console.log(myShip.livesLeft);
// console.log(myShip);

export default Ship;
