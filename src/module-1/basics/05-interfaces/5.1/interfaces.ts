interface Test {
    show(str: string): string;
}

class MyObj implements Test {
    str: string
    constructor(str: string){
        this.str = str;
    }
    show() {
        console.log(this.str)
        return this.str
    }
}

module.exports = {
    MyObj
}