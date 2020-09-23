var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 10] = "Down";
    Direction[Direction["Left"] = 11] = "Left";
    Direction[Direction["Right"] = 12] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
console.log(Direction[1]);
var alinko = 51;
var DefoltEnum;
(function (DefoltEnum) {
    DefoltEnum[DefoltEnum["Up"] = alinko] = "Up";
    // Down,
    // Left,
    // Right
})(DefoltEnum || (DefoltEnum = {}));
console.log(DefoltEnum.Up);
function flh() {
    return 5;
}
var E;
(function (E) {
    E[E["A"] = flh()] = "A";
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
var Status;
(function (Status) {
    Status[Status["one"] = 0] = "one";
    Status[Status["two"] = 1] = "two";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["yellow"] = 0] = "yellow";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var ms = Status.one;
