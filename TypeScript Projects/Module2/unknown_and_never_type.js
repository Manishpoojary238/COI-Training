//==================Unknown type======================//
var userInput;
var userName;
userInput = 'Manish';
//userName=userInput;  //error becz typescripts wont check the type of unknown type variable
if (typeof userInput == 'string') {
    userName = userInput; // now we can assign by manually checking the type 
}
//==============================*NEVER TYPE*============================//
function generateError(message, code) {
    throw { message: message, errorCode: code }; // never returns anything
    //while(true)  ===> infinite loop also never return anything
}
generateError("Error occured", 505);
