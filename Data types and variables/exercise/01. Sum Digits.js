function sumDigits(num){
let sum= 0;
    let numString=num+'';
    for(let i= 0; i<numString.length; i++){
 let digit=Number(numString[i]);
 sum+=digit;

    }

    console.log(sum);
}

sumDigits(56);