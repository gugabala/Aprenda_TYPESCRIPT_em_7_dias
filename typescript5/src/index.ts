/*
class Users{
    private name: string;
    private balance: number;
    
    constructor(name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }

    addMoney(amount: number){
        this.balance += amount;
    }

    getName(): string {
        return this.name;
    }
}

const user1 = new Users('Gustavo', 1000);
const user2 = new Users('Lucas', 2000); 

console.log(user1); // Users { name: 'Gustavo', balance: 1000 }
console.log(user2); // Users { name: 'Lucas', balance: 2000 }

user1.addMoney(10);
user2.addMoney(80);

console.log(user1);  
console.log(user2);  


interface Item {    
    name: string;
    price: number;

    itemMessage(message: string): void;
}

let product1 :Item 

product1 = {
    name: 'Maçã',
    price: 10,
    itemMessage(message: string){
        console.log(message +' ' +this.name);
    }
}

product1.itemMessage('Você comprou uma');
*/

// Day 5 - Exercise 1

interface CartItem {
    id: number;
    title: string;
    variantId?: number;
}


function addToCart(item:CartItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }
 

let cartItem: CartItem = { id: 1, title: 'Apple'  };
addToCart(cartItem); 


// Day 5 - Exercise 2

interface IPessoa {
    name: string;
    age: number;
}

class Person implements IPessoa {   
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);

// Day 5 - Exercise 3

class MC {
    greet(event:string = 'party'): string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));  

  // Day 5 - Exercise 4


class Employee   { 
    constructor(public title: string,public salary: number) {  }
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);

 // Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class User implements UserSchema {
    constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1)

console.log(user.id)

user.name = 'Harold' // pode mudar
//user.id = 5 // nao pode mudar

console.log(`User:`, user) 