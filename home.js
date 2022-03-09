// PluralSight JS 8: Objects and the DOM
// Object Properties

// Symbol() allows you to set properties in an object that only you can see:
let mySymbol = Symbol();

// Example of an object with multiple property types:
let person = {
    name: 'John',
    age: 34,
    partTime: false,
    [mySymbol]: "It's a secret to everybody."
    // [mySymbol] only accessible by code that has access to it elsewhere
};

// Change property value within an object by assigning a new value:
//person.age = 52;
// ...or use square bracket notation to make the change:
person['age'] = 16;

console.log(person.name);       // John
console.log(person.age);        // 52
console.log(person.partTime);   // false
showMessage(person.age);        // 16