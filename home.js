// PluralSight JS 10: Scope and Hoisting
// Global Scope

/*
let productId = 12345;

function showProductId() {
    console.log(productId);
};
showProductId();    // 12345
*/

// To reduce global scope pollution, create 1 variable in the global
// scope and make that a constant:

const app = {
    productId: 12345,
    userName: 'King Roland of Druidia',
    orderNumber: 67890
};

// Be sure to call the property from the global variable here (app.propertyName):
function showProductId() {
    console.log(app.productId);
};

showProductId();    // 12345