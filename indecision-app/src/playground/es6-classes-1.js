// Setup constructor to habe name and age (default to 0)
// getDescription = "Andrew Mead is ${age} year(s) old.""

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
}
const me = new Person('Andrew Mead');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());