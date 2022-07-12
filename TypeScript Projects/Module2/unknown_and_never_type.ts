//==================Unknown type======================//
let userInput:unknown;
let userName: string;

userInput='Manish';

//userName=userInput;  //error becz typescripts wont check the type of unknown type variable

if(typeof userInput=='string'){
    userName=userInput;  // now we can assign by manually checking the type 
}

//==============================*NEVER TYPE*============================//
function generateError(message:string, code:number): never {  ///generateError function of return type never
    throw { message:message, errorCode:code}; // never returns anything
    //while(true)  ===> infinite loop also never return anything
}

generateError("Error occured", 505);