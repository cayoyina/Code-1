"use strict";
const infoBox = document.getElementById("infoBox");
document.body.addEventListener("mousemove", (event) => {
    const target = event.target;
    const tagName = target.tagName.toLowerCase();
    const name = target.id || "no id";
    const x = event.clientX;
    const y = event.clientY;
    infoBox.innerHTML = `Tag: ${tagName}<br>Name: ${name}<br>X: ${x}<br>Y: ${y}`;
    infoBox.style.left = `${x + 10}px`;
    infoBox.style.top = `${y + 10}px`;
});
