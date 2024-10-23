const gridDiv = document.getElementById("grid");
const gridSize = 20;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");

    gridCell.classList.add("grid-cell");
    gridDiv.appendChild(gridCell);
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = "black";
    });
  }
}
createGrid(gridSize);
