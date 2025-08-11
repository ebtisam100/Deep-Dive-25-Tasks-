const student_name = "Mohamed Yasser";
let student_age = 20;
var enrollment_status = true;
let grades = [90, 80, 70];

let total = grades[0] + grades[1] + grades[2];
let average = total / 3;
let isPassed = average >= 60;

console.log("Total grades:", total);
console.log("Average grade:", average);
console.log("Passed?", isPassed)

if (average >= 90) {
    console.log("Excellent");
} 
else if (average >= 75) {
    console.log("Very Good");
} 
else if (average >= 60) {
    console.log("Good");
} 
else {
    console.log("Failed");
}


let subject_number = prompt("Enter subject number (1, 2, or 3):");
switch (subject_number) {
    case '1':
        console.log("Math: " + grades[0]);
        break;
    case '2':
        console.log("Science: " + grades[1]);
        break;
    case '3':
        console.log("English: " + grades[2]);
        break;
    default:
        console.log("Wrong subject number");
}


for (let i = 0; i < 3; i++) {
    console.log("Grade " + (i + 1) + ": " + grades[i]);
}


function calc_total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const calc_average = function(arr) {
    return calc_total(arr) / arr.length;
};
console.log("Total using function: " + calc_total(grades));
console.log("Average using arrow function: " + calc_average(grades));


let num = 10;
while (num < 10) {
    console.log("done");
}

num = 10;
while (num < 10) {
    console.log("done");
}

let numbers = [1, 2, 3, 4, 5, 6];
let sum_for = 0;
for (let i = 0; i < 6; i++) {
    sum_for += numbers[i];
}
console.log("Sum using for loop: " + sum_for);
let sum_while = 0;
let i = 0;
while (i < 6) {
    sum_while += numbers[i];
    i++;
}
console.log("Sum using while loop: " + sum_while);