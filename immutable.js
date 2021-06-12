// mutation - change

// primitive data type => strings, numbers, booleans, etc...

let a = 5;
let b = a; // copying the contents of a to b
b = 9;
console.log(a); // 5

// reference data type => arrays, objects, collections etc...
let x = [1, 2, 3];
// let y = x; //copying the address of x to y, not content
// y.push(4); // mutate x
let y = [...x]; // spread
y.push(4);
console.log(x, y); // [1,2,3,4]

let me = { name: "me", age: 40 };
let your = me; // copying the address of me to your
your.name = "you"; // mutate y
console.log(me.name); //
