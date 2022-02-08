const { MOVE_MAP } = require('../constants/robot');
const { isValidPlacement, isValidMovement, hasPlaced } = require('./validation');


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

    move () {
        const { x, y } = this.position;
        const { x: nextX, y: nextY } = MOVE_MAP[this.direction] || {};
        const movement = { x: x + nextX, y: y + nextY };
        
        // ignore command if the movement is not valid
        if (!isValidMovement(this.placed, movement)) return;
        
        this.position = movement;
    }

    left () {
        if (!hasPlaced(this.placed)) return;
        this.direction = MOVE_MAP[this.direction].left;
    }

    right() {
        if (!hasPlaced(this.placed)) return;
        this.direction = MOVE_MAP[this.direction].right;
    }

    report() {
        if (!hasPlaced(this.placed)) return;
        console.log(`Output: ${this.position.x}, ${this.position.y}, ${this.direction}`);
    }
}

module.exports = ToyRobot;