
const boxes = document.querySelectorAll(".div");

boxes.forEach(box => {
    box.addEventListener("click", function () {
       
        let colorClass = this.classList[1]; 
        

        document.body.style.backgroundColor = colorClass;
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 5000);
    });
});
