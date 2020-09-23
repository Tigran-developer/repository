function getSmallPet() {
    return;
}
var pet = getSmallPet();
// if ("swim" in pet && pet.swim) {
//     pet.swim()
// } else if ((<Bird>pet).fly) {
//     (<Bird>pet).fly()
// } else {
//     pet.layEggs
// }
// @ts-ignore
function isFish(pet) {
    return (pet.swim !== undefined);
}
var mutation = {
    fly: function () {
    }, layEggs: function () {
    }, swim: function () {
    }
};
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operend) {
        this.value += operend;
        return this;
    };
    return BasicCalculator;
}());
var b = new BasicCalculator(2).add(158).add(2).currentValue();
console.log(b);
