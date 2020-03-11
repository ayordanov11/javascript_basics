let isAccountLocked = false;
let userRole = 'user';

if(isAccountLocked){
    console.log('Is account locked');
} else if(userRole === 'admin') {
    console.log('Welcome admin!');
} else{
    console.log('Welcome');
}

// CHALLENGE AREA

let temp = 45;

//it is freezing outside!
//it is hot outside!
//Go for it. It is pretty nice.

if (temp <= 31){
    console.log('It is freezing outside!');
}
else if( temp >= 130){
    console.log('It is hot outside!');
}
else{
    console.log('Go for it. It is pretty nice.');
}