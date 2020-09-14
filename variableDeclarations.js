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
// let a= 5;
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },10 );
// }
//
// for (let i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100 * i);
//     })(i);
// }
// function foo() {
//     // okay to capture 'a'
//     return a;
// }
//
// // illegal call 'foo' before 'a' is declared
// // runtimes should throw an error here
// foo();
//
// let a;
//
// function f(x) {
//     let x;
//     let x;
//
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
    c: "bar",
};
// let { a1, b1 } = o;
// console.log(a1);
var a = o.a, b = o.b;
console.log(a);
function keepWholeObject(wholeObject) {
    var _a = wholeObject.a, a = _a === void 0 ? 56 : _a, _b = wholeObject.b, b = _b === void 0 ? 1001 : _b;
}
// function f({ a, b }: C): void {
// }
var c = { a: "dhgsd", b: 65, };
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(typeof search);
//# sourceMappingURL=variableDeclarations.js.map