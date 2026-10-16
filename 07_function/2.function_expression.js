// // let add =function (a,b){
// //     return a+b;
    
// // }
// // console.log(add(4,8))

// // =================================
// // function percentage(marks,total){
// //     return (marks/100)*100
// // }
// // console.log(percentage(33,50))\\

// let per =function(marks,total){
//     return (marks/total)*100;
// }
// console.log(per(33,50))


// // create a function to add two number for which take parameter a,b and pass the argumets as "10" , "20" 
// function add(a, b) {
//   return Number(a) + Number(b);
// }

// console.log(add("10", "20")); 

// // write a function multiply (a,b)
// function multiply(a,b){
//   return Number(a)*Number(b);


// }console.log(multiply("10","20"))


// function is_even(a){
//   return num%2==0;
  
// }console.log(is_even(20))


// +++++++++++++

// /
// global
// let course="js"
// function printCourse(){
//   console.log(course)
// }

// write a function average total of students
// function averagenumber(){
// let total =m1+m2+m3;
// let average =(total/3).tofixed(2);
// return`the student %{name} gets a total marks =${total}=${average}`
// }
// console.log(averagenumber("ann",56,89,89))

// +++++++++++++++++++++
// write a function reportcard (name ,m1,m2) that return the studnt name total and average
// def reportcard(name, m1, m2):
//     total = m1 + m2
//     average = total / 2
//     return name, total, average

// # Example
// print(reportcard("Rashi", 85, 90))  # ('Rashi', 175, 87.5)


// function average(){
//   let total =m1+m2+m3;
//   let avg=(m1+m2+m3)/2;
//   return `student ${name} gettung avg ${total}`
// }console.log(average("rasi",45,65,78))

// function checkPass(avg){
//   if (avg>=40){
//   return "pass"
//   }else {
//   return "fail"
//   }
// };
//  let ans = checkPass(45);
// console.log(ans)

// console.log(studentReport("gayu",65,78))

// // +++++++++++++++++++
// function studentReport(name, m1, m2) {
//   const total = m1 + m2;
//   const average = total / 2;
//   return `Student ${name} got total marks = ${total}, average = ${average}`;
// }

// console.log(studentReport("gayu", 65, 78));
// // Student gayu got total marks = 143, average = 71.5

// function main(){
  // function helper({
    // return "helper function called "
  // }
// }


// ++++++++++++++
function processMarks(m1,m2){
  function sum(){
    let total =m1+m2
    return total ;
  };
  return sum()
};
console.log(processMarks(10,20))

// write a student summary that contain two inner function na,ed as findaverage  which return total of three marks avg of three marks 
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
