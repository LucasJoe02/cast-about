new Q5();

new Canvas();
displayMode(CENTER, PIXELATED, 4);
world.gravity.y = 0;

let angler = new Angler(halfWidth, halfHeight, 50);

function update() {
	background('skyblue');
    angler.update();

    textSize(32);
	text(angler.sprite.direction, 12, 60);

}
