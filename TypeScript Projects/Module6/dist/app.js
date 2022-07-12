"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard. : we cant combine if one of the parameter is string. therefore we are usig condition to check it. this is called type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Manish', 'Poojary');
result.split('');
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { //type guard
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) { //type guard
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
//======================================Type Casting======================================//
const userInputElement = document.getElementById('user-input1');
userInputElement.value = 'Hi There(usimg syntax1)';
//(or)
const userInputElement1 = document.getElementById('user-input2');
if (userInputElement1) {
    userInputElement1.value = 'Hi there!(using sysntax2)';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
console.log(errorBag);
console.log('======================Optional Chaining====================');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); //if fetchedUserData exists then only it will chech for job, if job exists then only it will check title.
console.log('======================Nullish Coalescing====================');
const userInput = undefined;
const userInput1 = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; //if userInput is undefined then only 'default' will be stored in storeData
const storeData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'DEFAULT'; //if userInput1 is empty string or any other value then that will be stored inside storedata1
console.log(storedData);
console.log(storeData1);
