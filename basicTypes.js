// // let isDone: boolean=true;
// // console.log(isDone);
// //
// // let decimal: number =15;
// // let hex:number= 0xf00d;
// // let binary:number=0o744;
// // let age: number =22;
// // // let big: bigint= 100n;
// //
// // let greetingText:string="Hello";
// // let fullName:string=`Tigran Sargsyan`;
// // let greetMe: string=`${greetingText}  Dear ${fullName}`;
// //
// // let sentence: string =
// //     "Hello, my name is " +
// //     fullName +
// //     ".\n\n" +
// //     "I'll be " +
// //     (age + 1) +
// //     " years old next month.";
// // console.log(sentence);
// //
// // let arr1: number[]=[1.2,2.3,3.4];
// // let arrForText: Array<string>=['Arm',"Gre",`Uk`];
// // arrForText[3]="Rus";
// // for(let i=0;i<arrForText.length;i++){
// //     console.log(arrForText[i])
// // }
// // //console.log(arrForText.length);
// // let ultimate:[string,number,string,boolean];
// // ultimate=["Tigran",22,'IsMarred',false];
// // // //ultimate[4]=undefined;
// // //console.log(ultimate[0].substring(0,3)+'o');
// var tup;
// tup = ["2", "jv", true];
// // console.log(tup[0]);
// // @ts-ignore
// var Color;
// (function (Color) {
//     Color[Color["yellow"] = 0] = "yellow";
//     Color[Color["green"] = 1] = "green";
//     Color[Color["blue"] = 2] = "blue";
// })(Color || (Color = {}));
// // // declare  const mar:any;
// // // let arka=mar;
// // console.log(typeof arka);
// var ca = Color.yellow;
// var um = null;
// var nev = 156;
// // console.log(ca);
// var str = "jdhcihsgdchs;dcs";
// var strLength = str.length;
// var strLengthByGeneric = str.length;
// console.log(strLength === strLengthByGeneric);
// // enum City {
// //     Erevan,
// //     Moscov,
// //     NewYork,
// // }
// //
// // console.log(Object.keys(City));
// // console.log(Object.values(City));
// // let ourCapitalCityNumber:City=City.Erevan;
// // let ourCapitalCityName:string=City[1];
// // //console.log(ourCapitalCityName);
// //
// // let future:unknown;
// // //let number:number=future;
// // // let boolean:boolean=future;
// // if(future===true){
// //      let tru:boolean=future;
// //     // let number:number=future;
// // }
// // console.log(future===true);
// //
// // let num:number=14.56854521;
// // let number:unknown=num.toFixed(2);
// // console.log(typeof number);
// //
// // // let dec:number =undefined;
// // // console.log(typeof dec);
// // let metr:number = 16;
// //
// // function error(): never {
// //     throw new Error("")};
// //
// //
// // var looselyTyped: any = 4;
// //
// // let strictlyTyped: unknown = 4;
// // console.log(typeof  strictlyTyped);
// //
// // // function error(message: string): number {
// // //     let m =5;
// // // }
// //
// // /** Бесконечный цикл */
// // // function infiniteLoop(): void {
// // //     while (true) {
// // //     }
// // // }
// //
// // /** Божественная рекурсия */
// // function infiniteRec(): void {
// //     return infiniteRec();
// // }
// //
// // // // infiniteLoop();
// // // let n:never;
// // // console.log(typeof n);
// // declare const maybe: unknown;
// // // 'maybe' could be a string, object, boolean, undefined, or other types
// // const aNumber: void = undefined;
// // let m:any=null;
// // let numbers:any
// // console.log((numbers as string).length);
// function aor() {
//     var transGen;
//     var transGen;
//     return function () {
//         var n = transGen;
//     };
// }
// function foli() {
//     var xolum = 25;
//     function f1() {
//         var xolum = 15;
//         console.log(xolum);
//     }
//     f1();
//     console.log(xolum);
// }
// foli();
for (const i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}