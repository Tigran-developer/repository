var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
console.log(Direction[1]);
var DefoltEnum;
(function (DefoltEnum) {
    DefoltEnum[DefoltEnum["Up"] = 0] = "Up";
    DefoltEnum[DefoltEnum["Down"] = 1] = "Down";
    DefoltEnum[DefoltEnum["Left"] = 2] = "Left";
    DefoltEnum[DefoltEnum["Right"] = 3] = "Right";
})(DefoltEnum || (DefoltEnum = {}));
console.log(DefoltEnum.Up);
function f() {
    return 5;
}
var E;
(function (E) {
    E[E["A"] = f()] = "A";
    E[E["B"] = 5] = "B";
})(E || (E = {}));
// DefoltEnum.Down=5;  Error
var foo;
(function (foo) {
    foo["foo"] = "foo";
})(foo || (foo = {}));
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function fol(obj) {
    console.log(obj.X);
}
// Works, since 'E' has a property named 'X' which is a number.
fol(E);
console.log(typeof E.A);
var Direct;
(function (Direct) {
    Direct[Direct["Up"] = 0] = "Up";
    Direct[Direct["Down"] = 1] = "Down";
    Direct[Direct["Left"] = 2] = "Left";
    Direct[Direct["Right"] = 3] = "Right";
})(Direct || (Direct = {}));
(function (Direct) {
    Direct[Direct["in"] = 15] = "in";
})(Direct || (Direct = {}));
console.log(Direct[15]);
console.log(Object.keys(Direct).length);
console.log(1 /* "Up" */);
var r;
r = ["hvbds", 45, true, "BVH"];
console.log(r.length);
