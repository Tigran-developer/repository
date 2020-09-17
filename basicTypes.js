var isDone = true;
console.log(isDone);
var decimal = 15;
var hex = 0xf00d;
var binary = 484;
var age = 22;
// let big: bigint= 100n;
var greetingText = "Hello";
var fullName = "Tigran Sargsyan";
var greetMe = greetingText + "  Dear " + fullName;
var sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence);
var arr1 = [1.2, 2.3, 3.4];
var arrForText = ['Arm', "Gre", "Uk"];
arrForText[3] = "Rus";
for (var i = 0; i < arrForText.length; i++) {
    console.log(arrForText[i]);
}
//console.log(arrForText.length);
var ultimate;
ultimate = ["Tigran", 22, 'IsMarred', false];
//ultimate[4]=undefined;
//console.log(ultimate[0].substring(0,3)+'o');
var City;
(function (City) {
    City[City["Erevan"] = 0] = "Erevan";
    City[City["Moscov"] = 1] = "Moscov";
    City[City["NewYork"] = 2] = "NewYork";
})(City || (City = {}));
console.log(Object.keys(City));
console.log(Object["values"](City));
var ourCapitalCityNumber = City.Erevan;
var ourCapitalCityName = City[1];
//console.log(ourCapitalCityName);
var future;
//let number:number=future;
// let boolean:boolean=future;
if (future === true) {
    var boolean = future;
    // let number:number=future;
}
console.log(future === true);
var num = 14.56854521;
var number = num.toFixed(2);
console.log(typeof number);
// let dec:number =undefined;
// console.log(typeof dec);
var metr = 16;
function error() {
    throw new Error("");
}
;
var looselyTyped = 4;
var strictlyTyped = 4;
console.log(typeof strictlyTyped);
// function error(message: string): number {
//     let m =5;
// }
/** Бесконечный цикл */
// function infiniteLoop(): void {
//     while (true) {
//     }
// }
/** Божественная рекурсия */
function infiniteRec() {
    return infiniteRec();
}
// // infiniteLoop();
// let n:never;
// console.log(typeof n);
