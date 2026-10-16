const prompt = require('prompt-sync')();

//Part-1
//for loop

//q1
let arr=[28, 32, 25, 40, 18, 35];
let sum1=0;

for (let i=0; i<=arr.length-1; i++){
    if (arr[i]>30){
        sum1+=1
    }
}
console.log(`number of days hotter than 30 C: ${sum1}`);


//q2
n2=Number(prompt("enter number: "));
let sum2=0;
for (let i=n2; i>0; i=Math.floor(i/10)){
    sum2+=i%10;
}
console.log(sum2);


//q3
for (let i=1; i<=100; i++){
    if (((i%3==0) && (i%5==0)) && (i%7!=0)){
        console.log(i);
    }
}


// q4
let word="JavaScript";
let str2="";
let vowel=0;

for(let i=0; i<=word.length-1; i++){
    if (word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u" || word[i]=="A" || word[i]=="E" || word[i]=="I" || word[i]=="O" || word[i]=="U"){
        vowel+=1
}
    else{
        str2+=word[i]
};

}
    console.log(str2);



//q5
let arr5=[23, 34, 45, 56, 50];
let count=0;
for (let i=0; i<=arr5.length-1; i++){
    count=0
    for (let j=0; j<=arr5.length-1; j++){
        if (arr5[i]<arr5[j]){
            count+=1
        }
    }
    if (count===1){
        console.log(arr5[i])
    }
}



//q6
n6=Number(prompt("enter number: "));
let sum6=0;
let N=n6/2;
for (let i=1;i<=N;i++){
    if(n6%i==0){
        sum6+=i;
    }
}
if(sum6==n6){
    console.log("is a perfect number")
}
else{
    console.log("not a perfect number")
}



//q7
for (let i=1; i<=128; i*=2){
    console.log(i)
}



//q8
let n=20;
let a=0, b=1;
console.log(a);
console.log(b);

for (let i=2; i<n; i++){
    let next =a+b;
    console.log(next);
    a=b;
    b=next;
}



//q9
let arr9=[45, 78, 90, 32, 56, 88];
let above=0;
let sum9=0;
for (let i=0; i<=arr9.length-1; i++){
    sum9+=arr9[i]
}
let average=sum9/arr9.length;
for (let i=0; i<=arr9.length-1; i++){
    if(arr9[i]>average){
    above+=1
    }
}

console.log(`average: ${average}`);
console.log(`students scored above average: ${above}`);


// q10








// Part
// break inside a for Loop

//q1
let arr1=[1, 2, 7, 8, 9, 4, 6, 5];
for (let i=0; i<=arr1.length-1; i++){
    if (arr1[i]===7){
        console.log(`index: ${i}`)
        break
    }
}


//q2

let pass=900;
for (let i=1; i<=5; i++){
    let n2=Number(prompt("enter password: "));
    if (n2===pass){
        console.log("access granted");
        break
    }
    if (i===5){
        console.log("account locked");
    }
}


//q3
let sum3=0;

for (let i=1; i<=100; i++){
    sum3+=i;
    if (sum3>100){
        console.log("exceeded")
        console.log(`Last number added: ${i}`)
        break
    }
}


//q4

let arr4=["krish", "Swati", "harsh", "arush"];

for (let i=0; i<=arr4.length-1; i++){
    if (arr4[i][0]==="S"){
        console.log(arr4[i]);
        break;
    }
}


//q5
for (let i=1; i<=50; i++){
    if((Math.sqrt(i)%1===0)&&(i>20)){
        continue;
    }
    console.log(i)
    if((i**(1/2))%1===0 && i>20){
        break;
    }
}


// Part - continue inside a for Loop
//q1
for (let i=1; i<=30; i++){
    if (i%4===0){
        continue;
    }
    console.log(i)
}


//q2
let arr02=[1, 2, -8, -9, -7, -8, 9, 4, 6, 5];
let sum=0;

for (let i=0; i<=arr02.length-1; i++){
    if (arr02[i]<0){
        continue;
    }
    sum+=arr02[i];
}
console.log(`sum: ${sum}`);


//q3
let str3="Hello World";
let str30=""
for (let i=0; i<=str3.length-1; i++){
    if (str3[i]===" "){
        continue
    }
    else{
        str30+=str3[i];
    }
}   
console.log(str30)


//q4
for (let i=1; i<=12; i++){
    let prod=(6*i);
    if (prod%5===0){
        continue;
    }
    console.log(prod);
}


//q5
let age=[12, 18, 25, 15, 30, 17, 22];
for (let i=0; i<=age.length-1; i++){
    if (age[i]<18){
        continue;
    }
    console.log(age[i]);
}


//Part-C Reverse for loop 

//q1
for (let i=50; i>=1; i--){
    if (i%3===0 && i%9!==0){
        console.log(i)
    }
}


//q2
let arr3=[12,45,7,23,56,89,34];

let largest=0;

for (let i=arr3.length-1; i>=0; i--){
    if (arr3[i]<50 && arr3[i]>largest){
        largest=arr3[i];
    }
}
console.log(largest)


//q3
let num3=4729;
let product=1;

for (let i=num3; i>0; Math.floor(i/10)){
    let digit=i%10;

    if (digit%2==0){
        product*=digit;
    }
}
console.log(product);


//q4
let vowel4=0;
let word4="programming";
let word44=""
for (let i=length.word4-1; i>=0; i--){
    if (word4[i]=="a" || "e" || "i" || "o" ||"u"){
        vowel4+=1
    }
    else{
        word44+=word4[i]
    }
}
console.log(word44)


//q5



//q6
let number6=Number(prompt("Enter your name: "));
let num66=0;

for (let i=number6; i>=0; i--){

}

//q7
let count7=0;
let arr7=[32,28,41,19,35,27,38];
for (let i=arr7.length-1; i>=0; i--){
    if (arr7[i]>30){
        count7+=1
    }
}
console.log(count7)

//q8



//q9
let arr8=[90, 85, 70, 95, 60, 88, 75];
for (let i=arr8.length-1; i>=0; i--){
    if (arr8[i]>80){
        console.log(`Value: ${arr8[i]}`)
        console.log(`Index: ${i}`)
        break
    }
}


//q10
for (let i=40; i<=1; i--){
    if((Math.sqrt(i)%1===0)&&(i>20)){
        continue;
    }
    console.log(i)
}



// Part-D Nested for loop
//q1
let n1=1;
for(let i=1; i<=4; i++){
    let col="";
    for (let j=1; j<=i; j++){
        col+=n1+" "
        n1++;
    }
    console.log(col)
}


//q2
for (let i = 1; i <= 5; i++) {
    let col = "";
    for (let j = 1; j <= i; j++) {
        col += String.fromCharCode(64 + j) + " ";
    }
    console.log(col);
}

//q3
for(let i=1; i<=5; i++){
    let col="";
    for (let j=1; j<=i; j++){

        if (j===1 || j===i || i===5){
            col+="* ";
        }else{
            col+="  ";
        }
    }
    console.log(col)
}

//q4
for(let i=5; i>=1; i--){
    let col="";
    for (let j=1; j<=i; j++){
        col+="*";
    }
    console.log(col)
}

//q5
for(let i=5; i>=1; i--){
    let col="";
    for (let j=1; j<=i; j++){
        col+=i+" ";
    }
    console.log(col)
}


//q6
for(let i=5; i>=1; i--){
    let col="";
    for (let j=1; j<=i; j++){
        col+=j+" ";
    }
    console.log(col)
}



//q7
let n7=15
for(let i=5; i>=1; i--){
    let col="";
    for (let j=1; j<=i; j++){
        col+=n7+" ";
        n7--
    }
    console.log(col)
}



//q8
for(let i=5; i>=1; i--){
    let col="";
    for (let j=1; j<=i; j++){

        if (j===1 || j===i || i===5){
            col+="* ";
        }else{
            col+="  ";
        }
    }
    console.log(col)
}



//q9
for (let i=1; i<=5; i++){
    let col=""
    for (let j=1; j<=5; j++){
        if (i===j){
            col+=" "
        }
        else{
            col+="*"+""
        }
    }
    console.log(col)
}



//q10
for (let i=1; i<=5; i++){
    let col="";
    for (let j=1; j<=10; j++){
        let prod=i*j;

        if (prod%2===0){
            col+=prod+" "
        }
    }
    console.log(col)
}



//q11
n11=Number(prompt("Enter number: "));
let matrix=[]
for (let i=0; i<n11; i++){
    let row=[];
    for (let j=0; j<n11; j++){
        row.push(Math.abs(i-j))
    }
    matrix.push(row)
}
console.log(matrix)


//q12
for (let i = 1; i <= 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
        let sum = i + j;
        let root = Math.sqrt(sum);

        if (root === Math.floor(root)) {
            console.log(`(${i}, ${j})`);
        }
    }
}


//q13





//q17
let rows=4;
let cols=5;

for (let i=0; i<rows; i++){
    let bag=""
    for (let j=0; j<cols; j++){
        if ((i+j)%3===0){
            bag+=2+" "
        }
        else if (i===0 || i===rows-1 || j===0 || j===cols-1){
            bag+=1+" "
        }
        else{
            bag+=0+" "
        }
    }
    console.log(bag)
}



// Part-2 While Loop

//q1
let q=1;
while (q<=10){
    console.log(q)
    q++
}


//q2
let j=1;
let sum22=0;

while (j<=10){
    sum22+=j
    j++
}
console.log(sum22)


//q3
let k=1;
k1=Number(prompt("enter number: "));
while (k<=10){
    console.log(`${k1} x ${k} = ${k1*k}`)
    k++
}

//q4
n=Number(prompt("enter number: "));
let count4=0;
while (n>0){
    digit=n%10;
    n=Math.floor(n/10)
    count4+=1
}
console.log(count4)


//q5
n=Number(prompt("enter a number: "));
let reverse=""

while (n>0){
    let digit=n%10;
    n=Math.floor(n/10)
    reverse=(reverse*10)+digit
}
console.log(reverse)


//q6
n=Number(prompt("enter number: "));
let countSum=0;
while (n>0){
    digit=n%10;
    n=Math.floor(n/10)
    countSum+=digit
}
console.log(countSum)


//q7
let m=1;

while(m<=100){
    if ((m%3===0 && m%5===0) && (m%7!==0)){
        console.log(m)
    }
    m++
}

//q8
let o=1;
let product8=1;
s=Number(prompt("enter number: "))

while(o<=s){
    product*=o
    o++
}
console.log(product8)


q9
n=Number(prompt("enter a number: "));
let original=n;
let reverse9="";


while (n>0){
    let digit=n%10;
    n=Math.floor(n/10)
    reverse=(reverse9*10)+digit
}

if (original===reverse9){
    console.log("palindrome number")
}
else{
    console.log("not palindrome number")
}


// q10



// Part-3 Do-While Loop

//q1
let p=10;
do {
    console.log(p);
    p--;
} while(p>=1);


//q2
let i=1;
do {
    if(i%2===0){
    console.log(i);
    }
    i++;
} while(i<=20);


//q3
z=Number((prompt)("enter number: "));
let sum33=0;
let i3=1;
do{
    sum33+=i3
    i3++;
} while(i3<=z)

console.log(sum33)


 //q4
n=Number(prompt("enter number: "));
let prod=1;
do{
    let digit=n%10;
    n=Math.floor(n/10);
    prod*=digit;

}while(n>0)

console.log(prod)


//q5
n=Number(prompt("enter number: "));

do {
    if (n >= 10) {
        n = Math.floor(n / 10);
    }
} while (n >= 10);

console.log(n);


//q6
n=Number(prompt("enter number: "));
p=Number(prompt("enter power: "));
let result=1;
let i6=1;

do{
    result*=n;
    i6++
}while(i6<=p)

console.log(result);


//q7
let i7=1;
do{
    if(i7%4===0 && i7%8!==0){
        console.log(i7)
    }
    i7++
}while(i7<=100)


//q8
n=Number(prompt("enter number: "));
let original8=n;
let reverse8="";

do{
    digit=n%10;
    n=Math.floor(n/10);
    reverse8=(reverse8*10)+digit
}while(n>0)

if (original===reverse8){
    console.log("palindrome number")
}
else{
    console.log("not a palindrome number")
}
console.log(reverse8)