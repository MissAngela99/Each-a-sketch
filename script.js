let container = document.querySelector(".container");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit")

let rows = 16;
let columns = 16;



for (i = 0; i < rows; i++) {

    let row = document.createElement("div");
    row.setAttribute("id", "row");
    container.appendChild(row)


    for ( j = 0; j < columns; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", "column");
        row.appendChild(column);

    }

}

