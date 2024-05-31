let time = 0.0;
let jump = 1;
function setup() {
	createCanvas(360, 240);
}

function draw() {
	background(255);
	let xoff = time;
	noFill();
	stroke('orange');
	strokeWeight(2);
	beginShape();
	for (let i = 0; i < width; i++) {
		let y = noise(xoff) * height;
		xoff += 1;
		vertex(i, y);
	}
	endShape();
	time += 0.01;
}
