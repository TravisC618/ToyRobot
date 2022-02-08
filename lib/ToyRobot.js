const { MOVE_MAP } = require('../constants/robot');
const { isValidPlacement, isValidMovement, hasPlaced } = require('./validation');


class ToyRobot {
    /**
     * Robot constructor
     * @constructor
     */
    constructor() {
        this.position = {
            x: null,
            y: null
        };
        this.direction = null;
        this.placed = false;
    }

    /**
     * Place a robot
     * @param {Number} x The x coordinate of robot's position
     * @param {Number} y The y coordinate of robot's position
     * @param {String} direction The facing direction of robot
     */
    place(x, y, direction) {
        if (!isValidPlacement(x, y, direction)) {
            console.log('Sorry, it is not a valid placement. Please try again :)');
            return;
        }
        this.direction = direction.toUpperCase();
        this.position = { x, y };
        this.placed = true;
    }

    /**
     * Move the robot one unit forward in facing direction
     */
    move () {
        const { x, y } = this.position;
        const { x: nextX, y: nextY } = MOVE_MAP[this.direction] || {};
        const movement = { x: x + nextX, y: y + nextY };
        
        // ignore command if the movement is not valid
        if (!isValidMovement(this.placed, movement)) return;
        
        this.position = movement;
    }

    /**
     * Make the robot rotate 90 degrees to the left
     */
    left () {
        if (!hasPlaced(this.placed)) return;
        this.direction = MOVE_MAP[this.direction].left;
    }

    /**
     * Make the robot rotate 90 degrees to the right
     */
    right() {
        if (!hasPlaced(this.placed)) return;
        this.direction = MOVE_MAP[this.direction].right;
    }

    /**
     * Announce the position and direction of the robot
     */
    report() {
        if (!hasPlaced(this.placed)) return;
        console.log(`Output: ${this.position.x}, ${this.position.y}, ${this.direction}`);
    }
}

module.exports = ToyRobot;