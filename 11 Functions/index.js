 function calculateRectangleArea(length,width){
    return length * width;
}

function calculateCircleArea(PI,radius1,radius2){
    return  PI*radius1*radius2;
}

function calculateTriangleArea(base,height){
    return (base * height) / 2;
}

var ans = calculateRectangleArea(5,10);

var ans2 = calculateCircleArea(Math.PI,5,5);

var ans3 = calculateTriangleArea(5,10);

console.log(`Rectangle ${ans}`);
console.log(`Circle ${ans2}`);
console.log(`Triangle ${ans3}`);
