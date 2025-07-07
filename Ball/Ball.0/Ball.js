"use strict";
var Ballz;
(function (Ballz) {
    const position = { x: 100, y: 100 };
    const velocity = { x: 10, y: 10 };
    window.addEventListener("load", handleLoad);
    let ball;
    function handleLoad() {
        ball = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 10, y: 10 }
        };
        document.body.appendChild(ball.element);
        move();
    }
    function move() {
        ball.position.x += ball.velocity.x;
        ball.position.y += ball.velocity.y;
        ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
        ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
        ball.element.style.transform = "matrix(50, 3, -3, 50, " + ball.position.x + ", " + ball.position.y + ")";
        setTimeout(move, 20);
        console.log("Ball bewegt sich :D ... FÜR IMMER");
    }
})(Ballz || (Ballz = {}));
// LINK file:///C:/Users/cayoy/Desktop/HFU/CODE%201/test.html/Ball/Ball.html
