namespace Ballz {
    type Vector = { x: number, y: number };

    const position: Vector = { x: 100, y: 100 };
    const velocity: Vector = { x: 10, y: 10 };

    type Ball = {
        element: HTMLSpanElement;
        position: Vector,
        velocity: Vector

    }


    window.addEventListener("load", handleLoad);
    let ball: Ball;

    function handleLoad(): void {
        ball = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 10, y: 10 }
        }
        document.body.appendChild(ball.element);
        move();

    }

    function move(): void {
        ball.position.x += ball.velocity.x;
        ball.position.y += ball.velocity.y;

        ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
        ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;



        ball.element.style.transform = "matrix(50, 3, -3, 50, " + ball.position.x + ", " + ball.position.y + ")";
        setTimeout(move, 20);
        console.log("Ball bewegt sich :D ... FÜR IMMER");
    }
}

// LINK file:///C:/Users/cayoy/Desktop/HFU/CODE%201/test.html/Ball/Ball.html