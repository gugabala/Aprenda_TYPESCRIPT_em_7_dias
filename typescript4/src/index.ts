
/*
console.log('Variaveis!');

let values:number[] = [1, 2, 3];

//Apple, 3 , true

let item: [string, number, boolean] = ['Apple', 3, true];

item[0] = 'Banana';


//Enum
enum Role {admin = 1, read = 2, backup = 3};
const usuario = {
    fistName: 'John',
    age : 25,
    role: Role.backup
}

console.log(usuario);

function add(num1 :number, num2: number): number {
    return num1 + num2;
}

 
console.log(add(2, 3));

function result(price :number){
    console.log('The result is ' +price );
}

result(add(6, 3));

type User = {fistName: string, age: number, lastname: string};

const user : User  = {
    fistName: 'User',
    age: 25,
    lastname: 'Doe'
};

user.lastname = 'Smith';

console.log(user);  

let itemInput: unknown
let itemName: string
itemInput = 10
itemName = 'Apple'
if ( itemInput === 'string'){
    itemName = itemInput;
}

//function generateError(message: string, code: number): never {
//    throw {message: message, errorCode: code};
//}


//generateError('An error ocurred', 500);

//console.log(generateError('An error ocurred', 500));


function userInput(iput1: number | string, input2:number| string){
    let result
    if (typeof iput1 === 'number' && typeof input2 === 'number'){
        result = iput1 + input2;
    } else {
        result = iput1.toString() + input2.toString();
    } 
    return  result;
}


const combinePrices = userInput(10, 20);
console.log(combinePrices);

const combineName = userInput('Apple', 'Banana');
console.log(combineName);


let productPrice : 10 | 20 | 30;
let productName : 'Apple' | 'Banana' | 'Orange';
let procutSize : 'S' | 'M' | 'L';

productPrice = 20;
productName = 'Orange';

type User3 = {  
    fistName: string,
    age: number,
    //lastname: string,
    //role: Role
}

type JobRole ={ id :number, role: string};

type employee = User3 & JobRole;

const e1 : employee = {
    fistName: 'John',
    age: 25,
    id: 1,
    role: 'backup'
};
console.log(e1);


// Day 3 - Exercise 1

let pi = '3.14159';
let tau = Number( pi) * 2;

console.log(`${tau} is ${pi} times two.`);


// Day 3 - Exercise 2

let pie:string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)


// Day 3 - Exercise 3

let isDouglas: boolean
isDouglas = true
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)



// Day 3 - Exercise 4

const integer:number =  6;
const float : number = 6.66;
const hex:number = 0xf00d;
const binary:number = 0b1010011010;
const octal:number = 0o744;
const negZero = -0;
const actuallyNumber:number = NaN;
const largestNumber :number= Number.MAX_VALUE;
const mostBiglyNumber:number = Infinity;

const members: number[] = [
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


// Day 3 - Exercise 5

type stringsAndNumbers = [number, string, number, string, number, string];
type allMyArrays = [number[], string[],stringsAndNumbers];

const sequence:number[] = Array.from(Array(10).keys());
const animals:string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers:stringsAndNumbers= [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays:allMyArrays = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);

*/
let code: number = 10;

console.log(code);