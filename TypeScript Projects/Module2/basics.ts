//console.log('Your code goes here...');
function add(n1:number,n2:number,typeResult:boolean,phrase:string){
    const result=n1+n2;
    if(typeResult){
        console.log(phrase+result);
    }
    else{
        return result;
    }
    
}
const number1=5; 
const number2=7.8;
const printResult=true;
const resultPhrase="result is:";

const res=add(number1,number2,printResult,resultPhrase);

/*let num=5  //good practice( let specifies variable)
let num:number=5 //not a good practice
let abc="jsadjh"; //variable abc is set to string;
abc="ksgd"; // works fine bcz abc alrady set to string and now we can assign another string
abc=766; //does not work becz abc is already set as string now we cant asssign number value to string variable.*/