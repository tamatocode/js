// // // const user = {
// //     username:"hitesh",
// //     price : 999,

// //     welcomeMessage:function(){
// //     console.log(`${this.username},welcome to this website ` );
// //     console.log(this);
    
// //     }
    
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username="adin"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "adin"
//     console.log(this.username);
    
// }
const chai = () => {
    let username = "adin"
    console.log(this.username);
    
}


// chai()





// #SIMPLE ARROW Function

// const addTwo=(num1,num2) => {
//     return num1 + num2
// }




// IMPLICIT RETURN

// const addTwo=(num1,num2) =>  num1 + num2

// const addTwo=(num1,num2) =>  (num1 + num2)

const addTwo=(num1,num2) =>  ({USERNAME:"adin"})


console.log(addTwo(10,-10));


const myArray = [2,3,4,5,6]


