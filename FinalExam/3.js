function solve(arr){
let FbData={};
   let  command = arr.shift();
    while(command !==`Log out`){
let tokens=command.split(': ');
let action=tokens[0];


if(action===`New follower`){
    let name = tokens[1];
    if(!(name in FbData)){
        FbData[name]={likes: 0,comments:0 };
    }

}else if(action===`Like`){
let name =tokens[1];
let countLikes= Number(tokens[2]);
if(name in FbData){
FbData[name].likes+=countLikes;
}else{
    FbData[name]={likes: countLikes, comments: 0};
}

}else if(action	===`Comment`){
let name= tokens[1];
if(name in FbData){
    FbData[name].comments+=1;
}else{
    FbData[name]={likes: 0, comments: 1};
}

}else if(action===`Blocked`){
let name = tokens[1];
if(name in FbData){
delete FbData[name];
}else{
    console.log(`${name} doesn't exist.`);

}

}
command=arr.shift();

    }
    let FbEntries= Object.entries(FbData);
    console.log(`${FbEntries.length} followers`)
    
    for (let [name, information] of FbEntries) {
        console.log(`${name}: ${information.likes+ information.comments}`)
        
    }

}

solve(["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
    