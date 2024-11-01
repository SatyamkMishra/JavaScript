const prompt = require("prompt-sync")();
// let a = prompt("Enter the number : ");

// if(a%5==0){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// const fname = prompt("Enter your name : ");
// console.log("My name is " + fname);


let marks = prompt("Enter your marks : ");

if(marks>80){
    console.log("Your grade is A")
}else if(marks>70){
    console.log("Your grade is B")
}else if(marks>60){
    console.log("Your grade is C")
}else{
    console.log("Your grade is D")
}