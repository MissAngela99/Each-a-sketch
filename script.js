let body = document.querySelector("body")
let container = document.querySelector(".container");
let input = document.querySelector("input").value;
let bunton = document.querySelector("button");
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

const square = document.querySelectorAll(".column");
square.forEach((column) => {
    column.addEventListener("mouseenter", () =>{
        column.style.backgroundColor = 'black'
    })
})