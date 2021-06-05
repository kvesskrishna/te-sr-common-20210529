function test() {

    let age = 30;

    // document.write(name + ' is ' + age + ' years old');


    const name = 'john'; // function scoped
    if (age > 25) {
        // name = 'alex'
        let number = 4; // block scoped
        console.log(name + ' is ' + age + ' years old');//
        console.log(number) //4
    }

    console.log(name + ' is ' + age + ' years old');
    console.log(name) //
}
// console.log(name)
test();
