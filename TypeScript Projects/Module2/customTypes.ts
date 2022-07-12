type Manish = number;  //by using this we can use type manish in place of type number
type Combine= number|string;
type ConversionDescriptor= 'as-number' | 'as-text';

function combine(
    input1 : Combine, //using custom type combine in place of number|string
    input2 : Combine, 
    resultConversion : ConversionDescriptor )  
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