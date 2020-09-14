function identity(arg) {
    return arg;
}
var a = identity(16);
console.log(typeof a);
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    return arg ? arg : null;
}
var sa = loggingIdentity(2);
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a");
// getProperty(x, "m");
var arr = [1, 2, 6, 'bdib'];
var ar = arr;
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
