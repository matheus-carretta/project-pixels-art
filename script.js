let numberPixels = 5;

for (let pixelRows = 0; pixelRows < numberPixels; pixelRows += 1) {
  let pixelRow = document.createElement('div');
  pixelRow.className = 'pixel-row';
  document.getElementById('pixel-board').appendChild(pixelRow);
  for (let pixelColumns = 0; pixelColumns < numberPixels; pixelColumns += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    document.querySelectorAll('.pixel-row')[pixelRows].appendChild(pixel);
  }
}

let firstPalette = document.getElementById('black');
let secondPalette = document.getElementById('blue');
let thirdPalette = document.getElementById('green');
let fourthPalette = document.getElementById('yellow');

// Achei a função neste site: https://www.w3schools.com/howto/howto_js_remove_class.asp
function removeSelectedClass() {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
}

function getFirstPaletteColor() {
  removeSelectedClass();
  firstPalette.className += firstPalette.className = ' selected';
}

function getSecondPaletteColor(){
  removeSelectedClass();
  secondPalette.className += secondPalette.className = ' selected';
}

function getThirdPaletteColor(){
  removeSelectedClass();
  thirdPalette.className += thirdPalette.className = ' selected';
}

function getFourthPaletteColor(){
  removeSelectedClass();
  fourthPalette.className += fourthPalette.className = ' selected';
}

firstPalette.addEventListener('click', getFirstPaletteColor);
secondPalette.addEventListener('click', getSecondPaletteColor);
thirdPalette.addEventListener('click', getThirdPaletteColor);
fourthPalette.addEventListener('click', getFourthPaletteColor);