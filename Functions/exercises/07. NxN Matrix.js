function NxNMatrix(num){
    let row=[];
    for(let i =1; i<=num; i++){
         row.push(num);
    }
    for(let j=1; j<=num; j++){
      console.log(row.join(' '));
    }


}

NxNMatrix(3);