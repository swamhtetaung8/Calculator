let keys = document.querySelectorAll(".key");
let display = document.querySelector(".display");

for(let i=0;i<keys.length;i++){
    if(keys[i].innerText==="="){
        keys[i].addEventListener("click",function(){
            display.innerText = eval(display.innerText)
        })
    }
    else if(keys[i].innerText==="AC"){
        keys[i].addEventListener("click",function(){
            display.innerText = "";
        })
    }
    else if(keys[i].innerText==="C"){
        keys[i].addEventListener("click",function(){
            display.innerText = display.innerText.substring(0,display.innerText.length-1);
        })
    }
    else{
        keys[i].addEventListener("click",function(){
        display.innerText += keys[i].innerText
    })
    }
    
}