let body = document.querySelector("body")
let container = document.querySelector(".container");
let input = document.querySelector("input");
let button = document.querySelector("button");
let row = document.createElement("div");

row.setAttribute("id", "row");
let column = document.createElement("div");
column.setAttribute("class", "column");

let columns = 16;

    for (i = 0; i < columns; i++) {

        let row = document.createElement("div");
        container.appendChild(row)


        for ( j = 0; j < columns; j++) {
            let column = document.createElement("div");
            column.setAttribute("class", "column");
            row.appendChild(column);

        }

    }
button.addEventListener("click", () => {

    columns = input.value;
    container.textContent = '';

    for (i = 0; i < columns; i++) {

        let row = document.createElement("div");
        container.appendChild(row)


        for ( j = 0; j < columns; j++) {
            let column = document.createElement("div");
            column.setAttribute("class", "column");
            row.appendChild(column);

        }

    }

    const square = document.querySelectorAll(".column");
    square.forEach((column) => {
        column.addEventListener("mouseenter", () =>{
            column.style.backgroundColor = 'black'
    })
})
});


const square = document.querySelectorAll(".column");
square.forEach((column) => {
    column.addEventListener("mouseenter", () =>{
        column.style.backgroundColor = 'black'
    })
})