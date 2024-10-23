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

const shakeButton = document.getElementById("shake");
shakeButton.addEventListener("click", function () {
  setTimeout(() => {
    window.location.reload(); // Reset page after a delay
  }, 900);
});

shakeButton.addEventListener("click", function () {
  setTimeout(() => {
    gridDiv.classList.add("shake"); // Reset page after a delay
  }, 500);
});
// Event listener for click to add the shaking animation
// gridDiv.classList.add("shake");
// gridDiv.classList.remove("shake");
// }, 500);
