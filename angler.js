class Angler extends Sprite {
    static MAX_VELOCITY = 2;

	constructor(x, y, diameter) {
		super(x, y);
		this.diameter = diameter;
	}
	
	update() {
		this.drag = 3;
        let forceX = 0;
        let forceY = 0;
        let dt = deltaTime / 1000;

        if (kb.pressing('up'))    forceY -= 1;
        if (kb.pressing('down'))  forceY += 1;
        if (kb.pressing('left'))  forceX -= 1;
        if (kb.pressing('right')) forceX += 1;

        if (forceX !== 0 || forceY !== 0) {
            this.drag = 0;

            let length = Math.hypot(forceX, forceY);
            forceX /= length;
            forceY /= length;

            let forceMagnitude = 1000;
            this.applyForce(forceX * forceMagnitude * dt, forceY * forceMagnitude * dt);
        }

        if (this.speed > Angler.MAX_VELOCITY) {
            this.speed = Angler.MAX_VELOCITY;
        }
	}
}
