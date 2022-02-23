var MyObject = /** @class */ (function () {
    function MyObject(age) {
        this.age = age;
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var age = 20;
var testObj = new MyObject(age);
console.log("".concat(testObj.age, "\n").concat(testObj.compareTo(20)));
module.exports = {
    MyObject: MyObject
};
//# sourceMappingURL=interface.js.map