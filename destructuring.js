num1 = 1;
num2 = 2;
num3 = 3;
// structure array with above elements

nums = [num1, num2, num3];

[a, [...c]] = nums; // destructure

console.log(a);
console.log(b);
console.log(c);

name = "john";
age = 34;

user = { uname: name, uage: age };
const { uname, uage } = user;
console.log(uname);
