let getWeatherData = (city)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(city){
               resolve(
               {
                city: "Delhi",
                temperature: 25,
                condition: "Sunny"
               }
                )
            }
            else{
                reject("Error: City name cannot be empty.");
            }
        },3000)
    })
}

let showWeather = async(city)=>{
   try{
    const data = await getWeatherData(city);
    console.log(data);
   }
   catch(e){
    console.log(e);
   }
   finally{
    console.log("Weather data retrieval complete.");    
   }
}

showWeather("Delhi");