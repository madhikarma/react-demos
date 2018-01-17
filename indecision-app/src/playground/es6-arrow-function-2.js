// arguments object is no longer bound wth arrow functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

const add = (a, b) => {
  // console.log(arguments)
  return a + b;
}
console.log(add(55, 1, 1001));

// this keyword is no longer bound with arrow functions

// es6 method def syntax

const user  = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() { 
    return this.cities.map( (city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());