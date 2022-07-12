type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Employee = {
    name: string;
    startDate: Date;
  };
  
  // interface ElevatedEmployee extends Employee, Admin {}
  
  type ElevatedEmployee = Admin & Employee;  //intersection types:
  
  const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
  };
  
  type Combinable = string | number;
  type Numeric = number | boolean;
  
  type Universal = Combinable & Numeric;   //intersection types
  

  function add(a:number,b:number):number; //function overloading: no need to definr the body for overloaded string if the function is same. it will take the body logic from line 31
  function add(a:string,b:string):string;
  function add(a:string,b:number):string;
  function add(a:number,b:string):string;
  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {   //type guard. : we cant combine if one of the parameter is string. therefore we are usig condition to check it. this is called type guard
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result=add('Manish','Poojary');
  result.split('');
  
  
  type UnknownEmployee = Employee | Admin;
  
  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {   //type guard
      console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {   //type guard
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
  
    loadCargo(amount: number) {
      console.log('Loading cargo ...' + amount);
    }
  }
  
  type Vehicle = Car | Truck;
  
  const v1 = new Car();
  const v2 = new Truck();
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
  
  useVehicle(v1);
  useVehicle(v2);

  //====================================Discriminated Unions==========================================//
  interface Bird {
    type: 'bird';
    flyingSpeed: number;
  }
  
  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }
  
  type Animal = Bird | Horse;
  
  function moveAnimal(animal: Animal) {
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
  
  moveAnimal({type: 'bird', flyingSpeed: 10});

  //======================================Type Casting======================================//
  const userInputElement = <HTMLInputElement>document.getElementById('user-input1')!;
  userInputElement.value='Hi There(usimg syntax1)';

                     //(or)

 const userInputElement1 = document.getElementById('user-input2');
 if (userInputElement1) {
   (userInputElement1 as HTMLInputElement).value = 'Hi there!(using sysntax2)';
 }
 
 //=================================Index Properties=========================================//
 interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string;    //properties for both email and userName
  }
  
  const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
  };

  console.log(errorBag);
console.log('======================Optional Chaining====================')

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title); //if fetchedUserData exists then only it will chech for job, if job exists then only it will check title.


console.log('======================Nullish Coalescing====================')
const userInput = undefined;
const userInput1='';

const storedData = userInput ?? 'DEFAULT';  //if userInput is undefined then only 'default' will be stored in storeData
const storeData1 = userInput1 ?? 'DEFAULT';  //if userInput1 is empty string or any other value then that will be stored inside storedata1
console.log(storedData);
console.log(storeData1);
