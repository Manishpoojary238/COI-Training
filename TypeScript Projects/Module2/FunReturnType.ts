function add(n1:number,n2:number){ //by default return type will be number
    return n1+n2;
}

function addString(s1:string,s2:string){ //automatically returns string
    return s1+s2;
}

function printResult(n:number){ //void return type
    console.log(n);
}

printResult(add(1,2));


//================================*FUNCTION AS TYPES*===============================================//

let combineValues : Function; // this is fine but we should be more specific about function parameter and return type
let combineValues1 : (a:number,b:number)=>number; // combine values1 acan be assigned with a function with 2 parameter of type numbers and number as return type
combineValues1=add;  //combineValues1 is a type of add function
console.log(combineValues1(2,2));  //now combinevales1 can be act as add function
// combineValues1=printResult;  ===> error because parameter and return type of combineValues1 doesnot match with printResult function


//=========================================*CALL BACKS*==================================================//

function addAndHandle(n1 : number, n2 : number, cb : (a:number)=>void){
    const result=n1 + n2;
    cb(result);
}


addAndHandle(10,20,(result)=>{console.log(result);});