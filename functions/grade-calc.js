// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B - 80-89, C - 70-79, D 60-69, F 0-59;

let gradeCalc = function (score, totalScore) {                                                   //
    let percent = (score / totalScore) * 100;
    let letterGrade = '';

    if(percent >= 90){
        //return `You got A (${percent}%)!`;
        letterGrade = 'A';
        //return console.log('You got A ' + percent + '%');
    }
    else if(percent >= 80) {
        letterGrade = 'B';
    }
    else if(percent >= 70){
        letterGrade = 'C';
    }
    else if(percent >= 60){
        letterGrade = 'D';
    }
    else{
        letterGrade = 'F';
    }

    //return console.log('You got a ' + letterGrade + ' ' + '(' + percent + ')' + '%.');
    return `You got a ${letterGrade} (${percent}%)!`;
}

let result = gradeCalc(20, 20);
console.log(result);