const apiKey="b900913e1f879298d5adc5c9018348b4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city.trim()+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if(data.name==undefined||response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }
    else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    const weatherIcon= document.querySelector(".weather-icon");
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";

    }

    if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";

    }

    if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";

    }

    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";

    }

    if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";

    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
}}
searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
})

