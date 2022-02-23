interface Comparable {
    compareTo(b: any): number
}

class MyObject implements Comparable {
    age:number;
    constructor(age: number){
        this.age = age;
    }
    compareTo(b: number): number {
        if(this.age === b){
            return 0;
        }
        return this.age > b ? 1 : -1;
    }
}

module.exports = {
    MyObject
}