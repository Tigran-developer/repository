var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 10);
};
// let a= 5;
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
// function fro() {
//     // okay to capture 'a'
//     return a;
// }
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
// fro();
// function f(x) {
//     if (true) {
//         var x;
//     }
// }
function fot(condition, x1) {
    if (condition) {
        var x = 100;
        console.log(x);
    }
    console.log(x1);
}
fot(true, 10);
var input = [1, 2];
var first = input[0], second = input[1];
// console.log(first); // outputs 1
// console.log(second);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a1, b1 } = o;
// console.log(a1);
// let { a, b }: { a: string; b: number } = o;
// console.log(a);
function keepWholeObject(wholeObject) {
    var _a = wholeObject.a, a = _a === void 0 ? 56 : _a, _b = wholeObject.b, b = _b === void 0 ? 1001 : _b;
}
// function f({ a, b }: C): void {
// }
// let c:C={a:"dhgsd",b:65,};
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(typeof search);

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);