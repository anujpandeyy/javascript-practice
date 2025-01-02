let count = 0;

let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let countLabel = document.getElementById("count");

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
