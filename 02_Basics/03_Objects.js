// 1 singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Yada",
    [mySym] : "myKey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ("Monday", "Saturday")
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// //console.log(typeof [mySym])
// console.log(jsUser[mySym])

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "miscrofsot@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

