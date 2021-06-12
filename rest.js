function sum(...nums) {
  //   return a + b;
  console.log(nums);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

result = sum(2, 3, 4, 100);

console.log(result);
