function ammazingNumbers(num){
let numString = `${num}`;
let sum=0;
for(let i = 0;i<numString.length;i++ ){
sum+=Number(numString[i]);

}
let isAmazing= false;
const sumString=`${sum}`;
for(let i =0; i<sumString; i++){
if(sumString[i]==="9"){
    isAmazing=true;
}

}
console.log(
isAmazing? `${num} Amazing? True`: `${num} Amazing? False`

)
}

ammazingNumbers(333);