//The main difference between LET and CONST is the fact CONST can't change its value once it is assigned to something.

const isRaining = true;

//isRaining = false;

console.log(isRaining);

const person = {
    age: 27
}

person.age = 28;
//person = {}

console.log(person);