function simpleCalculator(num1, num2, operator){
    const add = (x,y) => x+y;
    const subtract = (x,y)=>x-y;
    const divide = (x,y)=>x/y;
    const multiply = (x,y)=>x*y;

    switch(operator){

        case'add': 
        console.log(add(num1, num2));
        break;
        case'subtract': 
        console.log(subtract(num1, num2));
        break;
        case'divide':
        console.log(divide(num1, num2));
        break;
        case'multiply':
        console.log(multiply(num1, num2));
        break;
    }


}

simpleCalculator(5,5,'multiply');