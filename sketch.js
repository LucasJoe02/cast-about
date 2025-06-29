new Q5();

new Canvas();
displayMode(CENTER, PIXELATED, 4);
world.gravity.y = 0;

let angler = new Sprite();
angler.x = halfWidth;
angler.y = halfHeight;
angler.diameter = 50;
MAX_VELOCITY = 2;

let rod = new Sprite();
rod.width = 70;
rod.height = 10;
rod.physics = NONE;

function update() {
	rod.debug = true;
	background('skyblue');
	textSize(32);

	angler.drag = 3;
	let forceX = 0;
	let forceY = 0;
	let dt = deltaTime / 1000;

	if (kb.pressing('up'))    forceY -= 1;
	if (kb.pressing('down'))  forceY += 1;
	if (kb.pressing('left'))  forceX -= 1;
	if (kb.pressing('right')) forceX += 1;

	if (forceX !== 0 || forceY !== 0) {
		angler.drag = 0;

		let length = Math.hypot(forceX, forceY);
		forceX /= length;
		forceY /= length;

		let forceMagnitude = 1000;
		angler.applyForce(forceX * forceMagnitude * dt, forceY * forceMagnitude * dt);
	}

	if (angler.speed > MAX_VELOCITY) {
		angler.speed = MAX_VELOCITY;
	}

	let angle = angler.direction;
	let offsetDistance = angler.diameter / 2;

	let rightX = cos(angle + 90) * offsetDistance;
	let rightY = sin(angle + 90) * offsetDistance;

	rod.x = angler.x + rightX;
	rod.y = angler.y + rightY;

	rod.rotation = angler.direction;
	text(angle, 12, 60);

}
