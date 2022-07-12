function add(n1, n2) {
    return n1 + n2;
}
function addString(s1, s2) {
    return s1 + s2;
}
function printResult(n) {
    console.log(n);
}
printResult(add(1, 2));
//================================*FUNCTION AS TYPES*===============================================//
var combineValues; // this is fine but we should be more specific about function parameter and return type
var combineValues1; // combine values1 acan be assigned with a function with 2 parameter of type numbers and number as return type
combineValues1 = add; //combineValues1 is a type of add function
console.log(combineValues1(2, 2)); //now combinevales1 can be act as add function
// combineValues1=printResult;  ===> error because parameter and return type of combineValues1 doesnot match with printResult function
//=========================================*CALL BACKS*==================================================//
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) { console.log(result); });
