// var x=10;
// function myfunc(){
//     console.log(x)
// }

// for (let i =1;i<5;i++){
//     console.log("inner i",i)
// };
// console.log("outer i",i)

// for (var )
// let i;
// for (i = 1; i < 5; i++) {
//     console.log("inner i", i);
// }
// console.log("outer i", i); // 5


// // ================
// let name = "Rashi";

// function showName() {
//     // console.log(name);
// }

// showName();
// console.log(name);

// if (true) {
//     let x = 10;
//     const y = 20;

//     console.log(x);
//     console.log(y);
// }

// console.log(x); // Error
// ==============
// let age =18;
// function displayAge(){
//     console.log(age);
// }
// displayAge();
// console.log(age)

// ===================
var college = "CodingGita";

function showCollege() {
    console.log(college);
}

showCollege();
console.log(college);

// ques=3
function studentMarks(){
    var marks=56;
    console.log(marks);
}
studentMarks();
// console.log(marks);

// =================
function studentSummary( name,m1,m2,m3){
  function findTotal(){
    let total =m1+m2+m3
    return total ;
  }
  function findAverage(){
    let avg =(m1+m2+m3)/3;
    return avg;
  }
  let res1=findTotal();
  let res2=findAverage();
  return `the name ${name} gets total marks =${res1} and average ${res2}`
};
let final =studentSummary("rahsi",36,79,67)
console.log(final)

// =====================
function calulateGrade(){
    
}