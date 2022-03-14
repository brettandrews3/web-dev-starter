// PluralSight JS 9: Arrays
// Array Searching and Looping

/*
// indexOf() lets us get the index of a certain value in the array:
const values = [ 'a', 'b', 'c', 'd' ];
console.log( values.indexOf('b') );     // 1
console.log( values.indexOf('e') );     // -1 because 'e' isn't in the array
*/

// filter() sorts through array, makes new array based on your criteria:
const values = [ 'a', 'b', 'c', 'd' ];
const set = values.filter(function(item) {      // assigns 'item' to each value in array 'values'
    return item > 'b';
});
console.log( set );   // c d

// find() sorts through array and returns first item that matches its criteria:
// It's common to use function() in JavaScript. In these cases, function(item) will
// be called until it returns True.
const newValues = [ 'a', 'bbb', 'c', 'Dude' ];
const found = newValues.find(function(item) {
    return item.length > 1;
})
console.log( found );  // bbb

newValues.forEach(function(item) {
    console.log(item.toUpperCase());
});   //  A BBB C DUDE