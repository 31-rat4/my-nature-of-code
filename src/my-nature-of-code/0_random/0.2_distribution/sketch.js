let randomCounts = [];
let divisions;
let end_line;

class EndLine {
	constructor(positionX,positionY){
		this.positionX = positionX ;
		this.positionY = positionY ;
	}
	draw(){
		line(0,this.positionY,width,this.positionY);
	}
}

function setup() {
	createCanvas(300,300);
	divisions = 20;
	
	let i = 0 ;
	while(divisions > randomCounts.length){
		randomCounts[i] = 0 ;
		i++;
	}

}


function draw() {
	background(255);
	if(end_line){
		end_line.draw();
		let random_number = int(random(0,divisions));
		randomCounts[random_number] = randomCounts[random_number] + 1;

		randomCounts.forEach(function(element, index){
			let rect_width = width / divisions;
			let rect_height = element;
			let positionX = rect_width * index;

			rect(positionX,height - rect_height,rect_width, rect_height );
			
			if(height - end_line.positionY < rect_height){
				fill("red");
				rect(positionX,height - rect_height,rect_width, rect_height );
				fill("white");
				noLoop();
				return false;
			}
		});
	}
}

function mouseClicked(){
	end_line = new EndLine(mouseX,mouseY);

}

