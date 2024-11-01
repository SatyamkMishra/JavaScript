/*//map function
let a = [1,2,3,4];

let double = a.map((el) => {
    return el*2;
});

function print(el){
    console.log(el);
};

double.forEach(print);


let arr = [
    {
     name :"Satyam",
     marks : 112
    },
 
    {name: "kumar",
     marks : 123
    }
 
 ];
 
 
 let students = arr.map((el) => {
     return el.marks/10;
 });

 students.forEach(print);

 */

 //filter functionn

 let a = [1,2,3,4,5,6,7,8,9,0];

 let even = a.filter((el) => {
     return el%2 == 0;
 });


 even.forEach((el) => {
    console.log(el);
 });