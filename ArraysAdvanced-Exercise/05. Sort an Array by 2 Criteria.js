function sortBt2Criteria(arr){

    const sortedArr=arr.sort((a,b)=>a.length-b.length || a.localeCompare(b))
    console.log(sortedArr.join('\n'));
}

sortBt2Criteria(['alpha', 'beta', 'gamma']);