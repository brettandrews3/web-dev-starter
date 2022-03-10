// PluralSight JS 8: Objects and the DOM
// Detecting Button Clicks

/*
In this lesson, we're reviewing the SEE REVIEW button from the website 
for Trail Review: Asphalt National Park. ~ln 124 on index.html

Remove the href tag from the line. Add id="see-review" to make it
editable by JavaScript.
*/

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
} );