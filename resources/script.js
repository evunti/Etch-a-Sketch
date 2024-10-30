const gridDiv = document.getElementById("grid");
let gridSize = 16;

function createGrid(size) {
  gridDiv.innerHTML = "";
  gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set new number of columns
  gridDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");

    gridCell.classList.add("grid-cell");
    gridDiv.appendChild(gridCell);
    gridCell.addEventListener(
      "mouseenter",
      () => {
        console.log("Mouse Enter");
        gridCell.style.backgroundColor = "black";
      },
      { once: true }
    );
  }
}

function newGrid() {
  let size;
  do {
    size = prompt("Enter the number of squares per side (max 100):");
    if (size === null) return;
    size = parseInt(size);
  } while (isNaN(size) || size < 1 || size > 100);

  gridSize = size;
  createGrid(size);
}

async function shake() {
  gridDiv.classList.add("shake");

  await sleep(500);
  gridDiv.classList.remove("shake");
  createGrid(gridSize);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

createGrid(16);
