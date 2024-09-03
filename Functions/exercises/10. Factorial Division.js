function factorialDivision(num1, num2){

    function factorial(num){
        let factorial=1;
        for(let i =1; i<=num; i++){
            factorial*=i;
        }
        return factorial;
    }

    const factorialNum1= factorial(num1);
    const factorialNum2= factorial(num2);
    let quotient= factorialNum1/factorialNum2;
    console.log(quotient.toFixed(2));
}

factorialDivision(5,2);