class Angler {
    static MAX_VELOCITY = 2;

    constructor(x, y, diameter) {
        this.trueDirection = 0;
        this.sprite = new Sprite();
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.diameter = diameter;
        this.rod = new Sprite();
        this.rod.width = 70;
        this.rod.height = 10;
        this.rod.physics = NONE;
        this.rod.offset.x = 15;
    }

    update() {
        if (this.sprite.speed < 0.1 && this.sprite.speed > 0) {
            this.trueDirection = this.sprite.direction;
            this.sprite.speed = 0;
        } else if (this.sprite.speed > 0.1) {
            this.trueDirection = this.sprite.direction;
        } else {
            this.sprite.direction = this.trueDirection;
        }
        this.sprite.drag = 3;
        let forceX = 0;
        let forceY = 0;
        let dt = deltaTime / 1000;

        if (kb.pressing('up')) forceY -= 1;
        if (kb.pressing('down')) forceY += 1;
        if (kb.pressing('left')) forceX -= 1;
        if (kb.pressing('right')) forceX += 1;

        if (forceX !== 0 || forceY !== 0) {
            this.sprite.drag = 0;

            let length = Math.hypot(forceX, forceY);
            forceX /= length;
            forceY /= length;

            let forceMagnitude = 1000;
            this.sprite.applyForce(forceX * forceMagnitude * dt, forceY * forceMagnitude * dt);
        }

        if (this.sprite.speed > Angler.MAX_VELOCITY) {
            this.sprite.speed = Angler.MAX_VELOCITY;
        }

        let angle = this.trueDirection;
        let offsetDistance = this.sprite.diameter / 2;

        let rightX = cos(angle + 90) * offsetDistance;
        let rightY = sin(angle + 90) * offsetDistance;

        this.rod.x = this.sprite.x + rightX;
        this.rod.y = this.sprite.y + rightY;

        this.rod.rotation = this.trueDirection;
    }
}
