const city = document.getElementById("city");
const button = document.getElementById("search");
let p = document.getElementById("description");
let i = document.getElementById("icon")
let d = document.getElementById("displayArea");
let temp = document.getElementById("temp")
let cityTitle = document.getElementById("cityTitle")

button.addEventListener('click', async function data() {
    const apiKey = '0237eee757034298b1fc4b3ea85366bb';
    const cityName = city.value;
    try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            console.log(data);

            if(!response.ok)
            {
              cityTitle.textContent = "Unknown City";
              temp.textContent = "City Not Found";
              i.src = "";
              p.textContent = "";
              console.log("yeh")
                 d.style.display = "block";
            }
            else
            {
                   d.style.display = "block";
           
           
           cityTitle.textContent = data.name;
           temp.textContent = `${data.main.temp}°C`;
           p.textContent = data.weather[0].description;

           i.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;


            }

         
           

    }catch(error)
    {
        console.error("An error occured:", error.message)
      
    }

    finally{
        console.log("done")
    }
   
})