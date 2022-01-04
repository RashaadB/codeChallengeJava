// Very Easy: find difference between two variables
var x = 21;
var y = 10;
const findDifference = (a, b) => {
  console.log(a - b);
};
findDifference(x, y);

//Easy: Create two variables and assign a person’s name to each
var firstName = "RashaadB";
var secondName = "Timithy";
const findBiggerName = (a, b) => {
  if (a.length > b.length) {
    console.log(
      `The name ${a} is longer than ${b} by ${a.length - b.length} characters`
    );
  }

  if (a.length < b.length) {
    console.log(
      `The name ${a} is shorter than ${b} by ${b.length - a.length} characters`
    );
  }

  if (a.length === b.length) {
    console.log(`The name ${a} is the same length as ${b}`);
  }
};
findBiggerName(firstName, secondName);

//Medium: Write a program to tell if someone is shouting
const howLoud = () => {
  let sign = window.prompt();
  console.log(sign);
  if (sign == sign.toUpperCase()) {
    console.log("SHOUTING");
  } else {
    console.log("whisphering");
  }
};
howLoud();

//Hard:create 4 math functions

//addition
function addition(a, b) {
  console.log(a + b);
}
addition(10, 8);

//subtraction
function subtraction(a, b) {
  console.log(a - b);
}
subtraction(36, 18);

//multiplication
function multiplication(a, b) {
  console.log(a * b);
}
multiplication(6, 3);

//division
function division(a, b) {
  console.log(a / b);
}
division(36, 2);

//VERY HARD create simple Calculator
let a = 17; //add
let b = 36; //subtract
let c = 6; //multiply
let d = 36; //divid
//results
a += 1;
b -= 18;
c *= 3;
d /= 2;

console.log("17 + 1 =" + a);
console.log("36 - 18 ="+ b );
console.log("6 * 3 =" + c);
console.log("36 / 2 =" +d);
