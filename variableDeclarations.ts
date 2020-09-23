// // let a= 5;
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
// function fro() {
//     // okay to capture 'a'
//     return a;
// }
//
// // illegal call 'foo' before 'a' is declared
// // runtimes should throw an error here
// fro();
//
// function f(x) {
//
//     if (true) {
//         var x;
//     }
// }
// function fot(condition, x1) {
//     if (condition) {
//         let x = 100;
//         console.log(x);
//     }
//
//     console.log(x1) ;
// }
// fot(true,10);
// let input = [1, 2];
// let [first, second] = input;
// // console.log(first); // outputs 1
// // console.log(second);
//
// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar",
// };
// // let { a1, b1 } = o;
// // console.log(a1);
//
// // let { a, b }: { a: string; b: number } = o;
// console.log(a);
//
//
// function keepWholeObject(wholeObject: { a: string; b?: number }) {
//     let { a=56, b = 1001 } = wholeObject;
// }
//
//
// type C = { a: string; b?: number };
// // function f({ a, b }: C): void {
// // }
// let c:C={a:"dhgsd",b:65,};
//
// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };
// console.log(typeof search);
//  let tupl:[number,string,boolean,string|number]=[47, "  cv",true,54];
// let [at,bt,...ct]=tupl;
// console.log(at);
// console.log(bt);
// console.log(ct);
// let op={
//     a:true,
//     b:15,
//     c:15
// };
// // let { a:boolean, b } = op;
// let {a:newA,b:newB=105}=op;
// console.log(newB);
// // function letop(wholeObject:{a: string; b?: number }){
// // let{a,b=1001}=wholeObject;
// // }
// let [ty,b,...c]=[15,25,"455"];
// type C={a:string,b?:boolean};
// function lool({a,b=true}:C):void {
//
// }
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich",...defaults };
console.log( search)