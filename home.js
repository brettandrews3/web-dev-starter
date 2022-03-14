// PluralSight JS 10: Scope and Hoisting
// var and Hoisting
/*
// productId = 456;

console.log(productId); // undefined (can't call variable before it's declared)

var productId = 123;
*/

// Hoisting: you can call a function before you define it
showProductId();    // 123

function showProductId() {
    console.log(123);
}