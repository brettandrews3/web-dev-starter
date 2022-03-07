// PluralSight JS 6: Program Flow
// Looping with do ... while()

// Use do ... while() when the code is guaranteed to run at least once.

/*
let count = 1;
do {
    console.log(count);
    count++;
} while (count < 5);
// 1 2 3 4
// It's guaranteed to run at least once because count starts at 1. It will repeat while 
// the iterator is less than 5.
*/

let i = 4;
do {
    console.log(i);
    i--;
} while (i > 0);
// Again, it's guaranteed to execute at least once because 'do' will print iterator i to
// the console BEFORE it checks while(). The while() condition is never met, so it doesn't loop.