let a = [1,2,3,4,5,6,7,8];

let[f,s] = a;

console.log(f,s);

let [u,t,...other] = a;
console.log(other);


let stu = {
    name: "satyam",
    age: 12,
    marks: 90,
    dob:  2004
};

let stu2 = {
    c: "shivam",
    d: 14
};


let {dob} = stu;
console.log(dob);


let {dob: d,name:n} = stu;

console.log(d,n);

let merge = {...stu,...stu2};

console.log(merge);
