

var btn = document.querySelector("button"),
input = document.querySelector("input"),
img = document.querySelector("img");
btn.addEventListener("click",function(){generate(input.value)});

function generate(value){
    img.setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=350x350&data="+value);

}