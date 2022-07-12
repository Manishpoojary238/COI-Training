const person={
    name:'Manish',
    age: 23,
    greet(){                              //here we have used this keyword so we cant use arrow function.
        console.log('hi I am '+this.name);
    }
}

person.greet();

const copiedPerson = {...person};  //using spread operator to copy all the proprties of person object to copiedPerson object
console.log(copiedPerson);

//=================================Arrays=================================//
  
  const hobbies = ['Sports', 'Cooking'];
  // for (let hobby of hobbies) {
  //     console.log(hobby);
  // }
  console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
  console.log(hobbies);

  hobbies.push('programming');
  console.log(hobbies);

  const copiedArray= [...hobbies]; //using spread operator to copy all the elements of hobbies array to copiedArray.
  console.log(copiedArray);

  const toArray= (...args) =>{  //rest operator to pass infinite parameter values
      return args;
  }

  console.log(toArray(1,2,3,4,5,6));