function createBoard(numberPixels) {
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
}
createBoard (5);

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

function eventListenerPixels(){
  let getPixels = document.getElementsByClassName('pixel');
  for(let index = 0; index < getPixels.length; index += 1){
    getPixels[index].addEventListener('click', function(){chosenPixel(getPixels[index])});
  }
}
eventListenerPixels();

function chosenPixel(pixel){
  if(firstPalette.className === 'color selected'){
    pixel.style.backgroundColor = 'black';
  } else if(secondPalette.className === 'color selected'){
    pixel.style.backgroundColor = 'darkblue';
  } else if(thirdPalette.className === 'color selected'){
    pixel.style.backgroundColor = 'darkgreen';
  } else if(fourthPalette.className === 'color selected'){
    pixel.style.backgroundColor = 'yellow';
  }
}

function clearBoard(){
  let numberPixels = document.getElementsByClassName('pixel');
  for(let index = 0; index < numberPixels.length; index += 1){
    numberPixels[index].style.backgroundColor = 'white';
  }
}

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

let generateBoard = document.getElementById('generate-board');
let inputBoardSize = document.getElementById('board-size');
generateBoard.addEventListener('click', function(){
  if(inputBoardSize.value === ''){
    alert('Board inválido!');
  } else {
    document.getElementById('pixel-board').innerHTML = '';
    createBoard (inputBoardSize.value);
    eventListenerPixels();
  }
})