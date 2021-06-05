
//with callback
function add(a, b, callback) {
    let c = a + b;
    return callback(c);
}
function double(x) {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    return 2 * x;
}
console.log(add(3, 4, double));
console.log('with callback: after printing result')


// without callback
function add1(a, b) { return a + b; }
function double1(x) {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    return 2 * x;
}

console.log(double1(add1(3, 4)));
console.log('without callback: after printing result')
