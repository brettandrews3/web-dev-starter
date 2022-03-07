// PluralSight JS 6: Program Flow
// Block Scope Using let

if (true) {
    let value = 'yes';
    showMessage(value);
}

console.log(value);  // Uncaught ReferenceError: value is not defined

// If using 'var [variableName], it can appear outside the code block.
// This is not best practice.