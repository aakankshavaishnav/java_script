// // Q=1: Check whether a number is divisible by 7.
// let num = 14;

// let result = num % 7 === 0
//     ? "Divisible by 7"
//     : "Not Divisible by 7";

// console.log(result);

// // Q=2: Check whether the temperature is hot or pleasant.
// let temperature = 32;

// let result = temperature >= 30
//     ? "Hot Day"
//     : "Pleasant Day";

// console.log(result);

// // Q=3: Check whether a string is empty.
// let str = "";

// let result = str === ""
//     ? "Empty String"
//     : "String has content";

// console.log(result);

// // Q=4: Classify a person as Child, Teenager, or Adult.
// let age = 16;

// let result = age < 13
//     ? "Child"
//     : age <= 19
//         ? "Teenager"
//         : "Adult";

// console.log(result);

// // Q=5: Find the greatest of three numbers without Math.max.
// let a = 25;
// let b = 40;
// let c = 30;

// let greatest = a >= b
//     ? (a >= c ? a : c)
//     : (b >= c ? b : c);

// console.log(greatest);

// // Q=6: Classify marks into five result categories.
// let marks = 68;

// let result = marks >= 75
//     ? "Distinction"
//     : marks >= 60
//         ? "First Class"
//         : marks >= 50
//             ? "Second Class"
//             : marks >= 35
//                 ? "Pass"
//                 : "Fail";

// console.log(result);

// // Q=7: Classify a number by sign and parity.
// let num = -7;

// let result = num === 0
//     ? "Zero"
//     : num > 0
//         ? (num % 2 === 0 ? "Positive Even" : "Positive Odd")
//         : (num % 2 === 0 ? "Negative Even" : "Negative Odd");

// console.log(result);

// // Q=8: Check whether a year is a leap year.
// let year = 2024;

// let result = year % 4 === 0
//     ? (year % 100 !== 0
//         ? "Leap Year"
//         : year % 400 === 