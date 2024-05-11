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
		let r = random(1);
		if (r < 0.4) {
			this.x++;

		} else if (r < 0.6) {
			this.x--;
		} else if (r < 0.8) {
			this.y++;
		} else {
			this.y--;
		}
	}
}
let walker
function setup() {
	createCanvas(500, 500);
	walker = new Walker(2,2);
	background(255);
	// put setup code here
}

function draw() {
	// put drawing code here
	walker.step();
	walker.show();

}
