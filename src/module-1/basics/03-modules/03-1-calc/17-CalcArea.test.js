const calcArea = require('./17-CalcArea.js');

describe('Test suite for 17-CalcArea', () => {
    it('should return the calculated area of a circle', () => {
        expect(calcArea.circleArea(1)).toBe(3.14);
    });
    it('should return the calculated area of a square', () => {
        expect(calcArea.squareArea(2)).toBe(4);
    });
})