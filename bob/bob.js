let characterX
let characterY
let speed = 2
let circleX
let circleY
let score = 0
let rightEyeVis = true
let leftEyeVis = true
let petName = prompt("Whats its name?")
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	characterX = windowWidth / 2
	characterY = windowHeight / 2
	newCircle()
}


function draw() {
	fill(81, 133, 68)
	stroke(57, 94, 48)
	background("green")

	circle(characterX, characterY, 40);
	circle(circleX, circleY, 40);
	fill(37, 64, 31)
	if (circleX<characterX){
		characterX = characterX-speed
	}
	if (circleX>characterX){
		characterX = characterX+speed
	}
	if (circleY>characterY){
		characterY = characterY+speed
	}
	if (circleY<characterY){
		characterY = characterY-speed
	}
	if (rightEyeVis == true) {
		circle(characterX + 10, characterY - 10, 10)
	} else {
		rightEyeVis = false
	}
	if (leftEyeVis == true) {
		circle(characterX - 10, characterY - 10, 10)
	} else {
		leftEyeVis = false
	}
	textAlign(LEFT, TOP)
	textSize(60)
	text(score+" "+petName, 0, 0)
	if (characterX > windowWidth + 20) {
		characterX = 0
	}
	if (characterX < -20) {
		characterX = windowWidth
	}

	if (characterY < -20) {
		characterY = windowHeight
	}
	if (characterY > windowHeight + 20) {
		characterY = 0
	}
	if (characterX + 20 > circleX - 20 && characterX - 20 < circleX + 20 && characterY + 20 > circleY - 20 && characterY - 20 < circleY + 20) {
		newCircle()
			++score
	}
} //e

function newCircle() {
	circleX = random(20, windowWidth - 20)
	circleY = random(20, windowHeight - 20)
}