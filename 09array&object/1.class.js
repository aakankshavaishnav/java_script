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
// for(const 'variable' 'of' interable){
    // code}

const studentNames =["janvi","coco","lily","flower"]
for (const eachStudent of studentNames) {
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
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix[2][1]); // 6

