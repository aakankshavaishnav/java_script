// Q=1
let month = 1;

if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
} else if (month >= 3 && month <= 5) {
    console.log("Summer");
} else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}

// Q=2
let income = 500000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax Amount:", tax);

// Q=3
let score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

// Q=4
let speed = 60;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}

// Q=5
let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

// Q=6
let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day === 6 || day === 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}

// Q=7
let units = 120;
let bill;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Electricity Bill: ₹" + bill);

// Q=8
let attendance = 85;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

// Q=9
let marks1 = 85;
let marks2 = 92;
let marks3 = 78;

if (marks1 >= marks2 && marks1 >= marks3) {
    console.log("Highest Mark:", marks1);
} else if (marks2 >= marks1 && marks2 >= marks3) {
    console.log("Highest Mark:", marks2);
} else {
    console.log("Highest Mark:", marks3);
}

// Q=10
let num = -7;

if (num === 0) {
    console.log("Zero");
} else if (num > 0 && num % 2 === 0) {
    console.log("Positive Even");
} else if (num > 0 && num % 2 !== 0) {
    console.log("Positive Odd");
} else if (num < 0 && num % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}

// ===============================================


// Q=1
let val = 15;

if (val> 10) {
    if (val % 3 === 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}

// Q=2
let age = 20;
let voterID = true;

if (age >= 18) {
    if (voterID === true) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID Required");
    }
} else {
    console.log("Not Eligible to Vote");
}

// Q=3
let marks = 85;

if (marks >= 40) {
    if (marks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

// Q=4
let pin = 1234;
let correctPin = 1234;
let balance = 5000;
let withdrawal = 2000;

if (pin === correctPin) {
    if (balance >= withdrawal) {
        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance - withdrawal);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}

// Q=5
let year = 2000;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

// Q=6
let email = "student123@example.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Email must contain @");
}

// Q=7
let cartTotal = 2000;
let isPremium = true;
let finalAmount;

if (cartTotal >= 1000) {
    if (isPremium === true) {
        finalAmount = cartTotal - cartTotal * 0.20;
    } else {
        finalAmount = cartTotal - cartTotal * 0.10;
    }
} else {
    finalAmount = cartTotal;
}

console.log("Final Amount: ₹" + finalAmount);

// Q=8
let number = 16;

if (number > 0) {
    if (number % 2 === 0) {
        if (number % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but Not Divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Number is not Positive");
}

// Q=9
let candidateAge = 25;
let hasDegree = true;
let experience = 3;

if (candidateAge >= 21 && candidateAge <= 30) {
    if (hasDegree === true) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Insufficient Experience");
        }
    } else {
        console.log("Graduation Degree Required");
    }
} else {
    console.log("Age Not Eligible");
}

// Q=10
let isPresent = true;
let internalMarks = 35;
let externalMarks = 60;

if (isPresent === true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("External Marks Insufficient");
        }
    } else {
        console.log("Internal Marks Insufficient");
    }
} else {
    console.log("Student is Absent");
}