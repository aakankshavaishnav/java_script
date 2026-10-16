//part A
//q1

let num =50;
if (num%5==0){
    console.log("divisible by 5")
}

//q2
let age =69;
if (age>60){
    console.log("senior citizen")
}

//q3
let num3 =102;
if (num3>100){
    console.log("Big number")
}

//q4
let temp=3;
if (temp<10){
    console.log("Very Cold")
}

//q5
let marks =69;
if (marks=60){
    console.log("Perfect score")
}

//q6
let num6 =-90;
if (num6<0){
    console.log("Negative number")
}

//q7
let text=""
if (text=""){
    console.log("no input provided")
}

//q8
let year =2000;
if (year%100==0){
    console.log("Century year")
}

//q9
let num9=8;
if (num9>0 && num9%2==0){
    console.log("Positive Even Number")
}

//q10
let marks10=99;
if (marks10<=100 && marks>=35){
    console.log("Valid marks")
}


//Part - B
//q1
let number=99;
if (number%2==0){
    console.log("Even");
}
else{
    console.log("Odd")
};

//q2
let age2=20;
if (age2>=18){
    console.log("Eligible to vote");
}
else{
    console.log("not eligible")
}

//q3
let num2=35;
if (num2>=0){
    console.log("Positive")
}
else{
    console.log("Negative")
}

//q4
let studentMarks=35;
if (studentMarks>=35){
    console.log("Passed")
}
else{
    console.log("failed")
}

//q5
let character="k";
if (character>="A" && character<="Z"){
    console.log("Uppercase")
}
else{
    console.log("not uppercase")
}


//q6
let number6=99;
if (number6%3==0){
    console.log("Divisible by 3");
}
else{
    console.log("not divisible by 3")
};

//q7
const prompt = require('prompt-sync')();
let pass=prompt("enter your password: ");
if (pass=="admin123"){
    console.log("Login succesfull")
}
else{
    console.log("Incorrect password")
}

//q8
let year8=2016;
if (year8%4==0){
    console.log("Leap yaer")
}
else{
    console.log("not a leap year")
}

//q9
let a=90;
let b=98;

if(a>b){
    console.log(`${a} is greater`)
}
else{
    console.log(`${b} is greater`)
}

//q10
let num7=7;
if(num7>0){
    console.log("positive")
}
else if(num7<0){
    console.log("negative")
}
else{
    console.log("zero")
}

//Part- C
//q1
month=Number(prompt("enter month: "));
if (month===12 || month===1 || month===2){
    console.log("Winter")
}
else if(month===3 || month===4 || month===5){
    console.log("Summer")
}
else if(month===6 || month===7 || month===8){
    console.log("Monsoon")
}
else if(month===9 || month===10 || month===11){
    console.log("Autumn")
};


//q2
income=Number(prompt("enter income: "));
if (income>1000000){
    console.log("15% tax")
    console.log(`tax amount: ₹${0.15*income}`)
}
else if (income>=700000){
    console.log("10% tax")
    console.log(`tax amount: ₹${0.1*income}`)
}
else if (income>=300000){
    console.log("5% tax")
    console.log(`tax amount: ₹${0.05*income}`)
}
else{
    console.log("No tax")
};



//q3
marks=Number(prompt("enter marks: "));
if (marks>=90){
    console.log("Outstanding")
}
else if (marks>=70){
    console.log("Good")
}
else if (marks>=40){
    console.log("Average")
}
else{
    console.log("Needs Improvement")
};

//q4
speed=Number(prompt("enter speed: "));
if (speed>80){
    console.log("Fast")
}
else if (speed>=40){
    console.log("Normal")
}
else{
    console.log("Slow")
};


//q5
height=Number(prompt("enter height: "));
if (height>170){
    console.log("Tall")
}
else if (height>=150){
    console.log("Average")
}
else{
    console.log("Short")
};


//q6
day=Number(prompt("enter day: "));
if (day>=1 && day<=5){
    console.log("Weekday")
}
else if (day===6||7){
    console.log("Weekend")
}
else{
    console.log("Invalid")
};


//q7
units=Number(prompt("enter units: "));
if (0<=units<=50){
    console.log(`bill: ₹${units*2}`)
}
else if (50<units>=150){
    console.log(`bill: ₹${units*4}`)
}
else{
    console.log(`bill: ₹${units*6}`)
};


//q8
att=Number(prompt("enter attendance percentage: "));
if(att>=90){
    console.log("Excellent")
}
else if(att>=75){
    console.log("Good")
}
else if(att>=50){
    console.log("Satisfactory")
}
else{
    console.log()
};


//q9
marks_1=Number(prompt("enter Marks 1: "));
marks_2=Number(prompt("enter Marks 2: "));
marks_3=Number(prompt("enter Marks 3: "));

if (marks_1>marks_2 && marks_1>marks_3){
    console.log("highest:",marks_1)
}
else if (marks_2>marks_1 && marks_2>marks_3){
    console.log("highest:",marks_2)
}
else{
    console.log("highest:",marks_3)
};


//q10
num=Number(prompt("enter number: "));

if (num>0){
    console.log("positive")
    if(num%2==0){
        console.log("positive even")
    }
    else{
        console.log("positive odd")
    }
}
else if (num<0){
    console.log("Negative")
    if(num%2==0){
        console.log("negative even")
    }
    else{
        console.log("negative odd")
    }
}
else{
    console.log("Zero")
};





//Part- D
//q1
num1=Number(prompt("enter number: "));
if (num1>10){
    if (num1%3==0){
        console.log("greater than 10 and divisible by 3")
    }
    else{
        console.log("not divisible by 3")
    }
}
else{
    console.log("less than 10")
};

//q2
age=Number(prompt("enter age: "));
hasVoterid=true
if (age>=18){
    if (hasVoterid==true){
        console.log("can vote")
    }
    else{
        console.log("cant vote")
    }
}
else{
    console.log("cant vote")
};


//q3
marks3=Number(prompt("enter marks: "));
if (marks3>=40){
    if (marks3>=80){
        console.log("Passed with distinction")
    }
    else{
        console.log("passed")
    }
}
else{
    console.log("failed")
};


//q4
balance=34;
pin=Number(prompt("enter pin: "));
if (pin===1234){
    console.log("pin is correct")
    if (balance>0){
        console.log("balance is sufficient for withdrawal")
    }
    else{
        console.log("balance is not sufficient for withdrawal")
    }
}
else{
    console.log("wrong pin")
};


//q5
year=Number(prompt("enter year: "));
if (year%4==0){
    if (year%100==0){
        if(year%400==0){
            console.log("Leap year")
        }
    }
}
else{
    console.log("not a leap year")
};


//q6
email=prompt("enter email: ");
if ((email.includes("@"))==true){
    if ((email.endsWith(".com"))==true){
        if (email.length>10)
        console.log("valid email")
    }
}
else{
    console.log("invalid")
};

//q7
total=Number(prompt("enter Total: "));
isMember=true
if (total>=1000){
    if (isMember==true){
        console.log("20% discount")
        console.log(`total: ₹${0.8*total}`)
    }
    else{
        console.log("10% discount")
        console.log(`total: ₹${0.9*total}`)
    }
}
else{
    console.log("no discount")
};


//q8
num8=Number(prompt("enter number: "));
if (num8>0){
    if (num8%2==0){
        if (num8%4==0){
            console.log("Positive Even and Divisible by 4")
        }
    }
}
else{
    console.log("negative")
};


//q9
age_9=Number(prompt("enter age: "));
hasDegree=true;
experience=Number(prompt("enter experience in years: "));
if (21<=age_9<=30){
    if(hasDegree==true){
        if(experience>=2){
            console.log("eligible for interview")
        }
    }
}
else{
    console.log("not eligible")
}


//q10
isPresent=true;
internalMarks=Number(prompt("enter internal marks: "));
externalMarks=Number(prompt("enter external marks: "));
if (isPresent==true){
    if(internalMarks>=30){
        if(externalMarks>=35){
            console.log("Eligible for Final Exam")
        }
    }
}
else{
    console.log("not eligible")
}


// //Part- E
// //switch case

//q1
month=Number(prompt("enter month: "));
switch(month){
    case (1):
    case (3):
    case (5):
    case (7):
    case (10):
    case (12):
        console.log("30 days");
        break;
    case (4):
    case (6):
    case (9):
    case (11):
        console.log("31 days");
        break;
    case (2):
        console.log("28 days")
    default:
        console.log("invalid");
}


//q2
char=prompt("enter character: ")

switch(char){
    case ('a'):
    case ('e'):
    case ('i'):
    case ('o'):
    case ('u'):
    case ('A'):
    case ('E'):
    case ('I'):
    case ('O'):
    case ('U'):
        console.log("vowel");3
        break;
    default:
        console.log("consonant");
}


//q3
season=prompt("enter season: ")

switch(season){
    case 1:
    case 2:
        console.log("winter")
    case 3:
    case 4:
        console.log("summer")
        break;
    default:
        console.log("invalid");
}


//q4
let marks1=Number(prompt("enter marks: "));

switch(true){
    case (marks1>=75 && marks1<=100):
        console.log("Distinction")
        break;
    case (marks1>=60 && marks1<75):
        console.log("1st class")
        break;
    case (marks1>=50 && marks1<60):
        console.log("2nd class")
        break;
    case (marks1>=35 && marks1<50):
        console.log("3rd class")
        break;
    case (marks1<35 &&  marks1>0):
        console.log("F")
        break;
    default:
        console.log("invalid")
}

//q5
let role=prompt("enter role: ")

switch(role){
    case("admin"):
        let action=prompt("enter action: ")
            switch (action){
                case("create"):
                    console.log("creating..")
                case("edit"):
                    console.log("editing")
                case("delete"):
                    console.log("deleting..")
                default:
                    console.log("invalid")
    case("user"):
        console.log("limited access")
            }
            }


//q6
let fruit = "mango";

switch (fruit) {                            //first break was not used so it was printing the next values too 
  case "apple":
    console.log("Apple is red");
    break
  case "mango":
    console.log("Mango is yellow");
    break
  case "banana":
    console.log("Banana is yellow");
    break
  default:
    console.log("Unknown fruit");
}


// //q7
let value = "0";

switch (value) {
  case 0:
    console.log("Number 0");
    break;
  case "0":
    console.log("String 0");
    break;
  case false:
    console.log("Boolean false");
    break;
  case null:
    console.log("Null");
    break;
  case undefined:
    console.log("Undefined");
    break;
  default:
    console.log("Other value");
}


//q8
console.log("1 -> +")
console.log("1 -> -")
console.log("1 -> *")
console.log("1 -> /")
console.log("1 -> %")
console.log("1 -> **")

operation=Number(prompt("enter operation number: "))

a=Number(prompt("enter number 1: "))
b=Number(prompt("enter number 2: "))

switch (operation){
    case 1:
        console.log(a+b)
    case 2:
        console.log(a-b)
    case 3:
        console.log(a*b)
    case 4:
        if (b===0){
            console.log("not possible")
        }
        else{
            console.log(a/b)
        }
    case 5:
        console.log(a%b)
    case 6:
        console.log(a**b)
}   

//q9
date=prompt("enter your date: ")

switch (true){
    case date>20 && date<=31:
        console.log("End of the month")
    case date>11 && date<=20:
        console.log("Middle of the month")
    case date>=1 && date<=10:
}

//q10
type=prompt("enter type: ")

switch (type){
    case ("veg"):
        size=prompt("enter full or half: ")
        switch (size){
            case ("half"):
                console.log("order summary and price details for half portion...")
            
            case ("full"):
                console.log("order summary and price details for full portion...")
            
}
    case ("nonveg"):
        size=prompt("enter full or half: ")
        switch (size){
            case ("half"):
                console.log("order summary and price details for half portion...")
            
            case ("full"):
                console.log("order summary and price details for full portion...")
}
}

//Part-F
//ternary operators

//q1
num=Number(prompt("enter number: "));

let result=num%7==0 ? "Divisible by 7" : "not divisible by 7";
console.log(result)

//q2
temp=Number(prompt("enter temperature: "));
let res=temp>=30 ? "hot day" : "pleasant day";
console.log(res)

//q3
string=prompt("enter word: ");
let re=string.length===0 ? "empty string" : "string has content";
console.log(re)

//q4
age=Number(prompt("enter age: "));
let r1=age>=20 ? "adult" : age>=13 ? "teenager" : "child";
console.log(r1)

//q5
let a5 = Number(prompt("enter num1: "));
let b5 = Number(prompt("enter num2: "));
let c5 = Number(prompt("enter num3: "));

let r2 = a5 > b5 && a5 > c5
    ? `${a5} is greatest`
    : b5 > a5 && b5 > c5
    ? `${b5} is greatest`
    : `${c5} is greatest`;

console.log(r2);

//q6
let marks6=Number(prompt("enter marks: "));
let r3=marks>=75 ? "distinction" : marks6>=60 ? "First class" : marks6>=50 ? "second class" : marks6>=35 ? "pass" : "fail";
console.log(r3);

//q7
let numm = Number(prompt("enter marks: "));
let r4 = numm > 0 && numm % 2 == 0 ? "positive even" : numm < 0 && numm % 2 == 0 ? "negative even" : numm > 0 && numm % 2 != 0 ? "positive odd" : numm < 0 && numm % 2 != 0 ? "negative odd" : "zero";
console.log(r4);

//q8
year1=Number(prompt("enter year: "));
let r5=(year1%4===0 && year1%100!=0 || (year%400===0)) ? "Leap year" : "not a leap year";
console.log(r5);

//q9
let role1=prompt("enter role: ");
let action=prompt("enter action: ");
const r6 = role1 === "admin" ? (action === "delete" ? "Admin Delete" : action === "edit" ? "Admin Edit" : "Admin Other") : role === "user" ? (action === "view" ? "User View" : "User Restricted") : "Invalid Role";

console.log(r6);

//q10
let cartTotal=prompt("enter price: ");
let r7 = cartTotal >= 5000 ? `Discount: 20%, Final Amount: ₹${cartTotal * 0.8}` : cartTotal >= 2000 ? `Discount: 10%, Final Amount: ₹${cartTotal * 0.9}` : cartTotal >= 1000 ? `Discount: 5%, Final Amount: ₹${cartTotal * 0.95}` : `Discount: 0%, Final Amount: ₹${cartTotal}`;

console.log(r7)