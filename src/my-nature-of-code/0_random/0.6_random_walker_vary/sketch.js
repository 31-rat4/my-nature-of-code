class Walker {

	constructor(size, velocity) {

		this.x = width / 2;
		this.y = height / 2;
		this.velocity = velocity;
		this.size = size;
		this.step_size = random(0, 20);
	}
	draw() {
		stroke(0);
		ellipse(this.x, this.y, this.size, this.size);
	}
	step() {

		this.x += random(-1, 1) * this.step_size;
		this.y += random(-1, 1) * this.step_size;
	}
}
let walker
function setup() {
	createCanvas(500, 500);
	walker = new Walker(2, 2);
	background(255);
	// put setup code here
}

function draw() {
	// put drawing code here
	walker.step();
	walker.draw();

}
