/*const person1={
name: "manish",
age : 23,
hobbies : ["reading books","cooking"]
}; //these works fine if we are not using tuples. if we use tuples the we need to specify it explicitly as shown below
*/
const person : {
    name:string;     
    age:number;       
    hobbies:string[];  
    role:[number,string] //if we use tuples the we need to specify it explicitly 
} = {
    name : "Manish",
    age : 23,
    hobbies : ["reading books","cooking"],
    role:[2,"author"] /*we want to create a tuple of 2 element where 1st element is number and 2nd is string in tuple size and type is fixed. means we cannot add extra elemrnt to the tupple and we cant replace element of one type with another type*/
};
/*person.role[0]=4; //works
person.role[0]="abc" //error*/
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
    console.log(hobby.toUpperCase()); //which and all operations can be performed that can be performed on hobby. because hobby is a string
}

let favoriteActivities : string[]; //array of string
favoriteActivities=["reading books"]; //works fine

/*favoriteActivities="reading books"; // error because favoriteActivities is initialized as arraay of string so we cant add single string.
favoriteActivities=["swimming","cycling"]; //works fine
favoriteActivities=["cycling",1]; //error since 1 is a number it wont form a array of string. each element of string[] should be a string.
let foodOrNumber : any[]; //array of any data type
foodOrNumber=["idli",1]; //works fine*/
