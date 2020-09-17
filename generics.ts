function identiy(arg: any): any {
    return arg;
}

let gg = identiy(16);
console.log(typeof gg);


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
    return arg;
}

let jhjhg = loggingIdentity(null);
console.log(jhjhg);

let sa = loggingIdentity(2);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

// getProperty(x, "a");
// getProperty(x, "m");
let rr: any = [1, 2, 6, 'bdib'];
let ar: Array<number> = rr;
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}

interface GenericInterface<U> {
    value: U
    getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
    value: T

    constructor(value: T) {
        this.value = value
    }

    getIdentity(): T {
        return this.value
    }

}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity()) ;// 1

const myStringClass = new IdentityClass<string>("Hello!")
console.log(myStringClass.getIdentity()) ;// Hello!
class Car {
    label: string = 'Generic Car';
    numWheels: Number = 4;
    horn() {
        return "beep beep!"
    }
}

class Truck extends Car {
    label = 'Truck';
    numWheels = 18
}

class Vespa extends Car {
    label = 'Vespa';
    numWheels = 2
}

function washCar <T extends Car> (car: T) : T {
    console.log(`Received a ${car.horn()} in the car wash.`);
    console.log(`Cleaning all ${car.numWheels} tires.`);
    console.log('Beeping horn -', car.horn());
    console.log('Returning your car now');
    return car
}

const myVespa = new Vespa();
washCar<Vespa>(myVespa);

const myTruck = new Truck();
washCar<Truck>(myTruck);
