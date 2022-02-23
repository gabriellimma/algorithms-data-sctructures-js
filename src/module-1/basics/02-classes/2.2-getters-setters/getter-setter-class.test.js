const getterSetterClass = require('./getter-setter-class');

describe(`Test suite for getterSetterClass`, () => {
    it('should set the object value', () => {
        const person = new getterSetterClass.Person('Person Name');
        person.setName = 'Gabriel Lima';
        expect(person._name).toBe('Gabriel Lima');
    });

    it('should get the person name using get method', () => {
        const person = new getterSetterClass.Person('Person Name');
        expect(person.getName).toBe('Person Name');
    });

    it('shoud call refreshInfo function', () => {
        console.log(getterSetterClass.refreshInfos())
        expect(getterSetterClass.refreshInfos()).toBeFalsy();
    })
})