// for of

// ["", "",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello world"
for (const greet of greeting) {
    // console.log(`Each charr is ${greet}`);
    
}


// MAPS

const map = new Map()
map.set('Bihar', 'Patna')
map.set('Maharahtra', 'mumbai')
map.set('Goa', 'Panaji')
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'CoC'
}

for (const [key, value] of object) {
    console.log(key, ':-', value);
    
}