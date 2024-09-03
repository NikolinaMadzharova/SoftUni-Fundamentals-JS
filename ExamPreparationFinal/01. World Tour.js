function worldTour(arr){
    let string = arr.shift();
    let command =arr.shift();

    while(command!==`Travel`){
       if(command.includes(`Add`)){
     tokens = command.split(':');
     let index = Number(tokens[1]);
     let textToAdd=tokens[2];
     if(index>=0&& index< string.length){
        let left=string.substring(0,index);
        let right=string.substring(index);
        string=left+textToAdd+right;
     }
     console.log(`${string}`);
       }else if(command.includes(`Remove`)){
     tokens = command.split(':');
     let startIndex= Number(tokens[1]);
     let endIndex= Number(tokens[2])+1;
     if(startIndex>=0 && endIndex>0 && startIndex<string.length && endIndex<string.length && startIndex<endIndex){
        let textToRemove = string.substring(startIndex, endIndex);
        string=string.replace(textToRemove, '');
        console.log(string);
     }

       }else if(command.includes(`Switch`)){
        let tokens = command.split(':');
        let oldStr= tokens[1];
        let newStr= tokens[2];
        while(string.includes(oldStr)){
            string = string.replace(oldStr, newStr);
        }
        console.log(string);
       }
        command=arr.shift();
    }
console.log(`Ready for world tour! Planned stops: ${string}`)
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
    