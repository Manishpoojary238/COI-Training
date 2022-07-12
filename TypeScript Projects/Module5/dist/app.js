"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person('Max');
let user2 = new Person();
user1.greet('Hi there - I am');
user2.greet('Hi there - I am');
//user1.name='Manish';  // not possible because name is readonly
console.log(user1);
console.log(user2);
