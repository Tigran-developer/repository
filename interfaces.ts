function printLabe(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myOj = {size: 10, label: "Size 10 Object"};

// printLabe(myOj);


interface LabeledValue {
    readonly "label": string; // <- Can't be changed
    "number"?: number;

    [propName: string]: any;
}

function printLabel(labeledObj: LabeledValue) {
    // labeledObj.label=544;
    console.log(labeledObj["label"]);
    console.log(labeledObj.number);
    console.log(labeledObj.label3);
}

let myObj: LabeledValue = {label: "544521", number: 854534, label3: false};
printLabel(myObj);

let a1: any [] = [4, 'jh', 9, 2, 4];
let arr: ReadonlyArray<number> = a1;
// arr.push(5)             Error
let c = arr;
console.log(c[0]);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    console.log(config.width);
    console.log(config.color);
    return {color: config.color || "red", area: config.width ? config.width * config.width : 20};
}

let mySquare = createSquare({coloor: "red", width: 100} as SquareConfig);


interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);


class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
class NotOkay {
    [objName: number]: Animal;

    // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    length: number; // ok, length is a number
    name: string;
}


let dog:Dog
{
   name: "dhbc";
    breed:" regserfg";
}
let aaa: NotOkay = {1:dog,name: "Sea",length:55,};


// console.log(aaa[1].name);
console.log(aaa[0]);
// interface NameArray {
//     [index: number]: string;
// }
//
// let nameArray: NameArray = ["John", "Jane"];
// const john = nameArray[0];
// console.log(john);

function identity(arg: any): any {
    return arg;
}
let a=identity(16);
console.log(typeof  a);


