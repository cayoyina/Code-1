"use strict";
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
    const allTargets = [
        document,
        document.body,
        ...Array.from(document.getElementsByTagName("div"))
    ];
    for (const target of allTargets) {
        target.addEventListener("click", logInfo);
        target.addEventListener("keyup", logInfo);
    }
    // CustomEvent-Listener auf document
    document.addEventListener("customEvent", (event) => {
        console.log("📢 CustomEvent empfangen:", event);
    });
    // Button-Listener für CustomEvent-Auslösung
    const button = document.getElementById("customButton");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        console.log("BUTTON CLICKED");
        const customEvent = new CustomEvent("customEvent", {
            bubbles: true, // wichtig! damit es das document erreicht
            detail: { message: "Button wurde geklickt!" }
        });
        button.dispatchEvent(customEvent);
    });
}
function setInfoBox(event) {
    const span = document.getElementById("infoBox");
    const message = "HALLO Ich bin eine Infobox";
    const x = event.clientX;
    const y = event.clientY;
    const target = event.target;
    const name = target.id || "no id";
    const tag = target.tagName.toLowerCase();
    span.innerHTML = `Tag: ${tag}<br>Name: ${name}<br>X: ${x}<br>Y: ${y}`;
    span.style.left = `${x + 10}px`;
    span.style.top = `${y + 10}px`;
}
function logInfo(event) {
    console.log("Type:", event.type);
    console.log("Target:", event.target);
    console.log("CurrentTarget:", event.currentTarget);
    console.log("Whole Event:", event);
}
