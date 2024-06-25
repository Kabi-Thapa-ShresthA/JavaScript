// # primitive datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 54546454545465454n


// #Non-primitive/ Reference Type

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction= function() {
    console.log("Hello World");
}

console.log(typeof heros);
