function theImitationGame(arr){
let message= arr.shift();
let command=arr.shift();

while(command!=='Decode'){
let tokens=command.split('|')
action = tokens.shift();

if(action==='Move'){
let n=Number(tokens.shift());
let lettersToMove=message.substring(0, n);
message=message.replace(lettersToMove, '');
message+=lettersToMove;

}else if(action==='Insert'){
let index= Number(tokens.shift());
let value= tokens.shift();

message = message.substring(0, index)+value+message.substring(index);


}else if(action==='ChangeAll'){
let substring = tokens.shift();
let replacement = tokens.shift();

while(message.includes(substring)){
    message=message.replace(substring, replacement);
}
}
command	=arr.shift();
}

console.log(`The decrypted message is: ${message}`)
}