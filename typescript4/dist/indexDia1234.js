"use strict";
console.log('Variaveis!');
let values = [1, 2, 3];
let item = ['Apple', 3, true];
item[0] = 'Banana';
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
;
const usuario = {
    fistName: 'John',
    age: 25,
    role: Role.backup
};
console.log(usuario);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
function result(price) {
    console.log('The result is ' + price);
}
result(add(6, 3));
const user = {
    fistName: 'User',
    age: 25,
    lastname: 'Doe'
};
user.lastname = 'Smith';
console.log(user);
let itemInput;
let itemName;
itemInput = 10;
itemName = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput;
}
function userInput(iput1, input2) {
    let result;
    if (typeof iput1 === 'number' && typeof input2 === 'number') {
        result = iput1 + input2;
    }
    else {
        result = iput1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput('Apple', 'Banana');
console.log(combineName);
let productPrice;
let productName;
let procutSize;
productPrice = 20;
productName = 'Orange';
const e1 = {
    fistName: 'John',
    age: 25,
    id: 1,
    role: 'backup'
};
console.log(e1);
let pi = '3.14159';
let tau = Number(pi) * 2;
console.log(`${tau} is ${pi} times two.`);
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie.`);
let isDouglas;
isDouglas = true;
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
let code = 10;
console.log(code);
