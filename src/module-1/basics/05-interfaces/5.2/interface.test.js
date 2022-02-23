const inter = require('./interface');

describe('test suite for 5.2 interface', () => {
    it('should return 0 when values are equal', () => {
        const age = 20;
        const testObj = new inter.MyObject(age);
        expect(testObj.compareTo(age)).toBe(0);
    });
    it(`should return 1 when the age value is greater 
    than compare to param number`, () => {
        const greaterVal = 20;
        const lessVal = 10
        const testObj = new inter.MyObject(greaterVal);
        expect(testObj.compareTo(lessVal)).toBe(1);
    });
    it(`should return -1 when the age value is less 
    than compare to param number`, () => {
        const greaterVal = 20;
        const lessVal = 10
        const testObj = new inter.MyObject(lessVal);
        expect(testObj.compareTo(greaterVal)).toBe(-1);
    });
});