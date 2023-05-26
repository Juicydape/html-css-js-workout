function main() {
  const boxNode = document.querySelector(".box");
  const borderColors = ["tomato", "royalblue", "magenta", "pink"];

  let i = 0;

  function handleBorderColorChange() {
    boxNode.style.borderColor = borderColors[i];
    i = (i + 1) % borderColors.length;
    if (i === 0) clearInterval(timer);
  }

  timer = setInterval(handleBorderColorChange, 3000);
}

main();