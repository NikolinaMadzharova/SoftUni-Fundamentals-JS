function sumFirstAndLastEl(arr){
const firstEl= Number(arr.shift());
const lastEl= Number(arr.pop());
const sum= firstEl+lastEl;
console.log(sum);

}

sumFirstAndLastEl(['20', '30', '40']);