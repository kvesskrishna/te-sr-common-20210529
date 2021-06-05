numbers = [11, 24, 344, 47, 59];
// index - address of element in the array starting from 0

// size of the array
console.log(numbers[3])
console.log(numbers.length)

// print the values of array elements
// document.write(numbers)
for (let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} is at index ${i}`)
}


// add elements to arrays
// add at the end of the array
numbers.push(23)
// add at the beginning of the array
numbers.unshift(67)
// add at some index of the array
//insert 99 btw 24,344
numbers.splice(3, 0, 99, 100)
// remove from arrays
// remove from end of the array
setTimeout(function () {
    numbers.pop();
    // add at the beginning of the array
    numbers.shift();
    console.log('shift and pop completed');
    console.log(numbers)
}, 1000)
// add at some index of the array

numbers.splice(5, 1)


// repeated tasks on array

numbers.forEach(num => console.log(num)) // not returning any new value

newnumbers = numbers.map(num => 2 * num) // new array, will not mutate original array
console.log(numbers)
console.log(newnumbers)
