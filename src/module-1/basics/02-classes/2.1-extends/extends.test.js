const extendsClass = require('./extends.js')

describe('test suite for extends.js file', () => {
    it('should return a extended dog class with new temperament atribute', () => {
        const doggy = new extendsClass.doggy('Bob', '38cm', 'black', 'calm');
        expect(doggy._temperament).toEqual('calm');
    });
    it('shoud return false when testes by Jest', () => {
        expect(extendsClass.funcStartDoggo()).toBeFalsy();
    })
})