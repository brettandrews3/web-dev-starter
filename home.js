// PluralSight JS 6: Program Flow
// if()...else

let state = 'FL';
let taxPercent;    // note the empty variable here

if (state === 'FL') {
    taxPercent = 7;    // declares the variable ONLY when if() is met
}
else if (state === 'NY') {
    taxPercent = 8.875;
}
else {
    taxPercent = 0;
}

console.log(taxPercent);    // 7