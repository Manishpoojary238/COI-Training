enum Role {ADMIN,READ_ONLY,AUTHOR};
const person  = {
    name : "Manish",
    age : 23,
    hobbies : ["reading books","cooking"],
    role: Role.ADMIN
};

if(person.role==Role.ADMIN){
    console.log("Role is admin");
}