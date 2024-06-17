let gridWidth = 600;

const div = document.querySelector(".container");

const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Etch-a-Sketch";
div.appendChild(title);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
div.appendChild(btnContainer);

const button50 = document.createElement("button");
button50.textContent = "50";
button50.classList.add("btn")
btnContainer.appendChild(button50);

const button100 = document.createElement("button");
button100.textContent = "100";
button100.classList.add("btn")
btnContainer.appendChild(button100);

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset";
buttonReset.classList.add("btn")
btnContainer.appendChild(buttonReset);


const grid = document.createElement("div");
grid.classList.add("grid");
grid.style.width = `${gridWidth}px`;
grid.style.height = `${gridWidth}px`;
div.appendChild(grid);

let h;

function makeGrid(size) {
    for (i = 0; i < (size * size); i++){
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.width = `${(gridWidth / size) - 2}px`;
        row.style.height = `${(gridWidth / size) - 2}px`;
        
        row.addEventListener("mouseenter", (e) => {
            e.target.style.background = "green";
        });
        grid.appendChild(row);
    }
}
makeGrid(16);



button50.addEventListener("click", () =>{ 
    //bila click, remove row dan masukkan size baru
        let cells = document.querySelectorAll(".row");
        for (i = 0; i < cells.length; i++) {
            let cell = cells[i];
            cell.remove();
        }
        makeGrid(50);
    
    
})

button100.addEventListener("click", () =>{
    let cells = document.querySelectorAll(".row");
    for (i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.remove();
    }
    makeGrid(100);
});

buttonReset.addEventListener("click", () =>{
    let cells = document.querySelectorAll(".row");
    for (i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.remove();
    }
    makeGrid(16);
});






