let a = prompt("Guess a number between 1 to 10 : ");
let r = Math.floor(Math.random()*10)+1;
let n = 0;
while(a!=r){

    if(a<r){
       a = prompt("Guess a larger number: ");
    }else if(a>r){
        a = prompt("Guess a larger number: ");
    }
    n++;

}

if(a==r){
    console.log(`You guess in ${n} attempts `);
}