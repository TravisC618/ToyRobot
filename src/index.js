const { handleCommand } = require('../lib/cliHandler');
const ToyRobot = require('../lib/ToyRobot');

const toyRobot = new ToyRobot();

const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

const lineHandler = input => {
    handleCommand(input, toyRobot);
    readline.prompt();
};

console.log('# Toy Robot Simulator');
console.log('The application is a simulation of a toy robot moving on a square tabletop.');
console.log('The table top should have dimensions of 5 units x 5 units.');
console.log('To control the robot, there are serveral commands you can play around:');
console.log('\t- PLACE X,Y,FACING\n\
\t- MOVE\n\
\t- LEFT\n\
\t- RIGHT\n\
\t- REPORT');

readline
.on('line', lineHandler)
.on('close', ()=> {
    console.log('Hope you enjoy it! Closing now.');
    process.exit(0);
})
.setPrompt('Robot> ');
readline.prompt();