var MyObj = /** @class */ (function () {
    function MyObj(str) {
        this.str = str;
    }
    MyObj.prototype.show = function () {
        console.log(this.str);
        return this.str;
    };
    return MyObj;
}());
module.exports = {
    MyObj: MyObj
};
//# sourceMappingURL=interfaces.js.map