// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Adin",
    "full name": "adin azam",
    mySym: "leggo",
    age: 19,
    location: "New Delhi",
    email: "adin@gmail,Com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "adin@gpt.com"
// Object.freeze(jsUser)
jsUser.email = "adin@gmail.commm"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js User");
}
jsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

