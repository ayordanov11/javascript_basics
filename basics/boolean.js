// === - equality operator
// !== - not equal operator
// < - less than operator
// > - greater than operator
// <= less than or equal to operator
// >= greater than or equal to operator


let temp = 180
//let isFreezing = temp <= 32;

if (temp <= 32) {
    console.log('It is freezing outside!');
}
if(temp >= 110) {
    console.log('It is way to hot outside!');
}

//console.log(isFreezing);

//CHALLENGE AREA

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Create age set to your age
//Calculate is child - if they are 7 or under;
//Calculate is senior - if they are 65 or older
//Print is child value
//Print is senior value;

let myAge = 23;
let isChild = myAge <= 7;
let isSenior = myAge >= 65;
console.log(isChild, isSenior);
*/

let age = 65;
//If 7 or under print message about child pricing
if (age <= 7){
    console.log('You will get a child discount!');
}
//if 65 or older message about senior discount
if (age >= 65){
    console.log('You will get a senior discount!');
}