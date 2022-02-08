const { TABLE_SIZE, DIRECTION } = require('../constants/robot');

const isNumAndInteger = value => typeof value === 'number' && Number.isInteger(value);

const isString = value => typeof value === 'string' || value instanceof String;

const isInRange = (value, max) => value >= 0 && value < max;

const isValidPlacement = (x, y, direction) => {
    // validate position
    if (!isNumAndInteger(x) || !isInRange(x, TABLE_SIZE.width)) return false;
    if (!isNumAndInteger(y) || !isInRange(y, TABLE_SIZE.height)) return false;

    // validate direction
    if (!isString(direction) || !Object.values(DIRECTION).includes(direction.toUpperCase())) return false;
    
    return true;
};

module.exports = {
    isValidPlacement
};