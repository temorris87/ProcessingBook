function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
    fill(255);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 80, 80);
    }
}