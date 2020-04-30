const container = document.querySelector("#container");
const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
const black = document.querySelector("#black");
const shade = document.querySelector("#shade");
const random = document.querySelector("#random");

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

function clearGrid() {
    let bodyStyle = getComputedStyle(document.body);
    let cells = document.querySelectorAll('div');

    cells.forEach(div => {
        div.style.backgroundColor = bodyStyle.getPropertyValue("--bgcolor");
    });
}

function blackColor() {
    let cells = document.querySelectorAll('div');
    
    cells.forEach(div => {
        div.addEventListener("mouseover", () => {
            event.target.style.backgroundColor = "black";
        });
    });
    
}

function randomColor() {
    let cells = document.querySelectorAll('div');

    cells.forEach(div => {
        div.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random()*255);
            const g = Math.floor(Math.random()*255);
            const b = Math.floor(Math.random()*255);
            const rgb = "rgb(" + r + ", " + g+ ", " + b + ")";
            event.target.style.backgroundColor = rgb;
        });
    });

}

function shadeColor() {
    let cells = document.querySelectorAll('div');

cells.forEach(div => {
    div.addEventListener("mouseover", (event) => {
        let num = Number(event.target.style.opacity);

        event.target.style.backgroundColor = "black";
        event.target.style.opacity = num + 0.2;     
    })
});
}

input.addEventListener("keypress", addInputNum);
reset.addEventListener("click", clearGrid);
black.addEventListener("click", blackColor);
random.addEventListener("click", randomColor);
shade.addEventListener("click", shadeColor);
