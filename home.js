// PluralSight JS 8: Objects and the DOM
// Passing Objects to Functions

/*
// We define message as a global variable, but we only changed it within the function:
let message = 'Hello';

function changeMessage(message) {
    message = 'Do you speak English, sir? Parle usted ingles?'
    // This variable declaration only changed the parameter, NOT the original variable
}
// changeMessage applied the variable above the function.
changeMessage(message);

showMessage(message);
*/

// 2nd example:
let person = {
    name: 'Jeffrey Lebowski',
    age: 67,
    partTime: false,
    cleftAsshole: true
};

function incrementAge(person) {
    person.age++;
}

incrementAge( person );
showMessage(person.age);   //68