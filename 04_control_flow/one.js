// // IF

// const idUserLoggedIn = true
// const temperature = 41


// if (temperature < 50){
//     console.log("less than 50");
    
// } else{

// console.log("greater than 50");
// }

//  <, > , <= , >= , = , == , === , != , !== ,

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// } else if (balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }


const idUserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (idUserLoggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
    
}

if (LoggedInFromEmail || LoggedInFromGoogle){
    console.log("user logged in");
}
