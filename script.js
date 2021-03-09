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
