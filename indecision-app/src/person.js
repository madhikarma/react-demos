console.log('person.js is running');

const isAdult = (age) => {
  return (age >= 18);
} 

const canDrink = (age) => {
  return (age >= 21);
} 

export { isAdult, canDrink }