enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Down);
console.log(Direction[1]);

enum DefoltEnum {
    Up,
    Down,
    Left,
    Right
}

console.log(DefoltEnum.Up);

function f() {

    return 5
}

enum E {
    A = f(),
    B = 5
}

// DefoltEnum.Down=5;  Error
enum foo {
    foo = "foo"
}

enum E {
    X,
    Y,
    Z
}

function fol(obj: { X: number }) {
    console.log(obj.X);
}

// Works, since 'E' has a property named 'X' which is a number.
fol(E);
console.log(typeof E.A);

enum Direct {
    Up = 0,
    Down,
    Left,
    Right
}

enum Direct {
    in = 15
}

console.log(Direct[15]);
console.log(Object.keys(Direct).length);

const enum Directions {
    Up = 1,
    Down = Up + 1,
    Left = 2,
    Right = 3
}

console.log(Directions["Up"]);


let r: [string, number, boolean, string];
r = ["hvbds", 45, true, "BVH"];
console.log(r.length);

enum Status {
    one,
    two
}

enum Color {
    yellow,
    green,
    blue
}
let ms=Status.one;