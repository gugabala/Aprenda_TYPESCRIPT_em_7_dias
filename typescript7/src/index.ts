/*

// Day 7 - Exercise 1

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut.'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver.'
    }
];

function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);



// Day 7 - Exercise 2

class Animal {
    constructor(public name:string) {}
    move(meters: number) {
      console.log(`${this.name} moved ${meters}m.`)
    }
  }

  class Snake extends Animal{
     move(meters: number) {
      console.log('Slithering...')
      super.move(meters)
    }
  }

  class Pony extends Animal{
    move(meters: number) {
      console.log('Galloping...')
      super.move(meters)
    }
  }


  const sammy = new Snake("Sammy the Snake")
  sammy.move(5)

  const pokey = new Pony("Pokey the Pony")
  pokey.move(34)





  // Day 7 - Exercise 3

class Furniture {
    constructor(protected manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(`This is a desk made by ${this.manufacturer}`)
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(`This is a chair made by ${this.manufacturer}`)
    }
  }

  const desk = new Desk()
  desk.kind()
   desk.manufacturer // Deve retornar um erro

  const chair = new Chair()
  chair.kind()
   chair.manufacturer // Deve retornar um erro


   
 

// Day 7 - Exercise 4

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

 capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply= function(x: number, y: number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));
   
   
*/


// Day 7 - Exercise 5

function layEggs(quantity:number, color:string) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
  }

  layEggs(10,'white');
