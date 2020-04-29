const container = document.querySelector("#container");
const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
const black = document.querySelector("#black");
const shade = document.querySelector("#shade");
const random = document.querySelector("#random");

input.addEventListener("keypress", addInputNum);

function addInputNum() {
    if (event.keyCode === 13) {  
        container.textContent = ""; 
        createGrid();
    }
  }

function createGrid() {
    let gridNum = document.querySelector("#gridNum");
    
    let grid = input.value;

    if (isNaN(grid)){
        alert("not a number");
        location.reload();
    } else if (grid > 100) {
        alert("the number you entered is greater than 100");
        location.reload();
    }

    for(i=0; i<grid*grid; i++){
        let createDiv = document.createElement("div");
        container.appendChild(createDiv);
    }

    input.value === "" ? gridNum.innerText = "" : gridNum.innerText = grid + " x " + grid;

    container.style.setProperty("--colNum", grid);
    container.style.setProperty("--rowNum", grid); 
}

reset.addEventListener("click", clearGrid);

function clearGrid() {
    let gridItems = document.querySelectorAll('div');
    gridItems.forEach(div => {
        div.style.backgroundColor = "aquamarine";
    });
}

black.addEventListener("click", blackColor);

function blackColor() {
    container.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = "black";
    });
}

random.addEventListener("click", randomColor);

function randomColor() {
    container.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        const rgb = "rgb(" + r + ", " + g+ ", " + b + ")";
        event.target.style.backgroundColor = rgb;
    });
}

shade.addEventListener("click", shadeColor);

function shadeColor() {
    let num = 0;
    num = num + 0.1;

    container.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = "rgba(0, 0, 0, " + (num++ * 0.1) + ")";     
    })
}
