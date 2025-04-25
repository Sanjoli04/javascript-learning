const accountId = 12234;
let accountEmail = "demo@gmail.com";
var accountPassword = "!@#$%^&*";
accountCity = "Rohtak";
// Now let's begin
/*
Prefer not to use var because of issue in block scope and functional scope.
*/
// accountId = 2; -> Not allowed
accountEmail = "hc@hc.com";
accountPassword = "#@!^%$";
accountCity = "Bengaluru";
// console.log("Account id:",accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);