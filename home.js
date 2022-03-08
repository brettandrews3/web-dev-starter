// PluralSight JS 7: Functions
// Function Expressions
/*
// Add message here. The block of code in {} will be stored in message.
function showMessage(message) {
    console.log(message);
}

// Here, whatever we enter in () will be passed to console because
// we're passing 'message' through to the console.log().
showMessage("I've got information, man!");
showMessage("What in god's name are you blathering about?");
*/

/*
// We can also pass multiple types and values in the same function:
function showMessages(message, anotherMessage) {
    console.log(message, anotherMessage);
}

showMessages('She probably kidnapped herself.', "Obviously, you're not a golfer.");
*/

let myFunction = function (message, firstName) {
    console.log(message);
    console.log(firstName);
}
myFunction('Ever thus to deadbeats,', 'Lebowski.');
// Any unsupplied parameters will be set to 'undefined'
// Always make sure that you're passing correct values to functions