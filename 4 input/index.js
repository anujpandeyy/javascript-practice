//window prompt 


// let username;

// username = window.prompt("Username ?");
// console.log(username);

// and  HTML textbox

let username2;

document.getElementById('myBtn').onclick = function(){
    username2 =document.getElementById('myText').value;
    document.getElementById('ch').textContent = `Hello ${username2}`;
}

