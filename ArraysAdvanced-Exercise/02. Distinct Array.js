function distrinctArray(arr){
    newArr=[];

    for(let i =0; i<arr.length; i++){
      if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
      }

    }
console.log(newArr.join(' '));
}

distrinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);