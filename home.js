// PluralSight JS 6: Program Flow
//Truthy and falsy
/*
// JS doesn't understand floating decimals like this...
if (1.1 + 1.3 !== 2.4) {
    showMessage('true');
}
*/
/*
// ...so fix this by putting the floats in () to make an object:
if ( (1.1 + 1.3).toFixed(2) !== 2.4) {
    showMessage('true');
}
*/
// This returns a string. Add '+' before the float object to convert:
if ( +(1.1 + 1.3).toFixed(2) !== 2.4) {
    showMessage('true');
}
// Convert to a fixed decimal place for proper literal comparisons.