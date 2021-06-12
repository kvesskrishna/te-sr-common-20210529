function outerFunction() {
  var outerVar = 5;
  function InnerFunction(factor = 1) {
    let innerVar = outerVar * factor;
    console.log(innerVar);
  }
  return InnerFunction;
}

var resFun = outerFunction()(5)();
console.log(resFun);
// resFun(2); //get it from innerFun
