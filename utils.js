// Whatever we pass to (message) displays in .textContent = message;
function showMessage(message) {
    document.getElementById('message').textContent = message;
}
// 'document' refers to the whole webpage

// 'percent-off' element is called in index.html, ln 62
function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}