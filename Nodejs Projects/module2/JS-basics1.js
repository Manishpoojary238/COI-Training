const uname='Manish';
let age=23;
const hashobbies=true;

age=24; //works
//uname='Manish Poojary'; //error


function user(username,userage,userhashobbies){  // normal function
    return ('user name is ' +username + ', user age is ' +userage+ ' and user has hobby?:' +userhashobbies);
}

const user1= (username,userage,userhashobbies)=>{  // one way of creating a arrow function
    return ('user name is ' +username + ', user age is ' +userage+ ' and user has hobby?:' +userhashobbies);
};

const add= (a,b) => a+b;    //another way of creating arrow function when function contains only one line.

const addOne= a => a+1;     //another way of creating arrow function when function contains only one parameter.

const addRandom= () => 1+11  ////another way of creating arrow function when function has no parameter.



console.log(user(uname,age,hashobbies));
console.log(user1(uname,age,hashobbies));
console.log(add(3,5));
console.log(addOne(10));
console.log(addRandom());

