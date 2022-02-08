const { TABLE_SIZE, DIRECTION, ROBOT_CMD } = require('../constants/robot');

const isNumAndInteger = value => typeof value === 'number' && Number.isInteger(value);

const isString = value => typeof value === 'string' || value instanceof String;

const isInRange = (value, max) => value >= 0 && value < max;

/**
 * All operations are executed on the premise that the robot has been placed
 * @param {*} placed Robot placement status
 * @returns true if robot has placed
 */
const hasPlaced = placed => {
    if (!placed) {
        console.log('PLACE command should execute first.');
    };
    return placed;
};

/**
 * Coordinate should be integer and within the table size
 * @param {*} x The x coordinate of robot's position
 * @param {*} y The y coordinate of robot's position
 * @returns true if the position is valid
 */
const isValidPosition = (x, y) => {
    if (!isNumAndInteger(x) || !isInRange(x, TABLE_SIZE.width)) return false;
    if (!isNumAndInteger(y) || !isInRange(y, TABLE_SIZE.height)) return false;
    return true;
};

/**
 * Direction should be in the pre-defined range
 * @param {*} direction The facing direction of robot
 * @returns true if the direction is valid
 */
const isValidDirection = direction => isString(direction) && Object.values(DIRECTION).includes(direction.toUpperCase());

/**
 * Validate if the given position and direction are valid
 * @param {*} x The x coordinate of robot's position
 * @param {*} y The y coordinate of robot's position
 * @param {*} direction The facing direction of robot
 * @returns true if the placement is valid
 */
const isValidPlacement = (x, y, direction) => {
    // validate position
    if(!isValidPosition(x, y)) return false;

    // validate direction
    if(!isValidDirection(direction)) return false;
    
    return true;
};

/**
 * Receive the value of next movement to see if it is a valid position
 * @param {*} placed Robot placement status
 * @param {*} movement Next movement wiht x and y coordinate
 * @returns true if the movement is valid
 */
const isValidMovement = (placed, movement = {}) => {
    if (!hasPlaced(placed)) return false;

    const { x, y } = movement;
    if(!isValidPosition(x, y)) return false;
    return true;
};

/**
 * Validate the given command is pre-defined
 * @param {*} command Robot command
 * @returns true if the command is valid
 */
const isValidRobotCmd = command => isString(command) && Object.values(ROBOT_CMD).includes(command.toUpperCase());

module.exports = {
    isString,
    hasPlaced,
    isValidPlacement,
    isValidMovement,
    isValidRobotCmd
};