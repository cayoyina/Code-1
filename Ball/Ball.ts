namespace Ballz {
    type Vector = { x: number, y: number };

    const position: Vector = { x: 100, y: 100 };
    const velocity: Vector = { x: 1, y: 1 };
    let ball: HTMLSpanElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        ball = document.querySelector("span");
        move();

    }

    function move(): void {
        position.x += velocity.x;
        position.y += velocity.y;

        ball.style.transform = "matrix(50, 3, -3, 50, " + position.x + ", " + position.y + ")";
        setTimeout(move, 16);
        console.log("Ball bewegt sich :D ... FÜR IMMER");
    }
}

// LINK file:///C:/Users/cayoy/Desktop/HFU/CODE%201/test.html/Ball/Ball.html