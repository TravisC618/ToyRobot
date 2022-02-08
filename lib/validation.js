const { TABLE_SIZE, DIRECTION } = require('../constants/robot');

const isNumAndInteger = value => typeof value === 'number' && Number.isInteger(value);

const isString = value => typeof value === 'string' || value instanceof String;

const isInRange = (value, max) => value >= 0 && value < max;

const hasPlaced = placed => {
    if (!placed) {
        console.log('PLACE command should execute first.');
    };
    return placed;
};

const isValidPosition = (x, y) => {
    if (!isNumAndInteger(x) || !isInRange(x, TABLE_SIZE.width)) return false;
    if (!isNumAndInteger(y) || !isInRange(y, TABLE_SIZE.height)) return false;
    return true;
};

const isValidDirection = direction => isString(direction) && Object.values(DIRECTION).includes(direction.toUpperCase());

const isValidPlacement = (x, y, direction) => {
    // validate position
    if(!isValidPosition(x, y)) return false;

    // validate direction
    if(!isValidDirection(direction)) return false;
    
    return true;
};

const isValidMovement = (placed, movement = {}) => {
    if (!hasPlaced(placed)) return false;

    const { x, y } = movement;
    if(!isValidPosition(x, y)) return false;
    return true;
};

module.exports = {
    hasPlaced,
    isValidPlacement,
    isValidMovement
};