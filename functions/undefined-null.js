// Undefined represents the absence of a value;
// Undefined for variable

let name;

name = 'Jen';

if (name === undefined) {
    console.log('Please, provide a name.');

}else {
    console.log(name);
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    console.log(num);
}

let result = square(); //undefined, because we try to return something, but the function does not return anything
console.log(result);

// Null as assigned value
let age = 27;

age = null; //null - something is explicitly cleared by the developer of the program

console.log(age);