"use strict";
const userName = 'Max';
// userName = 'Maximilian';  // becz userName is constant. you cant change
//let age = 30;
//age = 29;  // possible bcz age is variable
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);
// console.log(result);
//=======================================Arrow Functions=====================================//
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
//====================================Default Parameter========================================//
const add1 = (a, b = 1) => a + b; // b is default parameter with value=1
// default parameter should always be use at end side of parameter list
//=======================================Spread Operator(...)======================================//
const hobbies = ['playing', 'swimming', 'singing'];
const activeHobbies = ['reading'];
activeHobbies.push(...hobbies); // it will copy all the element of  hobbies to activeHobbies
const activeHobbies1 = ['reading', ...hobbies]; // this is also correct
console.log(activeHobbies); // output= ['reading','playing','swimming','singing']
console.log(activeHobbies1); // output= ['reading','playing','swimming','singing]
const person = {
    Firstname: 'manish',
    age: 23
};
const copiedPerson = Object.assign({}, person); //copy all the properties of person object to copiedPerson object
//========================================Rest Parameter=============================================//
const addNumber = (...numbers) => {
    return numbers.reduce((curResult, curVlue) => {
        return curResult + curVlue;
    }, 0);
};
const result1 = addNumber(1, 5, 7, 8, 9, 3.5);
const result2 = addNumber(5, 7, 8);
console.log(result1);
console.log(result2);
//=========================================Array and Object Destructing===================================//
const [hobby1, hobby2, ...remainingHobby] = hobbies; //destructing array 
console.log(hobby1, hobby2, remainingHobby); //output: playing singing ['singing']
console.log(hobbies); //output: ['playing','swimming','singing']
const { Firstname, age } = person;
console.log(Firstname, age);
console.log(person);
