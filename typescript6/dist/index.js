"use strict";
class Peson {
    constructor(fistName, lastName, age) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.fistName + ' ' + this.lastName;
    }
}
class Clietes extends Peson {
    get greet() {
        return 'Dear ' + super.greet;
    }
}
class Staff extends Peson {
    get greet() {
        return 'Hi ' + super.greet;
    }
}
let cliente = new Clietes('Gustavo', 'Garcez', 30);
let funcionario = new Staff('Jão', 'Silva', 30);
console.log(cliente.greet);
console.log(funcionario.greet);
