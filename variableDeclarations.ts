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
        let x = 100;
        console.log(x);
    }

    console.log(x1) ;
}
fot(true,10);
let input = [1, 2];
let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second);

let o = {
    a: "foo",
    b: 12,
    c: "bar",
};
// let { a1, b1 } = o;
// console.log(a1);

let { a, b }: { a: string; b: number } = o;
console.log(a);


function keepWholeObject(wholeObject: { a: string; b?: number }) {
    let { a=56, b = 1001 } = wholeObject;
}


type C = { a: string; b?: number };
// function f({ a, b }: C): void {
// }
let c:C={a:"dhgsd",b:65,};

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(typeof search)