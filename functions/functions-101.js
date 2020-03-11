// Functions - Input, code, output

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

//let num = 3;
let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

// CHALLENGE AREA

//convertFahrenheitToCelcius
let convert = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

// Call a couple of times (32 -> 0) (68 -> 20)
let result = convert(32);
let result2 = convert(68);
// Print the converted values
console.log(result);
console.log(result2);