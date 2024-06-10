let container = document.querySelector(".container");
let userInput = document.querySelector(".input").value;
let userClick = document.querySelector(".gridButton");

let row = document.createElement("div");
row.setAttribute("id", "row");
let column = document.createElement("div");
column.setAttribute("id", "column");
let columns = 16;


    for (i = 0; i < columns; i++) {

        let row = document.createElement("div");

        container.appendChild(row)


        for ( j = 0; j < columns; j++) {
            let column = document.createElement("div");
            column.setAttribute("id", "column");
            row.appendChild(column);

        }

    }

const singleSquare = document.querySelectorAll("#column")

const squares = Array.from(singleSquare)
