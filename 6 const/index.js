const pi = 3.14;
let r,c;
// r = window.prompt("Enter r");
// r = Number(r);

document.getElementById("myBtn").onclick = function(){
    r = document.getElementById("myAns").value;
    r=Number(r);
    c = 2*pi*r 
    document.getElementById("ans").textContent = c+"cm";
} 

