function rightPlace(string, char, right) {
let newWord='';
for(let i =0; i<string.length; i++){
if(string[i]== "_"){
newWord+=char;

}
else{
    newWord+=string[i];
}

}

if(newWord===right){
    console.log("Matched");
}
else{
    console.log(`Not Matched`);
}
}

rightPlace("Str_ng", "i", "Strin");