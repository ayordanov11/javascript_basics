//Defining an object

let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

//console.log(myBook.title);
//console.log(myBook);

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location (city, country)

// Andrew is 27 and lives in Philadelphia.
//I Increase age by 1 and print message again.

let myPerson = {
    name: 'Alex',
    age: 23,
    country: 'Netherlands'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.country}.`);
myPerson.age = myPerson.age + 1;
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.country}.`);




