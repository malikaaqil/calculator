
let display = document.getElementById("outputDisplay");
let keys = document.querySelectorAll("button");

let keysArray = Array.from(keys);

let str = "";


keysArray.forEach(btn => {

    btn.addEventListener("click", e => {
        
// console.log(e);
        if (e.target.classList.contains("clear")) {
            str = str.substring(0, str.length - 1);
            display.value = str;

        }
        
        else{
            str += e.target.innerHTML;
            display.value = str;
        }
        
    })
    

})
