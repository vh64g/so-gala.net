let cursor = document.querySelector('.cursor');

function moveCursor(e) {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
}

document.addEventListener('mousemove', e => {
    moveCursor(e);
});