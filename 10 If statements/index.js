let age;


const myBtn = document.getElementById("myBtn");
const myTxt = document.getElementById("myText");
const myAns = document.getElementById("setText");

myBtn.onclick = ()=>{
    age = myTxt.value;
    age = Number(age);
    if(age>=18){
        myAns.textContent = "You can vote!";
    }
    else if(age<=0){
        myAns.textContent = "Age cannot be zero or negative";
        
    }
    else{
        myAns.textContent = "You can not vote";
    }
    
}

