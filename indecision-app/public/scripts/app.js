'use strict';

// arguments object is no longer bound wth arrow functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword is no longer bound with arrow functions

// es6 method def syntax

var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());
