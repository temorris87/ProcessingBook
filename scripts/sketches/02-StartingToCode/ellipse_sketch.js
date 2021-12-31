function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
    background(204);

    let width = windowWidth * 0.8;
    let height = windowHeight * 0.8;

    let dx = width / 10;
    let dy = height / 10;

    let c = color(0);

    for (let i = -7; i < 10; i++) {
        c = color((255 / 17) * (i+7));
        fill(c);
        noStroke();
        ellipse(width / 2, height / 2, (width - 0.9 * dx *  i), (height - 0.5 * dy *  i));
    }
}