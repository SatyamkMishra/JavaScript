// const calc = {
//     sum : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     abs : function(a){
//         return Math.abs(a);
//     }
// };


// console.log(calc.sum);
// console.log(calc.sum(1,2));//like Math.abs();
// console.log(calc.sub(-2,-5));
// console.log(calc.abs(-2));
// console.log(calc.abs(2));


const calc = {
    sum(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    abs(a){
        return Math.abs(a);
    }
};


console.log(calc.sum);
console.log(calc.sum(1,2));//like Math.abs();
console.log(calc.sub(-2,-5));
console.log(calc.abs(-2));
console.log(calc.abs(2));
