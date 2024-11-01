console.log([1,2,3,4].reduce((res,el) => (res+el)));

let a  = [1,2,3,4];

let r = a.reduce((max,el) => {
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(r);


let ar = [10,20,30];

console.log(ar.every((el)=>(el%10==0)));