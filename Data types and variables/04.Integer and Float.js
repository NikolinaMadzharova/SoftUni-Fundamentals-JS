function integerAndFloat(a, b, c){
let sum= a+b+c;
let sumString=`${sum}`;
let isFloat= false;
for(let i = 0; i<sumString.length; i++ ){
if(sumString[i] === "."){
isFloat=true;
break;
}
}
const output =isFloat ? "Float" : "Integer";
console.log(`${sum} - ${output}`)


}
integerAndFloat(9, 100, 3.1);