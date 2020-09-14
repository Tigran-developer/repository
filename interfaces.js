var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabe(labeledObj) {
    console.log(labeledObj.label);
}
var myOj = { size: 10, label: "Size 10 Object" };
function printLabel(labeledObj) {
    // labeledObj.label=544;
    console.log(labeledObj["label"]);
    console.log(labeledObj.number);
    console.log(labeledObj.label3);
}
var myObj = { label: "544521", number: 854534, label3: false };
printLabel(myObj);
var a1 = [4, 'jh', 9, 2, 4];
var arr = a1;
// arr.push(5)             Error
var c = arr;
console.log(c[0]);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
function createSquare(config) {
    console.log(config.width);
    console.log(config.color);
    return { color: config.color || "red", area: config.width ? config.width * config.width : 20 };
}
var mySquare = createSquare({ coloor: "red", width: 100 });
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// Error: indexing with a numeric string might get you a completely separate type of Animal!
var NotOkay = /** @class */ (function () {
    function NotOkay() {
    }
    return NotOkay;
}());
var dog;
{
    name: "dhbc";
    breed: " regserfg";
}
var aaa = { 1: dog, name: "Sea", length: 55 };
// console.log(aaa[1].name);
console.log(aaa[0]);
// interface NameArray {
//     [index: number]: string;
// }
//
// let nameArray: NameArray = ["John", "Jane"];
// const john = nameArray[0];
// console.log(john);
function identity(arg) {
    return arg;
}
var a = identity(16);
console.log(typeof a);
