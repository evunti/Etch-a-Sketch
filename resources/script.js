const gridDiv = document.getElementById("grid");
const gridSize = 16;

function createGrid(size) {
  gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set new number of columns
  gridDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");

    gridCell.classList.add("grid-cell");
    gridDiv.appendChild(gridCell);
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = "black";
    });
  }
}
createGrid(20);

const newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", function () {
  let size;
  do {
    size = prompt("Enter the number of squares per side (max 100):");
    if (size === null) return;
    size = parseInt(size);
  } while (isNaN(size) || size < 1 || size > 100);

  gridDiv.innerHTML = "";
  createGrid(size);
});

const shakeButton = document.getElementById("shake");
shakeButton.addEventListener("click", function () {
  setTimeout(() => {
    window.location.reload();
  }, 900);
});

shakeButton.addEventListener("click", function () {
  setTimeout(() => {
    gridDiv.classList.add("shake");
  }, 500);
});
