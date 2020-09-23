var xy = [0, 1, null];
console.log(typeof xy);
// var xz;
// var t = { name: "Name", lastName: "Surname" };
// xz = t;
// console.log(typeof xz);
// var xt = function (a) { return 0; };
// console.log(typeof xt);
// var DA;
// var B = { foo: 'hahah' };
// console.log(DA = ({ num: "hdvc" }));
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.zss + "," + e.jhbvdkv); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) {
    return console.log(e.zss + "," + e.jhbvdkv);
});
listenEvent(EventType.Mouse, (function (e) {
    return console.log(e.zss + "," + e.jhbvdkv);
}));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
