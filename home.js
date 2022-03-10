// PluralSight JS 8: Objects and the DOM
// Showing and Hiding DOM Elements

/*
In this lesson, we're reviewing the SEE REVIEW button from the website 
for Trail Review: Asphalt National Park. ~ln 124 on index.html

Remove the href tag from the line. Add id="see-review" to make it
editable by JavaScript.
*/
/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
} );
*/

// Lesson 8.9 additions. See <div> in index.html, ~ln 130 for context.

/*
// Edits to button below will grab the element 'review', then remove the 
// do-nothing 'd-none' class from the review element in index.html.
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');

    review.classList.remove('d-none');
});
*/

// Toggle the review by clicking the button again. Add if statement to do this:
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }

});