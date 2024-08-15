"use strict";
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
let cartItem = { id: 1, title: 'Apple' };
addToCart(cartItem);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Jane', 31);
console.log(`${jane.name} is ${jane.age} years old.`);
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Engineer', 100000);
console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new User('Dog', 1);
console.log(user.id);
user.name = 'Harold';
console.log(`User:`, user);
