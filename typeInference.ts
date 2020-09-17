let xy = [0, 1, null];
console.log(typeof xy);
interface Named{
    name: string;
}
let xz:Named;
let t={name:"Name",lastName:"Surname"};
xz=t;
console.log(typeof xz);
let xt = (a: number) => 0;
console.log(typeof xt);
var DA: { [key: string]: string };
var B: { foo: string } = { foo: 'hahah' };
console.log(DA=({num:"hdvc"}));
enum EventType {
    Mouse,
    Keyboard,
}

interface Event {
    timestamp: number;
}
interface MouseEvent extends Event {
    zss: number;
    jhbvdkv: number;
}
interface KeyEvent extends Event {
    keyCode: number;
}

interface NotEmpty<T> {
    data: T;
}
interface NoEmpty<T> {
}
let xyl: NotEmpty<number>;
let y: NoEmpty<number>;
y=xyl;
