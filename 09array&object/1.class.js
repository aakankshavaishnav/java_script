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
let name=["coco","jennei","rubi","piyy"]
for (let i=0;i<=coco.lenght-1;i++){  //to make dynamic our code we can use (coco.lenght-1 )
    console.log(name[i])
}

// create array of 5 students 
let studentName = ["a", "b", "c", "d", "e"];

for (let i = 0; i <= 5; i++) {
    console.log(studentName[i]);
}