const helloWorld = require('./01-helloWorld.js')

describe('test suite for 01-hello-world', () => {

    it('should return "hello world"', () => {
        expect(helloWorld.helloWorld()).toBe('Hello World!');
    });
    
    it('should return false in node environment', () => {
        expect(helloWorld.alerta()).toBeFalsy();
    });
});