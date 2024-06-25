// # primitive datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 54546454545465454n


// #Non-primitive/ Reference Type

//Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction= function() {
//     console.log("Hello World");
// }

// console.log(typeof heros);


//************ Stack and Heap Memory*********** */

//Stack memory(Primitve) variable declare gareko get a copy 

// Heap Memroy(non-primitive)  original value ko reference pauxa
let myYoutubename = "Kabi"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);


let userOne = { 
    email: "usergoogle.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);