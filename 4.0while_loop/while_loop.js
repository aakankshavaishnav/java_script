// let i =5 ;
// while(i>0){
//     console.log(i)
//     i--
// }

// exampe-1=============================
// sum of 10 natural number==========
// let sum=0;  //for loop
// for (let i=1;i<10;i++){
//     sum+=1
// }
// console.log(sum)

// let i=1; //while loop
// let sum=0;
// while(i<=10){
//     sum +=i
//     i ++;
// }
// console.log(sum)

// let i=0;
// while (i<=10){
//     console.log(i)
//     i++
   
// } 


// 1-50 number ============
// let num =1
// while (num<=50){
//     console.log(num)
//     num++
// }

// question-5=========

// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     num = Math.floor(num / 10);
//     reverse = reverse * 10 + digit;
// }

// console.log(reverse);

// questionnnn--1(  DO WHILE LOOP)
//  let i=13
//  do{
//         console.log("rashi")
// }while(i<=10)

// question===========2===============
// let i=10;
// do{
//     console.log(i)
//     i--
// }while(i>=1)

// question3=================
let num=1234;
do{
    let last_digit=num%10;
    num=Math.floor(num%10);
    reverse=(reverse*10)+last_digit
}while(num>0);
console.log(reverse)