// =============================
// VARIABLES
// =============================

let name = "Morgan Odhiambo";
let age = 20;
let isStudent = true;
let favoriteColors = ["blue", "black", "white"];
let today = new Date();

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Date:", today);


// =============================
// MATH OPERATIONS
// =============================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);


// =============================
// FUNCTIONS
// =============================

function calculateArea(width, height){
return width * height;
}

function celsiusToFahrenheit(celsius){
return (celsius * 9/5) + 32;
}

function isEven(number){
return number % 2 === 0;
}

function getInitials(fullName){
let names = fullName.split(" ");
return names[0][0] + names[1][0];
}

function reverseString(str){
return str.split("").reverse().join("");
}

console.log("Area:", calculateArea(5,4));
console.log("Temperature:", celsiusToFahrenheit(30));
console.log("Is Even:", isEven(10));
console.log("Initials:", getInitials("Morgan Odhiambo"));
console.log("Reverse:", reverseString("hello"));


// =============================
// CONTROL FLOW (GRADES)
// =============================

function getGrade(score){

if(score >= 90){
return "A";
}

else if(score >= 80){
return "B";
}

else if(score >= 70){
return "C";
}

else if(score >= 60){
return "D";
}

else{
return "F";
}

}

console.log("Grade:", getGrade(85));


// =============================
// LOOPS
// =============================

// Print numbers 1 - 10
for(let i = 1; i <= 10; i++){
console.log(i);
}


// Print even numbers
for(let i = 1; i <= 50; i++){
if(i % 2 === 0){
console.log("Even:", i);
}
}


// =============================
// FIZZBUZZ
// =============================

for(let i = 1; i <= 100; i++){

if(i % 3 === 0 && i % 5 === 0){
console.log("FizzBuzz");
}

else if(i % 3 === 0){
console.log("Fizz");
}

else if(i % 5 === 0){
console.log("Buzz");
}

else{
console.log(i);
}

}


// =============================
// CALCULATOR MINI PROJECT
// =============================

function add(a,b){
return a + b;
}

function subtract(a,b){
return a - b;
}

function multiply(a,b){
return a * b;
}

function divide(a,b){

if(b === 0){
return "Cannot divide by zero";
}

return a / b;

}

function calculate(num1, operator, num2){

switch(operator){

case "+":
return add(num1,num2);

case "-":
return subtract(num1,num2);

case "*":
return multiply(num1,num2);

case "/":
return divide(num1,num2);

default:
return "Invalid operator";

}

}

console.log("Calculator:");
console.log(calculate(10,"+",5));
console.log(calculate(10,"-",5));
console.log(calculate(10,"*",5));
console.log(calculate(10,"/",5));


// =============================
// ARRAYS
// =============================

const numbers = [1,2,3,4,5];

numbers.forEach(num => console.log("Number:", num));

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const sum = numbers.reduce((total,num) => total + num,0);
console.log("Sum:", sum);


// =============================
// OBJECTS
// =============================

const person = {

firstName: "Morgan",
lastName: "Odhiambo",
age: 20,
hobbies: ["coding","cars","gaming"]

};

console.log(person.firstName);
console.log(person.hobbies);


// =============================
// ARRAY OF OBJECTS
// =============================

const students = [

{name:"Alice",grade:85},
{name:"Bob",grade:72},
{name:"Charlie",grade:90}

];

const names = students.map(student => student.name);
console.log("Student names:", names);

const highAchievers = students.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);
