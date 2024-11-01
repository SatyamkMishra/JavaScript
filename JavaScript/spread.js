let a = [1,2,3,4,5];

console.log(...a);
console.log(Math.min(...a));

console.log(..."Satyam");

console.log(..."Satyam Kumar");


let newArr = [...a];

console.log(...newArr);

console.log(a===newArr);


let data = {
    greet: "hello",
    no: 9709
};

let dataCopy = {...data};

let newdata = {...data,id:23};

console.log(newdata);


let obj = {...a};
console.log(obj);

let c = {..."hello"};
console.log(c);