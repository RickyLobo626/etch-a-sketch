'use strict';

const container = document.getElementById("container");
let color = ['black', 'rgb'];

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "square";
  };
};

makeRows(16, 16);

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});


