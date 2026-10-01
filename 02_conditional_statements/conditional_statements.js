const prompt = require('prompt-sync')();

// A] if Statement
// Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

// let num = 5;

// // if (num%5==0){
// //     console.log('Number Is Divisible by 5');
// // };

// // // Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

// // let age = 60;

// // if (age>=60){
// //     console.log('Senior Citizen');
// // };

// // let num = 100;

// // if (num>100){
// //     console.log('Big number');
// // };

// // let temp = 10;

// // if (temp<10){
// //     console.log('Very Cold');
// // };

// // let studentMarks = 100;

// // if (studentMarks==100){
// //     console.log('Perfect Score');
// // };

// // let num = -1;

// // if (num<0){
// //     console.log('-ve Number');
// // };

// // let userInput=prompt("Enter Your String");

// // if (userInput==''){
// //     console.log('No Input Provided');
// // };

// // let year = 2000;

// // if (year%100==0){
// //     console.log('Century Year');
// // };

// // let num = 2;

// // if (num%2==0 && num > 0){
// //     console.log('Positive Even Number');
// // };

// // let marks = 35;

// // if (marks>=35 && marks <=100){
// //     console.log('Valid MARKS');
// // };

// // // B] if...else Statement
// // // Write a program to check whether a number is even or odd.
// // let num = 2;

// // if (num%2==0){
// //     console.log('Even')
// // }else{
// //     console.log('Odd')
// // }

// // // Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.
// // let age = 23;

// // if (age>=18){
// //     console.log('You Can Vote')
// // }else{
// //     console.log{'You Cannot Vote'}
// // }

// // // Write a program that checks whether a number is positive or negative.

// // let num = 2;

// // if (num<0){
// //     console.log('-ve Number')
// // }else{
// //     console.log('+ve number')
// // }

// // // Check if a student has passed or failed based on marks (pass mark = 35).

// // let marks = 35;

// // if(marks >= 35){
// //     console.log('Pass')
// // }else{
// //     console.log('Fail')
// // }

// // Write a program to check whether a given character is an uppercase letter or not.
// // (Hint: Use character comparison)

// let char = 'A';

// if (char >= 'A' && char <= 'Z') {
//     console.log('Uppercase');
// }else{
//     console.log('Not uppercase');
// };

// // Check if a number is divisible by 3 or not. Print appropriate messages.

// let num = 3;

// if(num%3==0){
//     console.log('Divisible by 3');
// }else{
//     console.log('Not Divisible by 3');
// };

// // Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

// let userPass = prompt('Enter Your Password');

// let pass = 'admin123';

// if(userPass==pass){
//     console.log('Login Successful');
// }else{
//     console.log('Incorrect Password');
// };

// // Check whether a given year is a leap year or not using the basic rule (divisible by 4).

// // let userYear = Number(prompt("Enter The Year To Know if its leap year or not: "))

// // if (userYear%4==0 && userYear%400==0){
// //     console.log('Leap Year')
// // }else if(userYear%4==0){
// //     console.log('Leap Year')
// // }else{
// //     console.log('Not A Leap Year')
// // }

// // Write a program to find the greater of two numbers using if...else.

// let num1 = 2;
// let num2 = 4;

// if (num1>num2){
//     console.log('Number 1 is Bigger:',num1);

// }else{
//     console.log('Number 2 is bigger',num2);
// };

// Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).

let num = 0;

if(num==0){
    console.log('Number Is Zero')
}else if(num>0){
    console.log('Number Is +ve')
}else{
    console.log('Number Is -ve')
}