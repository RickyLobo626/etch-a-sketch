'use strict';

const container = document.getElementById("container");
const blackBtn = document.getElementById("black");
const rgbBtn = document.getElementById("rgb");
const toolBtns = document.querySelectorAll('button');
let chosen = 'black';

// Create grid
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

// Choose tool/color
toolBtns.forEach(colorBtn => {
  colorBtn.addEventListener('click', () => {
    chosen = colorBtn.value;
    
    squares.forEach(square => {
      if (chosen == 'clear') {
        square.style.backgroundColor = 'white';
      }
    });
  });
});

// Change color on mouseover
squares.forEach(square => {
  square.addEventListener('mouseover', () => {

    if (chosen == 'rgb') {
      square.style.backgroundColor = `rgb(${[...getRandomRGB()]})`;
    } else {
      square.style.backgroundColor = chosen;
    }
    
  });
});

// Get random rgb value
function getRandomRGB() {
  let colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(Math.floor((Math.random() * 256)));
  }
  
  return colors;
}