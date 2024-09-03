function palindromeIntegers(arr){
 
    function checkIfPalindrome(num){
    const numToString=num+'';
    let newNumberString='';
    for(let i =(numToString.length-1); i>=0 ;i--){
       newNumberString+=numToString[i];
    }
    if(newNumberString===numToString){
        return true;
    }
    else{
        return false;
    }
 }

 for(const num of arr){
    const isPalindrome= checkIfPalindrome(num);
    console.log(isPalindrome);
 }

}

palindromeIntegers([123,323,421,121]);