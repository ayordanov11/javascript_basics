// Multuple arguments

let add = function (a, b, c) {
    //let result = a + b; return result;
    
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// CHALLENGE AREA
// A 25% tip on $40 would be $10.
//total, tipPercent - .2

let getTip = function (total, tipPercent = .2){
    //return total * tipPercent;
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`
}
let tip = getTip(40, .25);
console.log(tip);

// console.log("Andrew" + 'Mead');

//Template strings
let name = 'Jen';
let age = 12;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);