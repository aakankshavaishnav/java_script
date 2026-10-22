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