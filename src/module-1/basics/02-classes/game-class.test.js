const gameClass = require('./game-class.js')

describe('game class test suite', () => {
    it('should return false when running in CLI', () => {
        expect(gameClass.HTMLBody()).toBeFalsy();
    });

    it('shoud return the class name', () => {
        let testClass = new gameClass.Game();
        let testClassName = testClass._name = 'Test Class'
        expect(testClass._name).toBe(testClassName);
    })

    it('should return the discount', () => {
        let testClass = new gameClass.Game();
        let originalPrice = 20.00;
        let discount = 5;
        testClass._price = originalPrice;
        testClass._isDeal = true;
        testClass.isDealTrue(discount);
        expect(testClass._price).toBe(originalPrice - discount);
    });

    it('should test the discount function', () => {
        let testClass = new gameClass.Game('Test Name', 20.00, true, 'test description', 'test developer', 'test distribuitor', 'online', ['PC', 'PS5'], '10');
        jest.spyOn(testClass, 'isDealTrue');
        expect(testClass.isDealTrue(5)).toEqual(15);
        expect(testClass.isDealTrue).toHaveBeenCalled();
    });
    it('shoud test discount default value', () => {
        expect(gameClass.HTMLBody.isDealTrue).toBeFalsy();
    })
});