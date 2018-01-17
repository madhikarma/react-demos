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

const user  = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function() {
    return this.cities.map( (city) => {
      return this.name + ' has lived in ' + city;
    });
    // anonymous functions cannot access var outside of scope
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in' + city);
    // });
  }
};
console.log(user.printPlacesLived());