"use strict";

/*12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.*/

function numberInEnglish(number){
    let ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    let inEnglish = "";
    if(number%10 === number){
        inEnglish = ones[number];
    }
    else if(number%100 === number){
        inEnglish  =  returnTens(number);
    }
    else if(number%1000 === number){
        
    }
    return inEnglish;
}

let numberInEnglish1 = numberInEnglish(21);
console.log(numberInEnglish1);

function returnTens(number){
    let ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    let inEnglish = "";
    if(number < 20){
        inEnglish = teens[number-10];           
    }
    else {
        let onesNumber = number%10;
        let indexTeens = Number(String(number).slice(0,1));  
        if(onesNumber === 0){              
            inEnglish = teens[indexTeens];
        }
         else{
            inEnglish = tens[indexTeens-1] + " " + ones[onesNumber];
         }  
    }  
    
    return inEnglish;
}