// PluralSight JS 6: Program Flow
// Conditionals Using if():

if (5 === 5) {
    console.log('Yes');
}

if (5 > 10) {
    console.log('No');
}

if (5 >= 5) {
    console.log('Yes');
}

let state = 'FL';
let taxPercent = 0;

if (state === 'FL') {
    taxPercent = 7;
}

if (state != 'FL') {
    taxPercent = 0;
}
console.log(taxPercent);   // 7