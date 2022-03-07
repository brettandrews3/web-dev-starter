// PluralSight JS 6: Program Flow
// Comparing === and ==

/*
if (1 === '1') {
    showMessage('true');
}
else {
    showMessage('false');   // returns 'false' because int 1 != string '1'
}
*/

// **When using '==', JS attempts to convert types--thus, int 1 == string '1'
if (1 == '1') {
    showMessage('true');
}
else {
    showMessage('false');
}