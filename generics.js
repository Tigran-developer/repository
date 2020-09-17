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
function identiy(arg) {
    return arg;
}
var gg = identiy(16);
console.log(typeof gg);
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
    return arg;
}
var jhjhg = loggingIdentity(null);
console.log(jhjhg);
var sa = loggingIdentity(2);
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a");
// getProperty(x, "m");
var rr = [1, 2, 6, 'bdib'];
var ar = rr;
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value) {
        this.value = value;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity()); // 1
var myStringClass = new IdentityClass("Hello!");
console.log(myStringClass.getIdentity()); // Hello!
var Car = /** @class */ (function () {
    function Car() {
        this.label = 'Generic Car';
        this.numWheels = 4;
    }
    Car.prototype.horn = function () {
        return "beep beep!";
    };
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Truck';
        _this.numWheels = 18;
        return _this;
    }
    return Truck;
}(Car));
var Vespa = /** @class */ (function (_super) {
    __extends(Vespa, _super);
    function Vespa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Vespa';
        _this.numWheels = 2;
        return _this;
    }
    return Vespa;
}(Car));
function washCar(car) {
    console.log("Received a " + car.horn() + " in the car wash.");
    console.log("Cleaning all " + car.numWheels + " tires.");
    console.log('Beeping horn -', car.horn());
    console.log('Returning your car now');
    return car;
}
var myVespa = new Vespa();
washCar(myVespa);
var myTruck = new Truck();
washCar(myTruck);
