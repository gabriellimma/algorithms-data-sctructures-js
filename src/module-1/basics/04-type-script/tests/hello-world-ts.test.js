const helloWorldFile = require('../hello-world');

describe('test suite for hello world in TS', () => {
    it('should retirn a hello message', () => {
        helloWorldFile.myVar = 'Hello World';
        expect(helloWorldFile.myVar).toBe('Hello World');
    })
});