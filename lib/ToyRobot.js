const { MOVE_MAP } = require('../constants/robot');
const { isValidPlacement } = require('./validation');


class ToyRobot {
    constructor() {
        this.position = {
            x: null,
            y: null
        };
        this.direction = null;
        this.placed = false;
    }

    place(x, y, direction) {
        if (!isValidPlacement(x, y, direction)) {
            console.log('Sorry, it is not a valid placement. Please try again :)');
            return;
        }
        this.direction = direction.toUpperCase();
        this.position = { x, y };
        this.placed = true;
    }

    move() {
        const { x: nextX, y: nextY } = MOVE_MAP[this.direction];
        const { x, y } = this.position;
        this.position = { x: x + nextX, y: y + nextY };
    }

    left() {
        this.direction = MOVE_MAP[this.direction].left;
    }

    right() {
        this.direction = MOVE_MAP[this.direction].right;
    }

    report() {
        console.log(`Output: ${this.position.x}, ${this.position.y}, ${this.direction}`);
    }
}

module.exports = ToyRobot;