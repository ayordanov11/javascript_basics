// Global scope (convertFahrenheitToCelcus, tempOne, tempTwo)
  // Local scope (fahrenheit, celcius - cannot access them outside of the function)
    // Local scope (isFreezing)


//convertFahrenheitToCelcius
let convert = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9;

    if (celcius <= 0) {
        let isFreezing = true;
    }

    return celcius;
}

// Call a couple of times (32 -> 0) (68 -> 20)
let tempOne = convert(32);
let tempTwo = convert(68);
// Print the converted values
console.log(tempOne);
console.log(tempTwo);