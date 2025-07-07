"use strict";
var Ballz;
(function (Ballz) {
    const position = { x: 100, y: 100 };
    const velocity = { x: 1, y: 1 };
    let ball;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        ball = document.querySelector("span");
        move();
    }
    function move() {
        position.x += velocity.x;
        position.y += velocity.y;
        ball.style.transform = "matrix(50, 3, -3, 50, " + position.x + ", " + position.y + ")";
        setTimeout(move, 16);
        console.log("Ball bewegt sich :D ... FÜR IMMER");
    }
})(Ballz || (Ballz = {}));
// LINK file:///C:/Users/cayoy/Desktop/HFU/CODE%201/test.html/Ball/Ball.html
