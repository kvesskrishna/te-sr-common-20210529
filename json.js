let course = { id: 1, title: 'javascript', price: 2345, rating: 4.5 }
console.log(course.id);

json = JSON.stringify(course) // converts object to string
console.log(json)
console.log(json.length);
localStorage.setItem('course', json) // setting localStorage value

lsjson = localStorage.getItem('course'); // getting it and assigning it to a variable
lsjson = JSON.parse(lsjson) // converts string to objedt
console.log(lsjson)