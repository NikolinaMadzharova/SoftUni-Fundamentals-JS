function bombNumbers(nums, bomb){
   
const specialNum= bomb.shift();
const power= bomb.shift();
while(nums.includes(specialNum)){
const indexSpecial= nums.indexOf(specialNum);
const startIndex=Math.max(0, (indexSpecial-power))
const count = Math.min(nums.length-startIndex,power*2+1 )

nums.splice(startIndex, count);
}
let sum=0;
for(let num of nums){
sum+=num
}

console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4,2]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    )