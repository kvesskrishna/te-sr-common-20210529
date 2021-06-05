user = 'tom'
function test() {
    const user = {
        name: 'john',
        age: 34,
        email: 'bobb@example.com',
        phone: '+91-23423423423',
        address: { doorno: 2, floor: 3, apartment: 'villa', city: 'London', country: 'United Kingdom' },
        hobbies: ['swimming', 'painting'],
        getPhysicalInfo: function () {
            console.log(window.user)//
            window.user = 'alex'
            console.log(this.name + ' is 34 years old');
        }

    }
    return user;
}
test().getPhysicalInfo();
console.log(console)
console.log(window.user) //
console.log(test().age);
document.write('hello')
    // user.getPhysicalInfo();
// let username = user.name;
// let usercountry = user.address.country;
// console.log(username, usercountry)
