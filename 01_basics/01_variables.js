const accountId = 144553
let accountEmail = "adin@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ad@ad.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
