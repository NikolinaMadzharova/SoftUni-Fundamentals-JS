function triplesOfLatinLetters(numString){
    num=Number(numString);
for(i=0; i<=num; i++){
    let letter= String.fromCharCode(97+num);
    console.log(letter);
}

}
triplesOfLatinLetters(3);