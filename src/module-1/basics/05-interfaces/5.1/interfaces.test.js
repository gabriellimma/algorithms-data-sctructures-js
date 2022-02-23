const interfaces = require('./interfaces');

describe('test suite for interfaces', () => {
    it('should compare', () => {
       const str = 'Hi tester'
       const TestObj = new interfaces.MyObj(str);
       expect(TestObj.show()).toBe(str);
    });
});