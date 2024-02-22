let city = document.querySelector("#city")
let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    getWeatherCoo(city.value)
    
})
async function getWeatherCoo(param) {
    const reponse = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+param+"&limit=1&appid=0dbcb3ce07b551036831fd827cca2cf0");
    const weatherCoo = await reponse.json();
    getWeatherInfos(weatherCoo)
    // console.log(weatherCoo[0].lon)
    
  }

  async function getWeatherInfos(param) {
    const reponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+param[0].lat+"&lon="+param[0].lon+"&appid=0dbcb3ce07b551036831fd827cca2cf0");
    const weather = await reponse.json();
    console.log(weather.name)
    
    document.getElementById("meteo-html").innerHTML = 
    
    `<div> 
    <h1>Ville : ${weather.name} </h1>
      <ul>
        <li> Température : ${Math.round(weather.main.temp - 273 )} </li>
        <li> Humidity : ${weather.main.humidity}</li>
        <li> Pression : ${weather.main.pressure}</li>
      </ul>
      </div>`
  
  }







  