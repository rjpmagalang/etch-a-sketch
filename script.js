const container = document.querySelector("#container");
const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
const black = document.querySelector("#black");
const shade = document.querySelector("#shade");
const random = document.querySelector("#random");
const btns = document.getElementsByTagName("button");

function isButtonActive() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        });
      }
}

isButtonActive();

function inputNum() {
    return input.value;
}

function addInputNum() {
    if (event.keyCode === 13) {  
        container.textContent = "";
        createGrid();
    }
  }

function createGrid() {
    let gridNum = document.querySelector("#gridNum");
    let grid = inputNum();

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
    container.textContent = "";
    createGrid();
}

function blackColor() {
    let cells = document.querySelectorAll('div');
    
    cells.forEach(div => {
        div.style.opacity = 1;
        div.addEventListener("mouseover", () => {
            event.target.style.backgroundColor = "black";
        });
    });
    
}

function randomNum() {
    return Math.floor(Math.random()*255);
}

function randomColor() {
    let cells = document.querySelectorAll('div');

    cells.forEach(div => {
        div.style.opacity = 1;
        div.addEventListener("mouseover", () => {
            const r = randomNum();
            const g = randomNum();
            const b = randomNum();
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
