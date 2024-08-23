// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// let sum = 0;
// for(let count = 1;count<=5;count++){
//     sum += count;
// }
// console.log(sum);

// let i = 1;
// let sum = 0;
// while(i<=5){
//     sum += i;
//     i++;
// }
// console.log(sum);

// let i = -1;
// do{
//     console.log("Hello World");
//     i++;
// }while(i<0);

// let str = "Satyam";
// for(let i of str){
//     console.log(i);
// }


// const student = {
//     fname : "Satyam",
//     cgpa : 8.5,
//     clg : "Niet"
// };

// for(let i in student){
//     console.log(i + "=" + student[i]);
// }
 const prompt = require("prompt-sync")();
// let num = 12;

// let n = prompt("Enter the number : ");

// while(n != num){
//     n = prompt("Enter the number again : ");
// }

// console.log("You guess correctly");


//String


//let s = "Satyam";

// console.log(s);
// console.log(s.length);
// console.log(s[3]);

//Templet literal
//console.log(`The string value is ${s} and length is ${s.length} and char present at 3rd position is ${s[3]}`);

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.trim());

// console.log(s.slice(0,4));
// console.log(s.charAt(4));

let username = prompt("Enter your userName : ");
console.log(`Your Email id is @${username}${username.length}`);