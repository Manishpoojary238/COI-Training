//================================DESTRUCTURING OBJECT============================
const person={
    name:'Manish',
    age: 23,
    greet(){                              //here we have used this keyword so we cant use arrow function.
        console.log('hi I am '+this.name);
    }
}

const printName = ({name})=>{  // object destructuring (accepts only name property from person object)
    console.log(name);
};

printName(person);

const {name , age} = person;   //object destructuring
console.log(name, age);

//===============================ARRAY DESTRUCTURING=============================

const hobbies=['reading','swimming'];
const [hobby1,hobby2]= hobbies;  //array destructuring
console.log(hobby1,hobby2);