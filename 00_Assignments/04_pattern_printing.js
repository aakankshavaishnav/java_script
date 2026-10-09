// 1
let n1 = 1;
for (let i = 1; i <= 4; i++) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        bag += n1 + " ";
        n1++;
    }
    console.log(bag);
}

// 2
for (let i = 0; i < 5; i++) {
    let bag = "";
    for (let j = 0; j <= i; j++) {
        bag += String.fromCharCode(65 + j) + " ";
    }
    console.log(bag);
}

// 3
for (let i = 1; i <= 5; i++) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === 5) bag += "* ";
        else bag += "  ";
    }
    console.log(bag);
}

// 4
for (let i = 5; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        bag += "*";
    }
    console.log(bag);
}

// 5
for (let i = 5; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        bag += i + " ";
    }
    console.log(bag);
}

// 6
for (let i = 5; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        bag += j + " ";
    }
    console.log(bag);
}

// 7
let n7 = 15;
for (let i = 5; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        bag += String(n7).padStart(2, " ") + " ";
        n7--;
    }
    console.log(bag);
}

// 8
for (let i = 5; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        if (i === 5 || j === 1 || j === i) bag += "* ";
        else bag += "  ";
    }
    console.log(bag);
}