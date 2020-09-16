document.addEventListener("DOMContentLoaded", function () {

    const balloon = new Balloon('.anim-bg');

    document.addEventListener('mousemove', (event) => balloon.listenCursorMove(event));
})