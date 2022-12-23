
let div = null;
const chButton = document.querySelector("#changeButton");
const body = document.querySelector("body");
const cpButton = document.querySelector("#copyButton");
const input = document.querySelector("#inp");


chButton.addEventListener("click",function(){
    let hexColor = generateHexColor();
    inp.value = hexColor;
    body.style.backgroundColor = hexColor;
    
    input.addEventListener("keyup",function(e){
        const color = e.target.value;
        if (color && isHexValid(color)) {
            body.style.backgroundColor = color;
        }
    })
})


cpButton.addEventListener("click",function(){
    navigator.clipboard.writeText(inp.value);
    if (div != null) {
        div.remove();
        div = null;
    }
    if(isHexValid(inp.value)){
        showToastMessage(`${inp.value} copied`);
    }else{alert(`Invalid Color Code`)}
   
})



function generateHexColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


function showToastMessage(msg){
    div = document.createElement(`div`);
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";
    div.addEventListener("click",function(){
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function(){
    div.remove();
    div = null;
    })
})
    document.body.appendChild(div);
}


function isHexValid(color){
    if(color.length != 7) return false;
    if(color[0] != '#') return false;
    color = color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}