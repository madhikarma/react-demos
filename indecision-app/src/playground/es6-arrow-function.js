
// Newer JS functions stored in vars / consts / lets
// const square = function(x) {
//   return x * x;
// };

// Normal JS named function
// function square(x) {
//   return x * x;
// };

// Arrow function are anonymous
// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(8));

// Challenge - use arrow functions
// getFirstName('Mike Smith') => 'Mike'
// Create arrow function (using verbose)
// Create arrow function (using short hand syntax)

// const getFirstName = (name) => {
//   return name.split(' ')[0];
// };
const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Mike Smith'));
