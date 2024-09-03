function perfectNumber(num){
let sumOfDivisors=0;
for(let i=1; i<num; i++){
    if(num%i===0){
        sumOfDivisors+=i;
    }
}
    
if(num===sumOfDivisors){
    console.log('We have a perfect number!');
}
else{
    console.log("It's not so perfect.");
}

}

perfectNumber(6);