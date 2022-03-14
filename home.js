// PluralSight JS 9: Arrays
// Arrays in the DOM

// The website is composed of Bootstrap containers.
// Let's grab all of them to store in an array:


const containers = document.getElementsByClassName('container');
/*
console.log( containers );
// returns "HTMLCollection(8)". Click the arrow to reveal the 8 containers
// in order of appearance in the code.
*/

// Let's hide the container at index 2: the graphic with the boots.
// We'll add the display-none class to that container in order to do so:
containers[2].classList.add('d-none');
console.log(containers);