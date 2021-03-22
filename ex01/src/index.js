// Only change code below this line
let myName = "Padwans";
let message = "Padwans";
// Only change code above this line
myName = "Padwans";
function myMsg(name) {
    "use strict";
    message = "Hello, " + name + "!";
    
    return message;
}
console.log(myMsg(myName));
module.exports = myMsg;