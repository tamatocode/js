const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal){
//     console.log(`acc : ${acc} and currval : ${currVal}`);
    
//     return  acc + currVal
// }, 0)


// const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
{
    itemName: "js course",
    price: 2999,
},
{
    itemName: "py course",
    price: 3999,
},
{
    itemName: "gameDev course",
    price: 4999,
},
{
    itemName: "MobDev course",
    price: 5999,
}
]

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalPrice);
