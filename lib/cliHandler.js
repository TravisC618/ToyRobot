const { ROBOT_CMD } = require('../constants/robot');
const { isValidRobotCmd } = require('./validation');

/**
 * Validate and Parse the command for the Toy Robot instance
 * @param {String} input Command line input
 * @param {Robot} toyRobot Toy Robot instance
 */
const handleCommand = (input, toyRobot) => {
    if (!input) return;

    const splitStr = input.split(' ');
    const [command, ...args] = splitStr || [];
    if (!isValidRobotCmd(command)) {
        console.log('Please enter a valid robot command: ', Object.values(ROBOT_CMD));
        return;
    }
    
    const isPlaceCmd = command.toUpperCase() === ROBOT_CMD.place;
    if (isPlaceCmd) {
        const [inputX = '', inputY = '', direction] = args || [];
        const x = parseInt(inputX.replace(','));
        const y = parseInt(inputY.replace(','));
        toyRobot.place(x, y, direction);
    } else {
        toyRobot[command.toLowerCase()]();
    }
};

module.exports = {
    handleCommand
};