var c = 300

let a = 100

if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("innet value of a :",a);
    
}
 
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "adin"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    // two()
}
// one()

if (true){
    const username = "adin"
    if (username==="adin"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// *************INTERESTING****************************



console.log(addOne(5));
function addOne(num){
    return num + 1
}




console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
