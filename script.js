let container = document.querySelector(".container");

let square = document.createElement("div");
square.setAttribute("id", "square")
let input = document.createElement("input");

for (let i=0; i<16; i++) {
    container.appendChild(square)
}