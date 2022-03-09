// PluralSight JS 8: Objects and the DOM
// Standard Built-in Objects

/*
Info used in this lesson comes from Mozilla Developer Network

- The resource includes details about arrays: groups of objects | vaLues
- Date(): includes methods like .getDate(), .getFullYear, .getUTCDate(), etc
    - Instantiate this object by calling 'new Date();'
    - A useful function: Date.toDateString() converts numerical dates to strings
*/

/*
// Get the current date and store it in a variable:
let now = new Date();
showMessage( now.toDateString() );    // Wed Mar 09 2022
*/

/*
// Testing Math values and methods from MDN:
showMessage( Math.abs(-42) );    // 42
showMessage( Math.random() );    // 0.7119836274701075
*/

let s = 'I like your style, Dude.';
showMessage( s.charAt(5) );     // e
showMessage( Number.MIN_SAFE_INTEGER );    //-9007199254740991