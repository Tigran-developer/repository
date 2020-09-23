// // function padLeft(value: string, padding: number | string | boolean) {
// //     if (typeof padding === "number") {
// //         return Array(padding + 1).join(" ") + value
// //     }
// //     if (typeof padding === "string") {
// //         return padding + value;
// //     }
// //     throw new Error(`Ожидал строку или число, а получил '${padding}'.`)
// // }
// //
// // // console.log(padLeft("rfrewf", 5));
//
// interface Fish {
//     swim()
//
//     layegs()
// }
//
// class Fish implements Fish {
//     swim() {
//         return "swim swim"
//     }
//
//     layegs() {
//         return 15
//     }
// }
//
// interface Bird {
//     fly()
//
//     layegs()
// }
//
// class Bird implements Bird {
//     fly() {
//     }
//
//     layegs() {
//     }
//
// }
//
// function getSmallPet(): Fish | Bird {
//     return {
//         fly() {
//         },
//         layegs() {
//         }
//     }
// }
//
// let bird = {
//     swim() {
//     },
//     layegs() {
//
//     }
// };
// let pet = getSmallPet();
// pet.layegs();
// // pet.swim();
// // pet.fly();
// // // @ts-ignore
// // if ((<Fish>pet).swim) {
// //     console.log("pet has swim")
// // }
// // // @ts-ignore
// // else if ((<Bird>pet).fly) {
// //     console.log("pet has fly")
// // }
// //
// // function isFish(pet: Fish | Bird): pet is Fish {
// //     return (<Fish>pet).swim !== undefined;
// // }
// //
// //
// // if (isFish(pet)) {
// //     pet.swim()
// // } else {
// //     pet.fly()
// // }
// //
// // //
// // // if(isFish(bird)){
// // //     console.log("jbhedb"+bird.layegs())
// // // }
// //
// // interface Animal {
// //     typeName: string;
// //     Lagsnumber?: number
// //
// //     move()
// // }
// //
// // class Animmal implements Animmal {
// //     typeName: string;
// //     Lagsnumber: number;
// //
// //     constructor(typeName: string, LagsNumber: number) {
// //         this.typeName = typeName;
// //         this.Lagsnumber = LagsNumber;
// //     }
// //
// //     move(distranceInMeters) {
// //         console.log("has muved " + distranceInMeters + "meters")
// //     }
// // }
// //
// // let horse = new Animmal("horse", 4);
// // horse.move(10);
// //
// // console.log(horse instanceof Animmal);
// // let n: any = "5";
// // console.log(n instanceof String);
// // type mix = Animmal & Fish & Bird;
// // let mixC: mix = {
// //     Lagsnumber: 0, typeName: "", fly() {
// //     }, layegs(): any {
// //     }, move(distranceInMeters): void {
// //     }, swim(): any {
// //     }
// //
// // };
// // console.log(mixC instanceof Animmal);
// // console.log(mixC instanceof Fish);
// // console.log(mixC instanceof Bird);
// //
// // type Name = string;
// // type Func = () => string;
// // type FuncOrName = Name | Func;
// //
// // function getName(n: FuncOrName): Name {
// //     if (typeof n === 'string') {
// //         return n
// //     } else {
// //         return n()
// //     }
// // }
// //
// // type changeAblity<T> = { value: T };
// // let chnages: changeAblity<number> = {value: 15};
// //
// //
// // type LinkedList<T> = T & { next: LinkedList<T> }
// //
// // interface Person {
// //     name: string
// // }
// //
// // // var people: LinkedList<Person>;
// // // var s = people.name;
// // // var s = people.next.name;
// // // var s = people.next.next.name;
// // // var s = people.next.next.next.name;
// // // interface inter extends Bird,Animal{
// // // }
// // type  tekstsTypes = "Task" | "Test" | "Lim";
// // let taskType: tekstsTypes = "Task";
// //
// // class Elements {
// //     animate(dx: number, dy: number, easing: tekstsTypes) {
// //     }
// // }
// //
// // let button = new Elements();
// // button.animate(0, 5, "Test");
// //
// //
// // class BasicCalculator {
// //     public constructor(protected value: number = 0) {
// //     }
// //
// //     public currentValue(): number {
// //         return this.value
// //     }
// //
// //     public add(operand: number): this {
// //         this.value += operand;
// //         return this
// //     }
// //
// //     public multiply(operand: number): this {
// //         this.value *= operand;
// //         return this
// //     }
// //
// //     // ... другие операции ...
// // }
// //
// // let v = new BasicCalculator(2)
// //     .multiply(5)
// //     .add(1)
// //     .currentValue();
// //
// // class ScientificCalculator extends BasicCalculator {
// //     constructor(value = 0) {
// //         super(value);
// //     }
// //
// //     public sin() {
// //         this.value = Math.sin(this.value)
// //         return this
// //     }
// // }
// //
// // let hhj = new ScientificCalculator(2).add(2);
// // console.log(hhj.currentValue());
// //
// // function foot(firstPretimeter: string | null): string {
// //     if (firstPretimeter === null) {
// //         return "defaults"
// //     }
// //     return firstPretimeter
// // }
// //
// // console.log(foot("wefgb"));
// //
// // function footo(firstPer: string | null): string {
// //     return firstPer ?? "null"
// // }
// //
// // console.log(foot(null));
// // //
// // // function pluck(o, b) {
// // //     return o.map((o) => b[o]);
// // // }
// //
// // enum ek {
// //     "hj",
// //     "hg",
// //     'hf'
// // }
// //
// // // console.log(pluck((["hg", "hj", 'hf']), ek));
// //
// // // function pluc<T, K extends keyof T>(o: T, propNames: K[]): T[K][] {
// // //     return propNames.map((n) => o[n]);
// // // }
// //
// // interface Car5 {
// //     manufacturer: string;
// //     model: string;
// //     year: number;
// // }
// //
// // let taxi: Car5 = {
// //     manufacturer: "Toyota",
// //     model: "Camry",
// //     year: 2014,
// // };
// //
// // // let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);
// // //
// // // let modelYear = pluck(taxi, ["model", "year"]);
// //
// // interface Dictionary<T> {
// //     [key: number]: T;
// // }
// //
// // let key: keyof Dictionary<number>[42];
// //
// // type Partil<T> = {
// //     [P in keyof T]?: T[P];
// // };
// // let lem: Partil<Car5> = {model: "dnbc"};
// //
// // type PartialWithNewMember<T> = {
// //     [P in keyof T]?: T[P];
// // } & { newMember: boolean };
// //
// // interface inter {
// //     name: string,
// //     surname?: string,
// // }
// //
// // type  mixedType = {
// //     [key in keyof inter]: boolean;
// // }
// // let ti: mixedType = {name: true};
// // //
// // // type mixedChang<T,U extends keyof T>={
// // //     ["key":T]:U
// // // }
// // type Proxy<T> = {
// //     get(): T;
// //     set(value: T): void;
// // };
// // type Proxify<T> = {
// //     [P in keyof T]: Proxy<T[P]>;
// // };
// //
// // function unproxify<T>(t: Proxify<T>): T {
// //     let result = {} as T;
// //     for (let k in t) {
// //         result[k] = t[k].get();
// //     }
// //     return result;
// // }
// //
// // // function proxify<T>(o: T): Proxify<T> {
// // //     return 5
// // // }
// //
// // // let props = {rooms: 4};
// // // let proxyProps = proxify(props);
// // // let originalProps = unproxify(proxyProps);
// // type mon<T> = T extends number ? string : boolean;
// // let four: mon<5> = "dhfbv";
// // console.log(typeof four);
// // type mool<T> = T extends number | string ? boolean : object
// // // let five: mool<null> = {true};
// // type fourMe<T> = T extends number ? 'Ok' : "oops";
// // let six: fourMe<4> = "Ok";
// // type buke<T> = T extends number ? "ojw"
// //     : T extends boolean ? "vghbv0" : "ehnfohn";
// //
// // interface IAnimal {
// //     TypeName: string
// // }
// //
// // interface IBird extends IAnimal {
// //     fly(): void;
// // }
// //
// // interface IRaven extends IBird {
// // }
// //
// // type animalType<T> = T extends IAnimal ? "animal"
// //     : T extends IBird ? "bird"
// //         : T extends IRaven ? "raven"
// //             : "no animal";
// //
// // interface Foo {
// //     propA: boolean;
// //     propB: boolean;
// //
// // }
// //
// // declare function f<T>(x: T): T extends Foo ? string : number
// //
// // function favi<U>(x: U) {
// //     let a = f(x);
// //     let b: string | number = a;
// // }
// //
// // let okl = {
// //     propA : false,
// //     propB : true,
// // };
// // console.log((okl));
// // // @ts-ignore
// // let symbol=Symbol("key");
// // // @ts-ignore
// // let symbol2=Symbol("key");
// //
// // console.log(symbol===symbol2);
// // let strin="jdbnckjsbd";
// // // @ts-ignore
// // console.log(Symbol.split(strin));
// // // interface Fish {
// // //     name: string;
// // //
// // //     swim()
// // // }
// // //
// // // interface Bird {
// // //     name: string;
// // //
// // //     fly()
// // // }
// // //
// // // class Fish implements Fish {
// // //     name: string;
// // //
// // //     constructor(name: string) {
// // //         this.name = name;
// // //     }
// // //
// // //     swim() {
// // //         return "swim swim"
// // //     }
// // // }
// // //
// // // class Bird implements Bird {
// // //     name: string;
// // //
// // //     fly() {
// // //         console.log("Fly")
// // //     }
// // // }
// // //
// // //
// // // let lim:Fish ={name:"hdigcbh", swim(): void {
// // //         console.log(name);
// // //     }};
// // // console.log(lim.name);
// // //
// // // function isFish(pet:Fish|Bird){
// // //  return  (pet as Fish).swim!==undefined;
// // // }
// // // // You can use the 'in' operator to check
// // // if ("swim" in pet) {
// // //     pet.swim();
// // // }
// // // let lim=pet as Bird;
// // // lim.fly();
// // // However, you cannot use property access
// // // if (lim.fly) {
// // //     // Property 'fly' does not exist on type 'Fish | Bird'.
// // //     //     Property 'fly' does not exist on type 'Fish'.
// // // }
// // // else{
// // //     lim.fly();
// // // }
// // //
// // // Property 'fly' does not exist on type 'Fish | Bird'.
// // //     Property 'fly' does not exist on type 'Fish'.
// // //
// // //
// // // {
// // //     let pet = getSmallPt(true);
// // //
// // //     if ("fly" in pet) {
// // //         pet.fly();
// // //     }
// // //     if (pet.fly) {
// // //       pet.fly();
// // //     }
// // //     function getSmallPt(getFish: boolean): Fish | Bird {
// // //         return getFish ? {
// // //             swim() {
// // //             }
// // //         } : {
// // //             fly() {
// // //             }
// // //         };
// // //     }
// // //
// // //     interface Fish {
// // //         swim();
// // //     }
// // //
// // //     interface Bird {
// // //         fly();
// // //     }
// // //
// // // //piti yavni cast aninq
// // //     let fishPet = pet as Fish;
// // //     let birdPet = pet as Bird;
// // //     console.log(Object.keys(fishPet));
// // //
// // //     if (fishPet.swim) {
// // //         fishPet.swim();
// // //     } else if (birdPet.fly) {
// // //         birdPet.fly();
// // //     }
// // //
// // //     // User-Defined Type Guards
// // //     function isFish(pet: Fish | Bird): pet is Fish { //type predicates
// // //         return (pet as Fish).swim != undefined;
// // //     }
// // //
// // //     if (isFish(pet)) {
// // //         pet.swim();
// // //     } else {
// // //         pet.fly();
// // //     }
// // // }
// // // let ma:Fish;
// // // // ma.swim()=
// // // let fish = {
// // //     name: "hgbdh"
// // // };
// // // let fishS = fish as Fish;
// // // console.log("swim" in fishS);
// // // let mycar = {name: "Nisan", model: "Tiida", year : 1995};
// // // // @ts-ignore
// // // delete mycar.year;
// // // console.log("PI" in Math);
// // //
// // // function isNumber(x: any): x is number {
// // //     return typeof x === "number";
// // // }
// // //
// // // console.log(isNumber(true));
// // // function isString(x: any): x is string {
// // //     return typeof x === "string";
// // }
// interface Animal {
//     numberOfLegs: number;
//     isPet: boolean;
//
//     move(number): number;
// }
// class Dog implements Animal {
//     isPet: boolean;
//     numberOfLegs: number;
//
//
//     move(number): string {
//         return `has moved ${number / 1000} km`
//     }
// }
interface Bird {
    fly()

    layEggs()
}

interface Fish {
    swim()

    layEggs()
}

function getSmallPet(): Fish | Bird {
    return
}

let pet = getSmallPet();

// if ("swim" in pet && pet.swim) {
//     pet.swim()
// } else if ((<Bird>pet).fly) {
//     (<Bird>pet).fly()
// } else {
//     pet.layEggs
// }

// @ts-ignore
function isFish(pet: Fish | Bird): pet is Fish {
    return ((<Fish>pet).swim !== undefined)
}

let mutation: Fish & Bird = {
    fly() {
    }, layEggs() {
    }, swim() {
    }
};

type Tox = string;
type Contanier<T> = { value: T };

class BasicCalculator {
    public constructor(protected value: number = 0) {
    }

    public currentValue(): number {
        return this.value
    }

    public add(operend: number): this {
        this.value += operend;
        return this
    }
}
let b=new BasicCalculator(2).add(158).add(2).currentValue();
console.log(b);
interface Caro {
    manufacturer: string;
    model: string;
    year: number;
}

let taxi: Caro = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2014,
};
type x<K extends keyof any,T>={
    [P in K]:T;
}
type n<T>=T extends string?"string": T extends number