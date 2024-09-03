function solve(arr){
    let neededExperience=arr.shift();
    let countBatlles = arr.shift();
    let experience=0;

    for(let i =1; i<=arr.length; i++){
        if(i%3===0){
            experience+= 1.15* arr[i-1];
        }else if(i%5===0){
             experience+=0.9*arr[i-1];

        }else if(i%15===0){
         experience+=1.05*arr[i-1];

        }else{
            experience+=arr[i-1];
        }
     if(experience>=neededExperience){
        console.log(`Player successfully collected his needed experience for ${i} battles.`);
        break;
     }

    }
    if(experience<neededExperience){
        console.log(`Player was not able to collect the needed experience, ${(neededExperience-experience).toFixed(2)} more needed.`);
    }


}

solve(([500,
    5,
    50,
    100,
    200,
    100,
    30])
    );