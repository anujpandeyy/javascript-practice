// let max = 100;
// let min = 50;

// let randomNum =Math.floor (Math.random()*(max-min)+min);

// console.log(randomNum);

let roll = document.getElementById("myBtn");
let setText1 = document.getElementById("myText1");
let setText2 = document.getElementById("myText2");
let setText3 = document.getElementById("myText3");
let min = 1;
let max =6;
let randomNum1;
let randomNum2;
let randomNum3;


roll.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;
    setText1.textContent = randomNum1;
    setText2.textContent = randomNum2;
    setText3.textContent = randomNum3;
}