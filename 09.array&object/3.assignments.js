// For the same array var numbers = [10, 20, 30, 40];, what is the index of the number 40?

var number=[10,20,30,40,50]
console.log(number.indexOf(40))

// Given the array var numbers = [10, 20, 30, 40];, what value is stored at index 2?

var number=[10,20,30,40,50]
console.log(number.indexOf(40))

// Write the syntax to create an array named students containing the names "Jenil", "Mahir", "Priyesha", and "Yashvi" using the recommended method.
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
console.log()

// Write the syntax to create an array named marks containing 85, 90, and 78 using the Array constructor.

let marks=new Array("coco","lilly")  //using array constructor

// Given var students = ["Jenil", "Mahir", "Priyesha"];, what does console.log(students[0]); output?
var students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[0])
// console.log(student[2])

let color=["red","yellow","black","blue"]
console.log()

// Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?
// var mark=[80,75,90];

// array of array
const ar =[10,20,30];
console.log(ar[2])

// 

// #14
// const scores = [12, 45, 7, 89, 23];
// Find and print the second largest number
const scores = [12, 45, 7, 89, 23];
let sortedScores = [...scores].sort((a, b) => b - a);
console.log(sortedScores[1]);

// ANOTHER WAY

const score=[12,45,7,89,23];
let largest= -Infinity;
for (let i=0; i<=score.length-1; i++){
    if (score[i]>largest){
        largest=score[i];
    }
}
console.log(largest)

const stu = [
    ["coco", [85,90,92]],
    ["yashvi",[78,80,75]],
    ["yup",[88,92,89]]
];

for(let i = 0;i<=stu.length - 1;i++){
    console.log("name:-",stu[i][0])
    total = 0
    for(j = 0;j<stu[0][1].length;j++){
        let marks = stu[i][1][j]
        total += marks
        
    }
    console.log("total marks:-",total)
    avr = total/3
    console.log("avarage:-",avr)
}


// MINI ASSIGNMENT
const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];
let highestAttendance = -1;
let highestAttendanceStudent = "";

for (let i = 0; i < attendance.length; i++) {
    const studentName = attendance[i][0];
    const records = attendance[i][1];
    let countOfPresent = 0;
    let countOfAbsent = 0;

    for (let j = 0; j < records.length; j++) {
        if (records[j] === "P") {
            countOfPresent++;
        } else if (records[j] === "A") {
            countOfAbsent++;
        }
    }

    const attendancePercentage = (countOfPresent / records.length) * 100;
    const status = attendancePercentage >= 75 ? "Good" : "Low Attendance";

    console.log(`Name: ${studentName}`);
    console.log(`Present: ${countOfPresent}`);
    console.log(`Absent: ${countOfAbsent}`);
    console.log(`Attendance: ${attendancePercentage}%`);
    console.log(`Status: ${status}`);

    if (attendancePercentage > highestAttendance) {
        highestAttendance = attendancePercentage;
        highestAttendanceStudent = studentName;
    }
}

console.log(`Highest attendance: ${highestAttendanceStudent}`); 