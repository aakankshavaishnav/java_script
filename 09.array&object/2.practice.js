// create a array of 5 fruit  using for of loop
const fruitsName=["apple","litchi","mango","pear","banana"]
for (const eachName of fruitsName){
    console.log(eachName)
}

// adding array using push and unshift
let nums=[2,3,4];
nums.push(5)
console.log(nums)

let coco=[]

let n=[100,200,300,400,500]
n.pop();
console.log(n)

// SEARCHING IN ARRAY
let names =["coco","lily","totoro",]
console.log(names.indexOf("lily"))

// mixed data type array
let mixedArray = ["coco", 25, true, { type: "pet" }, [1, 2, 3]];
for (let item of mixedArray) {
    console.log(typeof item);
}

// ARRAY OF array
let arr=[
    [1,2],
    [3,4],
    [5,6]
];
console.log(arr[2][1])

// quws2
// create a matrix of 2x2 that print all elements of first row
let mat=[
    [12,20,30,40],
    [13,43,53,23]
]; 
for (let i=0;i<4;i++){
    console.log(mat[1][i])
}
// ques-3 Create a matrix of 3 students’ marks (each student has 3 subjects) and print the marks of the second student.

let studentMarks=[
    [12,23,45],
    [65,78,98],
    [24,78,98]
]; 
for (let i=0; i<4;i++){
    console.log(studentMarks[1][i])
}

// ques-4
// Access and print the last element of the last row in this matrix:
const arry = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(arry[2][2])

// // to access elements in row or column to make it dynamic we use
// const arrt = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(arrt[arrt.lenght-1][arrt[0].length-1])

// ques
let matrix=[
    [12,35,35],
    [45,67,56]
];
matrix[1][1]=99;
console.log(matrix)
// Create an array of 5 student names and print each using a loop.
const studentNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
for (const name of studentNames) {
    console.log(name);
}

//Create an array of 5 marks and compute: highest, lowest, sum, average.
const marks = [78, 85, 92, 67, 88];
const highestMark = Math.max(...marks);
const lowestMark = Math.min(...marks);
const sumOfMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMark = sumOfMarks / marks.length;

console.log("Highest:", highestMark);
console.log("Lowest:", lowestMark);
console.log("Sum:", sumOfMarks);
console.log("Average:", averageMark);

// ==========
// column of array
let m=[
    [10,20,30]
    [29,47,57]
    [45,66,98]
];
for (let i=0;i<m.length-1;i++){
    console.log(m[0][1])
}
 

