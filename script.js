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


            let singleSquare = 600 / columns;
            let columnSize = document.querySelector('.column');
            columnSize.style.width = `${singleSquare}px`;
            columnSize.style.height = `${singleSquare}px`;

        };

    };




button.addEventListener("click", () => {
    if (input.value <= 100) {
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
            let columnShadow = +column.style.opacity || 0;
            column.style.backgroundColor = 'black';
            column.style.opacity = Math.min(columnShadow + 0.1, 1);
            column.style.border = '';


            });
 
        });

        let singleSquare = 600 / columns;
        let columnSize = document.querySelectorAll('.column')
        columnSize.forEach((column) => {
            column.style.width = `${singleSquare}px`;
            column.style.height = `${singleSquare}px`;
            
        });
    } else if (input.value > 100) {
        columns = 0
        alert("Too high!");
    };

});

const square = document.querySelectorAll(".column");
square.forEach((column) => {
        column.addEventListener("mouseenter", () =>{
            let columnShadow = +column.style.opacity || 0;
            column.style.backgroundColor = 'black';
            column.style.opacity = Math.min(columnShadow + 0.1, 1);
            column.style.border = '';
        });
});
                let singleSquare = 600 / columns;
                let columnSize = document.querySelectorAll('.column')
                columnSize.forEach((column) => {
                    column.style.width = `${singleSquare}px`;
                    column.style.height = `${singleSquare}px`;
                });
