new Q5();

new Canvas();
displayMode(CENTER, PIXELATED, 4);
world.gravity.y = 0;

let angler = new Angler(halfWidth, halfHeight, 50);

let rod = new Sprite();
rod.width = 70;
rod.height = 10;
rod.physics = NONE;

function update() {
	rod.debug = true;
	background('skyblue');
	textSize(32);

	

	let angle = angler.direction;
	let offsetDistance = angler.diameter / 2;

	let rightX = cos(angle + 90) * offsetDistance;
	let rightY = sin(angle + 90) * offsetDistance;

	rod.x = angler.x + rightX;
	rod.y = angler.y + rightY;

	rod.rotation = angler.direction;
	text(angle, 12, 60);

}
