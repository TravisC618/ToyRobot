const chai = require('chai');
const spies = require('chai-spies');
const { DIRECTION } = require('../constants/robot');
const ToyRobot = require('../lib/ToyRobot');
chai.use(spies);
const { expect, spy } = chai;

describe('ToyRobot', () => {
    let toyRobot;

    beforeEach(() => {
        toyRobot = new ToyRobot(); 
    });
    
    afterEach(() => {
        toyRobot = undefined;
        spy.restore();
    });

    describe('place(x, y, direction)', () => {
        it('should place successfully with valid params', () => {
            toyRobot.place(0, 0, DIRECTION.north);
            expect(toyRobot.position).to.deep.equal({ x: 0, y: 0});
            expect(toyRobot.direction).to.equal(DIRECTION.north);
        });

        it('should log an error message with invalid params, and robot state will not change', () => {
            const logSpy = spy.on(console, 'log');
            const originalState = {
                position: toyRobot.position,
                direction: toyRobot.direction,
                placed: toyRobot.placed,
            };

            toyRobot.place(-1, 0, 'abc');
            const currentState = {
                position: toyRobot.position,
                direction: toyRobot.direction,
                placed: toyRobot.placed,
            };

            expect(toyRobot.placed).to.deep.equal(false);
            expect(logSpy).to.have.been.called.with('Sorry, it is not a valid placement. Please try again :)');
            expect(originalState).to.deep.equal(currentState);
        });
    });

    describe('move()', () => {
        it('should move to the correct place if robot is facing NORTH', () => {
            toyRobot.place(0, 0, DIRECTION.north);
            toyRobot.move();
            expect(toyRobot.position).to.deep.equal({ x: 0, y: 1 });
        });
        it('should move to the correct place if robot is facing SOUTH', () => {
            toyRobot.place(0, 1, DIRECTION.south);
            toyRobot.move();
            expect(toyRobot.position).to.deep.equal({ x: 0, y: 0 });
        });
        it('should move to the correct place if robot is facing WEST', () => {
            toyRobot.place(1, 0, DIRECTION.west);
            toyRobot.move();
            expect(toyRobot.position).to.deep.equal({ x: 0, y: 0 });
        });
        it('should move to the correct place if robot is facing EAST', () => {
            toyRobot.place(0, 0, DIRECTION.east);
            toyRobot.move();
            expect(toyRobot.position).to.deep.equal({ x: 1, y: 0 });
        });
    });

    describe('left()', () => {
        it('should be face to the correct direction if robot is facing NORTH', () => {
            toyRobot.place(0, 0, DIRECTION.north);
            toyRobot.left();
            expect(toyRobot.direction).to.equal(DIRECTION.west);
        });
        it('should be face to the correct direction if robot is facing SOUTH', () => {
            toyRobot.place(0, 0, DIRECTION.south);
            toyRobot.left();
            expect(toyRobot.direction).to.equal(DIRECTION.east);
        });
        it('should be face to the correct direction if robot is facing WEST', () => {
            toyRobot.place(0, 0, DIRECTION.west);
            toyRobot.left();
            expect(toyRobot.direction).to.equal(DIRECTION.south);
        });
        it('should be face to the correct direction if robot is facing EAST', () => {
            toyRobot.place(0, 0, DIRECTION.east);
            toyRobot.left();
            expect(toyRobot.direction).to.equal(DIRECTION.north);
        });
    });

    describe('right()', () => {
        it('should be face to the correct direction if robot is facing NORTH', () => {
            toyRobot.place(0, 0, DIRECTION.north);
            toyRobot.right();
            expect(toyRobot.direction).to.equal(DIRECTION.east);
        });
        it('should be face to the correct direction if robot is facing SOUTH', () => {
            toyRobot.place(0, 0, DIRECTION.south);
            toyRobot.right();
            expect(toyRobot.direction).to.equal(DIRECTION.west);
        });
        it('should be face to the correct direction if robot is facing WEST', () => {
            toyRobot.place(0, 0, DIRECTION.west);
            toyRobot.right();
            expect(toyRobot.direction).to.equal(DIRECTION.north);
        });
        it('should be face to the correct direction if robot is facing EAST', () => {
            toyRobot.place(0, 0, DIRECTION.east);
            toyRobot.right();
            expect(toyRobot.direction).to.equal(DIRECTION.south);
        });
    });

    describe('report()', () => {
        it('should log the robot info', () => {
            const logSpy = spy.on(console, 'log');
            toyRobot.place(0, 0, DIRECTION.north);
            toyRobot.report();
            expect(logSpy).to.have.been.called.with('Output: 0, 0, NORTH');
        });
    });
});