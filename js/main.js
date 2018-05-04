let createButton = document.querySelector("#create-grid");
createButton.addEventListener("click", createGrid);

function createGrid() {
  if(document.querySelector("table")) {
    document.querySelector("table").remove();
    document.querySelector("#canvas-text").remove();
  }
  
  let gridWidth = document.querySelector("#grid-width").value;
  let gridHeight = document.querySelector("#grid-height").value;
  document.querySelector("#picker-control").reset();
  
  if(((gridHeight === "")||(gridWidth === ""))) {
    alert("You didn't enter the grid height and width");
  } else if((gridHeight === "0")||(gridWidth === "0")) {
    alert("Hey you entered an invalid grid height or width");
  } else {
    let paintArea = document.querySelector("#paint-area");
    let table = document.createElement("table");
    let row, col;
    for(let i = 0; i < gridHeight; i++) {
    row = document.createElement("tr");
      for(let m = 0; m < gridWidth; m++) {
        col = document.createElement("td");
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    let canvasText = document.createElement("p");
    canvasText.setAttribute("id","canvas-text");
    canvasText.textContent = "Design Canvas";
    paintArea.appendChild(canvasText);
    paintArea.appendChild(table);
    let cells = document.querySelectorAll("td");
    for(let n = 0; n < cells.length; n++) {
      cells[n].addEventListener("click", colorGrid);
    }
  }
}
function colorGrid(){
  let color = document.querySelector("#color").value;
  this.style.background = color;
}