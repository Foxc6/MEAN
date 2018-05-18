var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4, "hello"];
var myObj: {name: string} = {name: "Bill"};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj: {x: number, y: number} = {x: 5, y: 10};


class MyNode {
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}

var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("Hello World");
}

function sendingErrors(): never{
    throw new Error('Error message');
}