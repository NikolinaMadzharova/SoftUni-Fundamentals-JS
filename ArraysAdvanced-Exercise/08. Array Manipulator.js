function arrayManipulator(nums, commands){
    for(const command of commands){
        let tokens= command.split(' ');
        const action = tokens.shift();

        if(action ==='add'){
            const index=Number(tokens.shift());
            const element= Number(tokens.shift());

            nums.splice(index, 0, element);
        }else if(action==='addMany'){
            const index= Number(tokens.shift());

            for(const element of tokens){
                nums.splice(index, 0, element);
                index++;
            }
        }else if(action==='contains'){
            const element=Number(tokens.shift())
            const elementIndex=nums.indexOf(element);
            console.log(elementIndex);
        }else if(action==='remove'){
            const index=Number(tokens.shift());
            nums.splice(index,1);

        }else if(action==='shift'){
          const rotations=Number(tokens.shift());
          for(let rotation=1; rotation<=rotations; rotation++){
           const firstEl=nums.shift();
           nums.push(firstEl);

          }

        }else if(action==='print'){
            console.log(`[${nums.join(' ')}]`)
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    );