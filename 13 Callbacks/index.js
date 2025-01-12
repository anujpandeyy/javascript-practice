var downloadFile = (fileName,callback)=>{
    console.log(`Downloading ${fileName}...`);
    setTimeout(()=>{
        callback(`File ${fileName} downloaded successfully`);
    },2000)
}

var processFile = (fileName,callback) =>{
    console.log(`Processing ${fileName}...`);
    setTimeout(()=>{
        callback(`File ${fileName} processed successfully`);
    },2000)
    
}

downloadFile('file1.txt',(message)=>{
    console.log(message);
});

processFile('file1.txt',(message)=>{
    console.log(message);
});

function calculateSum(n1,n2,callback){
   let sum = n1+n2;
    callback(sum);    
}

calculateSum(10,20,(display)=>{
    console.log(display);
});


