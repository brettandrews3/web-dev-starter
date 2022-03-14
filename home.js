// PluralSight JS 10: Scope and Hoisting
// Undeclared Variables and Strict Mode

/*
// You can declare a variable without var | let | const.
// The variable gets assigned to window, which can get clogged
// with too many global variables:
productId = 1234;

console.log(window.productId);     // 1234
*/

// Apply strict mode and force user to define variables clearly:
'use strict';

productId = 1234;

console.log(productId);     // Uncaught ReferenceError: productId is not defined