function sorting(arr){
    let sortedArr=arr.sort((a, b)=> b-a);
    let result=[];
    while(sortedArr.length>0){
        let firstEl=sortedArr.shift();
        result.push(firstEl);
        if(sortedArr.length>=1){
            let lastEl= sortedArr.pop();
            result.push(lastEl);
        }
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);