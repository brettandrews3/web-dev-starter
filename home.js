// PluralSight JS 9: Arrays
// slice() and splice()
/*
// slice() grabs the values from an array at their index numbers:
const values = [ 'a', 'b', 'c', 'd' ];
const newValues = values.slice(1, 2); // (where we start, ending element [not included])
console.log( newValues );  // b
console.log( values );     // a b c d [initial array is unaltered]  

values.splice(1, 1);   // (index of element you want to delete, # of items to delete)
console.log( values ); // a c d

values.splice(1, 0, 'foo');  // (at index 1, remove 0 items,insert 'foo' into the values array)
console.log( values );       // a foo c d
*/

/*
const values = [ 'a', 'b', 'c', 'd', 'e' ];
const newValues = values.slice(1, 4);  // start at index 1, delete to end. End item is exluded from slice()
console.log( newValues );    // b c d
*/

const values = [ 'a', 'b', 'c', 'd', 'e' ];
values.splice(2, 1);     // remove 1 item, starting at index 2 [c]
console.log( values );   // a b d e

values.splice(2, 0, 'hello'); // at index 2, add 'hello' to array without deleting anything
console.log( values );        // a b hello d e

values.splice(2, 1, 'Jerry'); // at index 2, delete hello and add Jerry
console.log( values );        // a b Jerry d e