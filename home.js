// PluralSight JS 9: Arrays
// Manipulating Arrays

/*
// push() adds items to the end of an array:
const values = [ 'a', 'b', 'c' ];
values.push('d');

console.log( values );          // a b c d
*/

/*
// pop() removes the last item in an array
const values = [ 'a', 'b', 'c', 'd' ];
const last = values.pop();
console.log( last );     // d
*/

/*
// shift() drops the first item in the array:
const values = [ 'a', 'b', 'c', 'd' ];
const first = values.shift();
console.log( first );           // a
console.log ( values );         // b c d
*/

/*
// unshift() adds a new first item to the array:
const values = [ 'b', 'c', 'd' ];
values.unshift('a');
console.log( values );          // a b c d
*/

// Putting it all together:
const values = [ 'a', 'b', 'c' ];
values.push( 'd', 'e', 'f' );
console.log( values );          // a b c d e f

const last = values.pop();
console.log( values, last );    // [a b c d e] f

const first = values.shift();
console.log( values, first );   // [b c d e] a

values.unshift('hello', 'world');
console.log( values );          // [hello world b c d e]