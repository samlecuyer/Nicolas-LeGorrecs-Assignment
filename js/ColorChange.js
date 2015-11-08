var storedColor;
var currentColor;
function colorChange( el ) {
    currentColor = el.title;
    if (storedColor != null) {
        el.style.backgroundColor = storedColor;
        el.title = storedColor;
    }
    storedColor = currentColor;
    firstClick = true;
}
