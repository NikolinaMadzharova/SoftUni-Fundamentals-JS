function solve(arr){
let string = arr.shift();
let command = arr.shift();

while(command !== 'Abracadabra'){
let tokens = command.split(' ');
let action = tokens[0];
if(action===`Abjuration`){
    string=string.toUpperCase();
    console.log(string);
}else if(action==='Necromancy'){
string= string.toLowerCase();
console.log(string);

}else if(action==='Illusion'){
    let index= Number(tokens[1]);
    let letter = tokens[2];
    if(index>=0 && index<string.length){
       string = string.slice(0, index)+ letter+ string.slice(index+1);
       console.log(`Done!`);
    }else{
        console.log(`The spell was too weak.`);
    }

}else if(action===`Divination`){
let firstStr=tokens[1];
let secondStr=tokens[2];
if(string.includes(firstStr)){
    string = string.split(firstStr).join(secondStr);
    console.log(string);
}
}else if(action===`Alteration`){
let substring = tokens[1];
if(string.includes(substring)){
    string= string.split(substring).join('');
    console.log(string);
}
}else{
    console.log(`The spell did not work!`);
    
}

    command= arr.shift();
}
}

solve(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])
    