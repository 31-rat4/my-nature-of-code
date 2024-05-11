class Walker{
	
	constructor(size,velocity){

		this.x = width / 2;
		this.y = height / 2;
		this.velocity = velocity;
		this.size = size;
	} 
	show() {
		stroke(0);
		ellipse(this.x, this.y,this.size,this.size);
	}
	step() {
		let choice = floor(random(4));
		let xstep = floor(random(3)) - 1;
		let ystep = floor(random(3)) - 1;

		this.x = this.x + (xstep * this.velocity);
		this.y = this.y + (ystep * this.velocity);
	}
}
let walker
function setup() {
	createCanvas(500, 500);
	walker = new Walker(10,5);
	background(255);
	// put setup code here
}

function draw() {
	// put drawing code here
	walker.step();
	walker.show();

}
