function firstAndLastKNumbers(arr){
    const k = arr.shift();
    const firstResult = arr.slice(0,k);
    const secondResult = arr.slice(-k);

    console.log(firstResult.join(' '));
    console.log(secondResult.join(' '));
}

firstAndLastKNumbers([2,  7, 8, 9]);