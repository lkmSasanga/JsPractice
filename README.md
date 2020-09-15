# JsPractice
// var date  = new Date();
// document.body.innerHTML = ("<h1> Today is : " + date + "</h2>")
//
// var a = 5;
// var b = "5";
// var theNumberMatch;
//
// if (a === b ){
//   theNumberMatch = true;
// } else {
//   theNumberMatch = false;
// }
//
// console.log("The numbers Match : " + theNumberMatch);

//ternary operator

// var a = 5;
// var b = 5;
// a == b ? console.log("Match") : console.log("No Match");
//
// var pens;
// pens = ["red", "blue", "greeen", "orange"];
// console.log(pens);

// pens[3] = "purple";
// var fourthPen = pens[3];
// console.log(fourthPen);


//property - meta information about the  object
//method - function that belongs to the project


// console.log(pens.reverse());
// console.log(pens.shift());
// pens.unshift("pink", "brown");
// pens.pop();
// pens.push("f");
// pens.pop();
//
// console.log(pens);
//
// var newPens = pens.slice();
// console.log("New Pens " + newPens);




//regular function
// function multiply() {
//   var result = 3 * 4;
//   console.log("3 * 4 is : " + result);
// }
// multiply();

//anonymous function
// var divided =  function() {
//   var result = 3 / 4;
//   console.log("3 / 4 is : " , result);
// }
// divided();

//immediatly invoked function
// (function () {
//   var result = 7 / 4;
//   console.log("7 / 4 is : " , result);
// }())



// function findBiggestFraction(a, b) {
//   var result;
//   a>b ? result = ["firstFraction ", a] : result = ["secondFraction ", b];
//   return result;
// }
// var firstFraction = 1/2;
// var secondFraction = 1/3;
// var fractionresult = findBiggestFraction(firstFraction, secondFraction);
// console.log(fractionresult);










// --------------------anonymous function

// var a = 1/2;
// var b = 2/3;
//
// var theBiggest = function() {
//   var result;
//   a>b ? result = ["a ", a] : result = ["b ", b];
//   console.log(result);
// }
//
// theBiggest();

// ----------------if we create  a varible without
// var keyword that variable will be a GLOBAL variable
// EVEN INSIDE A METHOD
// const - can not be changed
// let - smaller scope than var

// function logScope() {
//   var localVar = 2;
//
//   if(localVar) {
//     let localVar = "I'm Different";
//     console.log("nested localVar ", localVar);
//   }
//
//   console.log("logScope localVar ", localVar);
// }
//
// logScope();


// var course = new Object();
//
// var course = {
//   title : "Javascript",
//   level : "level 01",
//   published : true,
//   views : 0,
//   updateViews : function () {
//     return ++course.views;
//   }
// }
//
// console.log(course);


// function Course(title, instructor, level, published, views) {
//   this.title = title;
//   this.instructor = instructor;
//   this.level = level;
//   this.published = published;
//   this.views = views;
//   this.updateViews = function(){
//     return ++this.views;
//   };
// }
//
// var courses = [
//   new Course("javascript", "LK", 1, true, 0),
//   new Course("java", "LKMS", 1, true, 123456)
// ];

// var course01 = new Course("javascript", "LK", 1, true, 0);
// var course02 = new Course("java", "LKMS", 1, true, 123456);
//
// console.log(course01);
// console.log(course02);

// console.log(courses);
// console.log(courses[1].level);
// console.log(courses[1].updateViews());
// console.log(courses[1].updateViews());
// console.log(courses[1].updateViews());
// console.log(courses[1].updateViews());


// --------------------closures

// function doSomeMath() {
//   var a = 10;
//   var b = 20;
//   // var sum = a + b;
//
//   function  multiply() {
//     var result = a * b;
//     return result;
//   }
//
//     return multiply;
// }
//
// var result = doSomeMath();
// console.log("Sum of a and b : " + result());

// --------------------access and change elements

// document.querySelector(" .main-title").innerHTML
// document.querySelector(" .main-title").outerHTML
// document.querySelector(" .main-title").innerHTML = "We can change the text in tag!"
// .main-title is the class of the element(css)

// document.querySelector(".masterhead").classList
// document.querySelector(".masterhead").classList.add(".new-class")


const FEATURED = document.querySelector(".featuredImage");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");
