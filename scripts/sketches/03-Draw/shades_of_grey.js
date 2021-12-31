function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
    let dpi = Math.PI / (256 * 2);

    let centerX = width / 2;
    let centerY = height / 2;

    noStroke();
    let theta0 = null;
    let theta1 = null;
    for (let i = 0; i < 256; i++) {
        fill(color(i));
        theta0 = dpi * i;
        theta1 = dpi * i + dpi;
        arc(centerX, centerY, width, height, theta0, theta1);
        arc(centerX, centerY, width, height, theta0 + Math.PI, theta1 + Math.PI);
        fill(color(256-i));
        arc(centerX, centerY, width, height, theta0 + (Math.PI / 2), theta1 + (Math.PI / 2));
        arc(centerX, centerY, width, height, theta0 + (3 * Math.PI / 2), theta1 + (3 * Math.PI / 2));
    }
}