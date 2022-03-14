// PluralSight JS 10: Scope and Hoisting
// Function Scope

/*
function showProductId() {
    let productId = 12345;
    console.log(productId);
};

showProductId();    // 12345
*/

function showProductId() {
    let productId = 12345;

    function fix() {
        let productId = 45678;
        console.log('in fix: ', productId);
    }

    fix();  // the productId 45678 goes out of scope after this function runs

    console.log('in showProductId: ', productId);
}

showProductId();    // in fix: 12345    in showProductId: 45678