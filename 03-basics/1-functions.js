


function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }


function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1 + number2
    
}




// addTwoNumbers(3, "a")
const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function justLoggedIn(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(justLoggedIn("adin"));
// console.log(justLoggedIn());

function calculateCartPrice(val1,val2,...num1){
    return(num1);
    

}

// console.log(calculateCartPrice(200,300,400));

const user ={
    name:"adin azam",
    screentime: "15 hours"
}

function handleUser(user){
    console.log(`user's name is ${user.name} and his screentime is ${user.screentime}`);
    
}

// handleUser(user)

handleUser({
    name:"me",
    screentime:"2hr"
})

const myNewArray = [1,10,100,1000,10000]

function secondValue(getarray){
    return getarray[1]
}
// console.log(secondValue(myNewArray));
console.log(secondValue([2000,300]));
