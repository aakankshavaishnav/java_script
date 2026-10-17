// 1
function display() {
    var country = "India";
    var city = "Surat";
    console.log(city);
    console.log(country);
}
display();
// 2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
// ques-3
var college = "ABC coco";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "drivingschool";
}
// ques-4
// function first() {
//     var number = 100;
// }
// function second() {
//     console.log(number);
// }
// first();
// second();
// ques-5

var global = "coco";
function marks(){
    var local = "I am lilly";
    console.log(global);
    console.log(local);
}
marks();
console.log(global);

// ques-6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// ques-7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);

// ques=8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

// ques=9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);

// ques=10
var school="sunshine school";
function showschool(){
    var massage=""
}