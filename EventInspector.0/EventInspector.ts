const infoBox = document.getElementById("infoBox") as HTMLSpanElement;

document.body.addEventListener("mousemove", (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  const tagName: string = target.tagName.toLowerCase();
  const name: string = target.id || "no id";
  const x: number = event.clientX;
  const y: number = event.clientY;

  infoBox.innerHTML = `Tag: ${tagName}<br>Name: ${name}<br>X: ${x}<br>Y: ${y}`;
  infoBox.style.left = `${x + 10}px`;
  infoBox.style.top = `${y + 10}px`;
});