let icon = document.getElementById("icon");
let btn = document.getElementById("demo-id");
icon.onclick = function () {
    if(btn.style.width=="50px"){
        btn.style.transition="0.5s";
        btn.style.width="200px";}
    
    else{
        btn.style.width="50px";
        btn.style.transition="0.5s";
    }
}