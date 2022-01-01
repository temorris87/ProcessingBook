let nRow = 128;
let nCol = 128;

function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
    noStroke();

    let xPercentage = nRow * (mouseX / width);

    let dx = width / nRow;
    let dy = height / nCol;

    for (let i = 0; i < nRow; i++) {
        for (let j = 0; j < nCol; j++) {
            drawTile(i * dx, j*dy, dx, dy, color(2 * i, 2 * j, 2 * xPercentage));
        }
    }
}

function drawTile(x, y, tileWidth, tileHeight, fillColor) {
    noStroke();
    fill(fillColor);
    rect(x, y, tileWidth, tileHeight);
}