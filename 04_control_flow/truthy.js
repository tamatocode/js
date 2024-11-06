const userEmail = []

if (userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
    
}

// falsy values


//  false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values
//  All other than  these are TRUE values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj.length === 0)) {
    console.log("object is empty");
    
}


// Nullish Coalescing Operatoe (??): null Undefined

// let val1 = 1 ?? 2
// let val2 = null ?? 2
// let val1 = undefined ?? 2
val1 = null ?? 10 ?? 100

console.log(val1);



//  TERNIARY OPERATOR

const money = 200
money >= 100 ? console.log("fat money") : console.log("slim money");


