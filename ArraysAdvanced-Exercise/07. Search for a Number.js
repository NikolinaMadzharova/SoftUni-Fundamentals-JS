function searchForNumber(nums, threeNums){
    const [firstNum, secondNum, thirdNum]=threeNums;
let elements= nums.slice(0, firstNum);
elements.splice(0, secondNum);
let count=0;
for(let num of elements){
    if(num===thirdNum){
     count++;
    }
}

console.log(`Number ${thirdNum} occurs ${count} times.`);

}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )