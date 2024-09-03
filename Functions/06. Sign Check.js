function signCheck(num1,num2,num3){
    let sign=''
        if(num1<0 && num2<0 && num3<0){
            sign='Negative';
        }
        else if(num1<0 && (num2<0 || num3<0)){
            sign = 'Positive';
        }
        else if(num2<0 && (num1<0 || num3<0)){
            sign = 'Positive';
        }
        else if(num3<0 && (num2<0 || num1<0)){
            sign = 'Positive';
        }
        else if(num1<0 && (num2>0 && num3>0)){
            sign = 'Negative';
        }
        else if(num2<0 && (num1>0 && num3>0)){
            sign = 'Negative';
        }
        else if(num3<0 && (num2>0 && num1>0)){
            sign = 'Negative';
        }
        else{
            sign= 'Positive'
        }
        console.log(sign);
    }
    
    


signCheck(-9,-5,-6);