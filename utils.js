// Whatever we pass to (message) displays in .textContent = message;
/*
Lesson 8.6: We're using the DOM on this page. Keyword 'document' refers
to the web page.
- DOM 'Element': a tag in the markup, e.g. <h1></h1>
    - Access the element by its id: <h1 id="message"...</h1>
    - Get the element by calling this method on utils.js:
        function showMessage...
            *document.getElementById('message').textContent = message;"
*/
function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// 'percent-off' element is called in index.html, ln 62
function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}