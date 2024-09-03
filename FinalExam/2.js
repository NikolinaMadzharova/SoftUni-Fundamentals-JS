function solve(arr){
let number = Number(arr.shift());


    let regEx=/^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$/mg;


for(let i =1; i<=number; i ++){
    let string = arr.shift();
    let isValid = regEx.test(string);
    if(isValid){
let match = string.match(regEx)[0];
let tagRegEx =/([A-Z][a-z]{2,})/;
let tag = match.match(tagRegEx)[0];
let ASCII=''
for(let n  = 0; n<3; n++){
    let numbersRegEx=/\d+/g;
   // console.log(match)
    //let numbers = match.match(numbersRegEx)[0];
    
    let numbers= numbersRegEx.exec(match)[0];
    match= match.replace(numbers,'');
    
    numbers=Number(numbers)
    
    
    let decryptedMssg=String.fromCharCode(numbers);
    ASCII+=decryptedMssg;
    
    
}
console.log(`${tag}: ${ASCII}`)


//console.log(match)
    }else{
        console.log(`Valid message not found!`);
    }
}
}

solve(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
    