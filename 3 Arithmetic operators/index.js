//operands (var,value) operators (+ - * / % **)

let x = 50;

let a = x+1; 
let b = x-1; 
let c = x*2; 
let d = x/3; 
let e = x%3; 
let f = x**1; 






document.getElementById('op1').textContent = `${a}`;
document.getElementById('op2').textContent = `${b}`;
document.getElementById('op3').textContent = `${c}`;
document.getElementById('op4').textContent = `${d}`;
document.getElementById('op5').textContent = `${e}`;
document.getElementById('op6').textContent = `${f}`;

/*operator precedence
1. parenthesis ()
2. expo
3. mul & div & mod
4. add & sub
*/

let result = (2+6)*4;
console.log(result);

let p = x++;
let p2 = x--;

console.log(p,p2);
