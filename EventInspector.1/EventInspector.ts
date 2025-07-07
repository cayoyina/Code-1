window.addEventListener("load", handleLoad);

function handleLoad(): void {
  document.addEventListener("mousemove", setInfoBox);

  const allTargets: EventTarget[] = [
    document,
    document.body,
    ...Array.from(document.getElementsByTagName("div"))
  ];

  for (const target of allTargets) {
    target.addEventListener("click", logInfo);
    target.addEventListener("keyup", logInfo);
  }

  // CustomEvent-Listener auf document
  document.addEventListener("customEvent", (event: Event) => {
    console.log("📢 CustomEvent empfangen:", event);
  });

  // Button-Listener für CustomEvent-Auslösung
  const button = document.getElementById("customButton");
  button?.addEventListener("click", () => {
    console.log("BUTTON CLICKED");

    const customEvent = new CustomEvent("customEvent", {
      bubbles: true,  // wichtig! damit es das document erreicht
      detail: { message: "Button wurde geklickt!" }
    });
    button.dispatchEvent(customEvent);
  });
}

function setInfoBox(event: MouseEvent): void {
  const span = document.getElementById("infoBox") as HTMLSpanElement;

  const message = "HALLO Ich bin eine Infobox"
  const x: number = event.clientX;
  const y: number = event.clientY;
  const target = event.target as HTMLElement;
  const name: string = target.id || "no id";
  const tag: string = target.tagName.toLowerCase();

  
  span.innerHTML = `Tag: ${tag}<br>Name: ${name}<br>X: ${x}<br>Y: ${y}`;
  span.style.left = `${x + 10}px`;
  span.style.top = `${y + 10}px`;
  
}

function logInfo(event: Event): void {
  console.log("Type:", event.type);
  console.log("Target:", event.target);
  console.log("CurrentTarget:", event.currentTarget);
  console.log("Whole Event:", event);
}