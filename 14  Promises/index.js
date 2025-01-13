let num = 1;

let fetchUserData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(num>0){
            resolve(
                {
                    id: num,
                    name: "Anuj Pandey",
                    email: "anuj@example.com"
                }
            )
        }
        else{
            reject("Invalid user ID.");
        }
    },3000)
})


fetchUserData.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("All Done");
})