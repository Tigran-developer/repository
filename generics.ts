function identity(arg: any): any {
    return arg;
}

let a = identity(16);
console.log(typeof a);


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

function loggingIdentity<T>(arg: T): T {
    return arg ? arg : null;
}

let sa = loggingIdentity(2);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a");
// getProperty(x, "m");
let arr:any= [1,2,6,'bdib'];
let ar:Array<number>=arr;
for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
}