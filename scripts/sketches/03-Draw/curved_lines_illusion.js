function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
    let n = 2000;
    let dx = width / n;
    let dy = height / n;

    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= n; i++) {
        stroke(0, 0, Math.abs(256 * (i / n) - 128));
        line(centerX, centerY, i * dx, 0);
        line(centerX, centerY, i * dx, height);
        stroke(0, 0, 256 - Math.abs(256 * (i / n) - 128));
        line(centerX, centerY, 0, i * dy);
        line(centerX, centerY, width, i * dy);
    }

    for (let i = 0; i <= n; i++) {
        stroke(256 * ((n-i) / n));
        line(i * dx, 0, width, i * dy);
        line(i * dx, height, 0, i * dy);
        line(i * dx, height, width, (n-i) * dy);
        line(i * dx, 0, 0, (n-i) * dy);
    }
}