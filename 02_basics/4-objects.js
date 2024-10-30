// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = "false"


// console.log(tinderUser);

const work = {
    degrees:{
        Name : "adin",
        university:{
            du : 'IIT',
            college:{
                shaheed_sukhdev:"bsc cs",
                IIT_Madras:"BS in datascience"
            }
        }
    }
}
// console.log(work.degrees.college.IIT_Madras);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"aa" , 4:"bb"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "adin@gmail.com",
    },
    {
    id : 1,
        email : "adin@gmail.com",
    },
    {
        id : 1,
        email : "adin@gmail.com",
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("ame"));
