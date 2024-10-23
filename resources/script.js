const gridDiv = document.getElementById("grid");
const gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");

    gridCell.classList.add("grid-cell");
    gridDiv.appendChild(gridCell);
  }
}
createGrid(gridSize);
