function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function drawTheGauss(sd) {
	//sd = standart deviation
	const heights = [];
	const e = 2.71828183;
	let m = 0;
	for (let i = 0; i < width + 1; i++) {
		let xcoord = map(i, 0, width, -2, 2);
		let sq2pi = sqrt(2 * PI); //square root of 2 * PI
		let xmsq = -1 * (xcoord - m) * (xcoord - m); //-(x - mu)^2
		let sdsq = sd * sd; //variance (standard deviation squared)
		heights[i] = (1 / (sd * sq2pi)) * pow(e, xmsq / sdsq); //P(x) function
	}

	// a little for loop that draws a line between each point on the graph
	stroke(getRandomInt(255), getRandomInt(255), getRandomInt(255));
	strokeWeight(5);
	noFill();
	beginShape();
	for (let i = 0; i < heights.length; i++) {
		let x = i;
		let y = map(heights[i], 0, 1, height - 2, 2);
		vertex(x, y);
	}
	endShape();
}

function setup() {
	createCanvas(800, 500);
	background(255);
	drawTheGauss(Math.random());
	drawTheGauss(Math.random());
	drawTheGauss(Math.random());
}


