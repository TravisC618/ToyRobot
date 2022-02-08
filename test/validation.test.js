const { expect } = require('chai');
const { DIRECTION } = require('../constants/robot');
const { isValidPlacement } = require('../lib/validation');

describe('Validation helpers', () => {
    describe('Placement Validation', () => {
        it('should return true if the params are valid', () => {
            const result = isValidPlacement(0, 0, DIRECTION.north);
            expect(result).to.be.true;
        });

        it('should return false if no param', () => {
            const result = isValidPlacement();
            expect(result).to.be.false;
        });

        describe('validate position', () => {
            it('should return false if no position', () => {
                const result = isValidPlacement(undefined, null, DIRECTION.north);
                expect(result).to.be.false;
            });
    
            it('should return false if the position is not a number', () => {
                const result1 = isValidPlacement('0', 0, DIRECTION.north);
                const result2 = isValidPlacement(0, {}, DIRECTION.north);
                expect(result1).to.be.false;
                expect(result2).to.be.false;
            });
    
            it('should return false if the position has a nagetive number', () => {
                const result1 = isValidPlacement(-1, 0, DIRECTION.north);
                const result2 = isValidPlacement(0, -1, DIRECTION.north);
                expect(result1).to.be.false;
                expect(result2).to.be.false;
            });
    
            it('should return false if the position is not in map', () => {
                const result1 = isValidPlacement(5, 0, DIRECTION.north);
                const result2 = isValidPlacement(2, 6, DIRECTION.north);
                expect(result1).to.be.false;
                expect(result2).to.be.false;
            });
        });

        describe('validate direction', () => {
            it('should still return true if direction is not uppercase', () => {
                const result = isValidPlacement(0, 0, 'NoRtH');
                expect(result).to.be.true;
            });

            it('should return false if no direction', () => {
                const result = isValidPlacement(0, 0, undefined);
                expect(result).to.be.false;
            });

            it('should return false if direction is not a string', () => {
                const result = isValidPlacement(0, 0, 123);
                expect(result).to.be.false;
            });

            it('should return false if direction is not valid', () => {
                const result = isValidPlacement(0, 0, 'NORTHEAST');
                expect(result).to.be.false;
            });
        });
    });
});