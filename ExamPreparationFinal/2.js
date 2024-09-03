function solve(input){
let pattern=/([|#])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g;
let string = input.shift();
let items=[];
let totalCalories=0;
let match = pattern.exec(string)

while(match){
let itemName= match.groups.item;
let expiration =match.groups.expDate;
let calories=Number(match.groups.cals);
totalCalories+=calories;

items.push(`Item: ${itemName}, Best before: ${expiration}, Nutrition: ${calories}`)
    match= pattern.exec(string)
}

let days= Math.floor(totalCalories/2000);
console.log(`You have food to last you for: ${days} days!`);
console.log(items.join('\n'))

}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])