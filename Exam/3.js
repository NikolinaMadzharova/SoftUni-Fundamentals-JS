function solve(arr){
    let cards=arr.shift().split(', ');
    let n = Number(arr.shift());
    for(let i =0; i<n; i++){
        let tokens=arr[i].split(', ');
        let command= tokens[0];
        if(command==='Add'){
            let cardToAdd=tokens[1];
            if(cards.includes(cardToAdd)){
                console.log(`Card is already in the deck`);
            }else{
                cards.push(cardToAdd);
                console.log(`Card successfully added`);
            }
        }else if(command==='Remove'){
            let cardToRemove=tokens[1];
            if(cards.includes(cardToRemove)){
                let index= cards.indexOf(cardToRemove);
                console.log('Card successfully removed');
                cards.splice(index, 1);
            }else{
                console.log(`Card not found`);
            }

        }else if(command==='Remove At'){
            let indexToRemove=tokens[1];
            if(indexToRemove>(cards.length-1)|| indexToRemove<0){
                console.log(`Index out of range`);
            }else{
                cards.splice(indexToRemove, 1);
                console.log(`Card successfully removed`);
                
            }
        }else if(command==='Insert'){
            let index=tokens[1];
            let cardName=tokens[2];
            if(index>(cards.length-1)|| index<0){
                console.log(`Index out of range`);
            }else if(cards.includes(cardName)){
                console.log(`Card is already added`);
            }else{
                cards.splice(index, 0, cardName);
                console.log(`Card successfully added`);
            }

        }
        
    }
console.log(cards.join(', '))

}
solve(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])
    