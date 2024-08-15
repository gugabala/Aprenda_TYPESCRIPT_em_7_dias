/*
class Movies {
    // readonly id : number;
    // name : string;

    constructor(public readonly id : number,
        public name : string,
        private price:number) {
        // this.id = id;
        // this.name = name;
    }
}

let movie1 = new Movies(1, 'The Shawshank Redemption');
//movie1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(movie1);



class HotelRooms{
    [roomNumber: string]: string;

}

let room = new HotelRooms();

room.A201 = 'Gustavo'
room.A202 = 'Maria'
room.A203 = 'Jose'

console.log(room);

 
class Peson {
    constructor(public fistName: string,public lastName:string, public age: number) {}
    greet() {
        console.log(`Hello ${this.fistName} ${this.lastName}`);
    }
    
    
}

class Clietes extends Peson {
    balance() {
        console.log('Balance: 1000');
    }
}

let clinet1 = new Clietes('Gustavo', 'Garcez', 30);

console.log(clinet1.greet());
console.log(clinet1.balance());



*/

class Peson {
    constructor(public fistName: string,public lastName:string, public age: number) {}
    get greet() {
        return this.fistName + ' ' + this.lastName;
    }
    
    
}

class Clietes extends Peson {
    override get greet() {
        return 'Dear '+ super.greet;
    }
}

class Staff extends Peson {
    override get greet() {
        return 'Hi '+super.greet;
    }
}

let cliente = new Clietes('Gustavo', 'Garcez', 30);

let funcionario = new Staff('Jão', 'Silva', 30);


console.log(cliente.greet);
console.log(funcionario.greet);
