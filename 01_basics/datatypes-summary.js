// #Primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

//console.log(id === anotherId);

 // const bigNumber = 123456666666666666654n



//Refrence (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","ironman","batman"];   //this is an Array
let myObj = {                  // this is an object
    name: "adin",
    age:19,
}

const myFunction = function(){
    console.log("Hello world");    
}

//console.log(typeof id);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory types :-

// Stack(Primitive(Boolean, Number, String, Symbol, Undefined, Null, BigInt))
// Heap(Non-Primitive (Objects , Functions , Arrays)) 

let myYoutubename = "adinazam"

let anothername = myYoutubename
anothername = "adin"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "adin@google.com"

console.log(userOne.email);
console.log(userTwo.email);
