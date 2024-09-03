function processOddNums(arr){
    let newArr=[];
    for(let i =0; i<arr.length; i++){
        if(i%2 !== 0){
            newArr.unshift(arr[i]);
        }

    }

     const result=newArr.map(x=>x*2)
    console.log(result.join(' '));

}

processOddNums([10, 15, 20, 25]);