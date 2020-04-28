const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const resize = document.querySelector("#resize");


createGrid();

function createGrid() {
    let gridNum = document.querySelector("#gridNum");

    let grid = prompt("enter grid number");

    for(i=0; i<(Math.pow(grid, 2)); i++){
        let createDiv = document.createElement("div");
        container.appendChild(createDiv);
    }

    gridNum.innerText = grid + " x " + grid;

    container.style.setProperty("--colNum", grid);
    container.style.setProperty("--rowNum", grid); 
}

function clearGrid(e) {
    let gridItems = document.querySelectorAll('div');
    gridItems.forEach(div => {
        div.style.backgroundColor = "aquamarine";
    });
}

resize.addEventListener("click", (e) => {
    location.reload();
})

reset.addEventListener("click", clearGrid);

container.addEventListener("mouseover", (e) => {
    event.target.style.backgroundColor = "black";
});