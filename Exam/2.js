function solve(arr){
    let commands= arr[0].split('||');
    let fuel=arr[1];
    let ammunition =arr[2];
    for(let i =0; i<commands.length; i++){
        let tokens= commands[i].split(' ');
        let command= tokens[0];
        if(command==='Travel'){
            let lightYears= Number(tokens[1]);
            if(lightYears<=fuel){
                console.log(`The spaceship travelled ${lightYears} light-years.`);
                fuel-=lightYears;
            }else{
                console.log(`Mission failed.`);
                return;
            }
        }else if(command==='Enemy'){
            let armour=Number(tokens[1]);
            if(ammunition>=armour){
                ammunition-=armour;
                console.log(`An enemy with ${armour} armour is defeated.`);
            }else{
                let neededFuelToRun=armour*2;
                if(fuel>=neededFuelToRun){
                    fuel-=neededFuelToRun;
                    console.log(`An enemy with ${armour} armour is outmaneuvered.`);
                }else{
                    console.log(`Mission failed.`)
                    return;
                }
            }

        }else if(command==='Repair'){
            let number=Number(tokens[1]);
            fuel+=number;
            ammunition+=(number*2);
            console.log(`Ammunitions added: ${number*2}.`);
            console.log(`Fuel added: ${number}.`);
        }else if(command==='Titan'){
            console.log(`You have reached Titan, all passengers are safe.` )
            return;
        }
    }



}
solve([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
    '60', 
    '100' ])
    
    