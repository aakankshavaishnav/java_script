// Q=1: Print the number of days in a month using switch.
let month = 2;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 days");
        break;
    default:
        console.log("Invalid Month");
}

// Q=2: Check whether a character is a vowel or consonant.
let ch = "e";

switch (ch.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// Q=3: Print Winter for 1–2 and Summer for 3–4.
let num = 3;

switch (num) {
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
        console.log("Summer");
        break;
    default:
        console.log("Invalid Number");
}

// Q=4: Assign a class based on marks using switch(true).
let marks = 80;

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;
    case marks >= 60:
        console.log("1st Class");
        break;
    case marks >= 50:
        console.log("2nd Class");
        break;
    case marks >= 35:
        console.log("3rd Class");
        break;
    default:
        console.log("Failed");
}

// Q=5: Check the role and perform an admin action.
let role = "admin";
let action = "create";

switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("Create Action");
                break;
            case "edit":
                console.log("Edit Action");
                break;
            case "delete":
                console.log("Delete Action");
                break;
            default:
                console.log("Invalid Action");
        }
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Invalid Role");
}

// Q=6: Predict the output and fix fall-through using break.
let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;
    case "mango":
        console.log("Mango is yellow");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    default:
        console.log("Unknown fruit");
}

// Q=7: Identify different values using switch.
let value = "0";

switch (value) {
    case 0:
        console.log("Number Zero");
        break;
    case "0":
        console.log("String Zero");
        break;
    case false:
        console.log("Boolean False");
        break;
    case null:
        console.log("Null Value");
        break;
    case undefined:
        console.log("Undefined Value");
        break;
    default:
        console.log("Unknown Value");
}

// Q=8: Perform arithmetic operations using switch.
let a = 10;
let b = 5;
let operator = "**";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(a / b);
        }
        break;
    case "%":
        if (b === 0) {
            console.log("Cannot calculate remainder with zero");
        } else {
            console.log(a % b);
        }
        break;
    case "**":
        console.log(a ** b);
        break;
    default:
        console.log("Invalid Operator");
}

// Q=9: Classify a date as beginning, middle, or end of the month.
let date = 15;

switch (true) {
    case date >= 1 && date <= 10:
        console.log("Beginning of the month");
        break;
    case date >= 11 && date <= 20:
        console.log("Middle of the month");
        break;
    case date >= 21 && date <= 31:
        console.log("End of the month");
        break;
    default:
        console.log("Invalid Date");
}

// Q=10: Select food category, item, and size to calculate the price.
let category = "veg";
let item = "pizza";
let size = "full";
let price = 0;

switch (category) {
    case "veg":
        switch (item) {
            case "pizza":
                price = 200;
                break;
            case "burger":
                price = 100;
                break;
            default:
                console.log("Invalid Veg Item");
        }
        break;
    case "nonveg":
        switch (item) {
            case "pizza":
                price = 300;
                break;
            case "burger":
                price = 150;
                break;
            default:
                console.log("Invalid Nonveg Item");
        }
        break;
    default:
        console.log("Invalid Category");
}

if (price > 0) {
    switch (size) {
        case "half":
            price = price / 2;
            break;
        case "full":
            break;
        default:
            price = 0;
            console.log("Invalid Size");
    }

    if (price > 0) {
        console.log("Category:", category);
        console.log("Item:", item);
        console.log("Size:", size);
        console.log("Final Price: ₹" + price);
    }
}