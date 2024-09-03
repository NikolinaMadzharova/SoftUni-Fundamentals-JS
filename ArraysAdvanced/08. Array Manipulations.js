function arrayManipulations(commands){
let arr = commands.shift().split(' ').map(Number);
for(let i=0; i<commands.length; i ++){
 let token = commands[i].split(' ');
let command=token.shift();
let firstNum=Number(token.shift())
let secondNum=Number(token.shift())

firstNum=Number(firstNum);
secondNum=Number(secondNum);
 
if(command=="Add"){
    arr.push(firstNum); 
}
else if(command==='Remove'){
arr.splice(arr.indexOf(firstNum),1);
}
else if(command==='RemovedAt') {

}
else if(command==='Insert'){

}


}


arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
    
)
