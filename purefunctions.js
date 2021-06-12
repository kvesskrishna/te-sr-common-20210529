function test(name) {
  return "Testing" + name;
}

console.log(test("alex"));

// Pure function - the output of it is always the same, for a given input

function random() {
  //   console.log(Math.random());
  let date = new Date();
  // console.log(date);
  //making an http request
}

random();
// ImPure function - the output of it is always changing.

function add(a, b) {
  return a + b + Math.random(); // makes impure
  return a + b; // makes pure
}

sum = add(4, 5);
