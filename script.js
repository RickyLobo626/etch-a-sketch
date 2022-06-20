'use strict';

const container = document.getElementById("container");
const blackBtn = document.getElementById("black");
const rgbBtn = document.getElementById("rgb");
const toolBtns = document.querySelectorAll('button');
const slider = document.querySelector('.slider');
let current = 'black';
let squares;

// Initial grid
makeRows(slider.value, slider.value);

// Resize Grid
slider.addEventListener('click', () => {
  
  // Remove grid squares
  squares.forEach(square => {
    container.removeChild(square);
  });

  // Create new squares
  makeRows(slider.value, slider.value);
})

// Choose tool/color
toolBtns.forEach(colorBtn => {
  colorBtn.addEventListener('click', () => {
    let previous = current;
    current = colorBtn.value;

    if (current == 'clear') {
      squares.forEach(square => {
        square.style.backgroundColor = 'white';
      });
      current = previous;
    }
  });
});

// Make rows
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "square";
  };
  squares = document.querySelectorAll(".square");

  fillSquares(squares);
};

// Change color on mouseover
function fillSquares(squares) {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
  
      if (current == 'rgb') {
        square.style.backgroundColor = `rgb(${[...getRandomRGB()]})`;
      } else {
        square.style.backgroundColor = current;
      }

    });
  });
  return;
}

// Get random rgb value
function getRandomRGB() {
  let colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(Math.floor((Math.random() * 256)));
  }

  return colors;
}
