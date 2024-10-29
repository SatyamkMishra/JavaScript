let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    console.log("Clicked");
    let item = document.createElement("li");
    let deleteBtn = document.createElement("button");


    deleteBtn.innerText = "Delete";
    item.innerText = inp.value;

    deleteBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(deleteBtn);
    
    console.log(inp.value);
    inp.value = "";
});


// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         console.log("Element Deleted");

//         let parent = this.parentElement;
//         console.log(parent);

//         parent.remove();
//     });
// };

ul.addEventListener("click" , function(evt){
    console.dir(evt.target.nodeName);
    console.log("clicked ");

    if(evt.target.nodeName == "BUTTON"){
        let lItem = evt.target.parentElement;
        console.log("delete ",lItem);
        lItem.remove();
    }else{
        console.log("don't delete");
    }
});