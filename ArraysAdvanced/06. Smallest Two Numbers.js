function smallestTwoNumbers(arr){
    const newArr= arr.sort((a,b) =>a-b);
    console.log(newArr.slice(0,2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);