const money = 150;
const active = false;
let food;
if (money > 100) {
    food = 'biryani';
}
else{
    food = 'alur vorta';
}
// ternary:
// condition ? true value : false value
let food2 = money > 100 ? 'biryani' : 'alur vorta';
let cssClass;
if (active === true){
    cssClass = 'active';
}
else {
    cssClass = 'inactive';
}

const cssClass2 = active ? 'active' : 'inactive';
// function call shortcut alternative
// active ? displayUser() : hideUser()

// 
const x = active && 5;
const y = active || 5;
// console.log(y);

// string to number
const number = +'45';

// number to string
const numText = 45 + '';
console.log(numText);

// default parameter
function add(num1, num2 = 5){
    // num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10)

// missed in the video
// toggle boolean value
let active = false;
// this line will toggle the value of the variable active. 
// if the value was false, it will make it true
// if the value was true it will make it false
active = !active; 

// Optional chaining
// read from this link: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining