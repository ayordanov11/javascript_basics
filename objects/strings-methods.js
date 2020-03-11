let name = 'Alex Yordanov'

// Length property, without () - it is not a method
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method - checks if 'password' se sadurja v parolata
let password = 'abc123passd098'
console.log(password.includes('password'));

// Trim - removes b
console.log(name.trim());

// Challenge area

//isValidPassword
//length is moroe than 8 - and it does not contain the word password;

/*
let isValidPassword = function (password){
    if(password.length > 8 && !password.includes('password')){
        return true;
    }else{
        return false;
    }
}
*/

let isValidPassword = function (password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^'));
console.log(isValidPassword('assfjdhjdhgjdpassword'));

