// PluralSight JS 7: Functions
// Function Scope

// Once function completes execution, any variables disappear

/*
function getSecretCode(value) {
    let code = value * 42;
    return code;
}

let secretCode = getSecretCode(2);
console.log( code );    // Uncaught ReferenceError: 'code' is not defined
// Code is undefined because we're not calling the function getSecretCode()
*/

/*
// Functions can use variables declared outside the function, so long as the variables come first:
let key = 42;

function getSecretCode(value) {
    let code = value * key
    return code;
}

let secretCode = getSecretCode(2);
showMessage( secretCode );
*/

// Functions can declare variables within their blocks that share global var name:
let key = 42;

function getSecretCode(value) {

    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

let secretCode = getSecretCode(2);
showMessage( secretCode );   // 24