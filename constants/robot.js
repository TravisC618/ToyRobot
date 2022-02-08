const TABLE_SIZE = {
    width: 5,
    height: 5
};

const DIRECTION = {
    north: 'NORTH',
    west: 'WEST',
    south: 'SOUTH',
    east: 'EAST',
};

const MOVE_MAP = {
    [DIRECTION.north]: {
        x: 0,
        y: 1,
        left: DIRECTION.west,
        right: DIRECTION.east
    },
    [DIRECTION.south]: {
        x: 0,
        y: -1,
        left: DIRECTION.east,
        right: DIRECTION.west
    },
    [DIRECTION.west]: {
        x: -1,
        y: 0,
        left: DIRECTION.south,
        right: DIRECTION.north
    },
    [DIRECTION.east]: {
        x: 1,
        y: 0,
        left: DIRECTION.north,
        right: DIRECTION.south
    }
};

const ROBOT_CMD = {
    place: 'PLACE',
    move: 'MOVE',
    left: 'LEFT',
    right: 'RIGHT',
    report: 'REPORT'
};

module.exports = { TABLE_SIZE, DIRECTION, MOVE_MAP, ROBOT_CMD };