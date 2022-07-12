function combine(
    input1 : number|string, 
    input2 : number|string, 
    resultConversion : 'as-number' | 'as-text')  //literal type
    {
    let result;
    if(typeof input1=='number' && typeof input2=='number' || resultConversion=='as-number' ){
        result= +input1 + +input2;  //converting input1 and input2 to number
    }else{
        result= input1.toString() + input2.toString();
    }
    return result;
}
const combineAges= combine(10,20,"as-number");
const combineStringAges=combine('10','20','as-number');
const combineNames=combine('Manish','Poojary','as-text');
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);