console.log('app.js is running');

// import subtract, { square, add } from './utils.js'
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

import isSenior, { isAdult, canDrink } from './person.js'
console.log(isAdult(18));
console.log(canDrink(20));
console.log(isSenior(65));

// set default export and func
// Grab default and call it