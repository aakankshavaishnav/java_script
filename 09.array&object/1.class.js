let arr =[20,10,35,25];
let student=["mars","jupiter","venus"]  //using square brcket
let students=new Array("coco","lilly")  //using array constructor
console.log(student)

// accessing value intp array 
let coco=["tree","branch","root"]
console.log(coco[1])
console.log(coco[coco.length-1])

// updating value in array
let color=["red","blue","maroon"]
color [0]="pink"
console.log(color)
color[2]="lavendar"
console.log(color)

// array length
let colourr=["red","blue","maroon"]
console.log(colourr.length)

// looping through arrays
let name=["coco","jennei","rubi"]
for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}

// for of loop
// =================SYNTAX=================
// for(let 'variable' 'of' interable){
    // code}
 
let studentNames =["janvi","coco","lily","flower"]
for (let eachStudent of studentNames) {
    console.log(eachStudent)
}

// adding eleements 0f array
// 1. push ()=adding elements at the end of an Array
// 2. unshift()=adding of element at the bigging of an arrray
// return length of array
let nums=[4,5,6]
let lens=nums.push(10);
console.log(nums,lens)

// pop()=> remove last digit of array
// shift ()=> remove the first element of ARRAY
let num=[4,5,6]
// num.pop()
console.log(num.pop())

// SEARCING IN ARRAY
// INDEXOF=returns index of a value, or -1 if not found.

let nam=["gay","gays","gayeass","gayy"]
console.log(nam.indexOf("gay"))

// ARRAY WITH MULTIPLE DATATYPES=JavaScript arrays can store mixed types.(MIXED ARRAY)
let data = [100, "Hello", true, null];
console.log(data[data.lenght-2])

// 11. Array of Arrays (Matrix) – 2D Arrays
// Used in tables, grids, games, and storing marks of multiple students.
let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix[2][1]); // 6

// store marks o 3 students 
let marks = [
    [85, 90, 92], // koko
    [70, 75, 80], // lily
    [88, 82, 89]  // coco
];

for (let i = 0; i < marks.length; i++) {
    let studentMarks = marks[i];
    let total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    let avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg);
}


const codingGitaStudents = [
    ["Jenil", [85, 90, 92]],
    ["Mahir", [78, 80, 75]],
    ["Yashvi", [88, 92, 89]]
];

for (const [studentName, studentMarks] of codingGitaStudents) {
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const average = total / studentMarks.length;

    console.log("Name: " + studentName);
    console.log("Marks: " + studentMarks.join(" "));
    console.log("Total: " + total);
    console.log("Average: " + average);
}









