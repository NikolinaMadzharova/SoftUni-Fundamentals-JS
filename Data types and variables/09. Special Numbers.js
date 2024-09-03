function specialNumbers(num){
    for(let i = 1; i<=num; i++){
        let currentNum=i;
    let sum=0;
let currentNumString=`${currentNum}`;
let isSpecial = false;
for(let d =0; d<currentNum.length; d++){
let digit = Number(currentNumString[d]);
sum+=digit;
}
if(sum===7 || sum===5 ||sum===11){

isSpecial=true;
}

    if(isSpecial){
        console.log(`${currentNum} -> True`);
    }
    else{
        console.log(`${currentNum} -> False`);
    }

    }
}

specialNumbers(16);