let num = 103.941;

//до колко числа след запетаята (3,2,1)
console.log(num.toFixed(1));

//Round закръгля числото;  103.941 -> 104; 103.441 -> 103
console.log(Math.round(num));
console.log(Math.floor(num)); // винаги закръгля надолу
console.log(Math.ceil(num)); // винаги закръгля нагоре

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//10 - 20
console.log(randomNum);

// Challenge area
// 1 - 5 - true if correct, false if not correct

let makeGuess = function (guess){
    let min = 1;
    let max = 5;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    // return guess === randomNum;

    
    if(randomNumber === guess){
        return true;
    }else{
        return false;
    }
}

console.log(makeGuess(1));

