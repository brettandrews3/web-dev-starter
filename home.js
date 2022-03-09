// PluralSight JS 8: Objects and the DOM
// Object Methods

// Using our object from the last commit, we're adding a method to it:

let person = {
    name: 'John',
    age: 42,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge);
    }
};

person.showInfo(34);    // 'John is 34' in showMessage