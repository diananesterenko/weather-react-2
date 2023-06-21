
import './App.css';

import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import WeekForecast from "./WeekForecast";
import WeatherForecast from "./WeatherForecast";
import React, { useState } from "react";

export default function App() {
  const apiKey= `2f0dea016bed96ccfde24c9fe8409b1f`;
  let defaultCity = "Paris";
  const [city, setCity] = useState(defaultCity);
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  function ConvertTime(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);

    var hour = a.getHours();
    var min = a.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (min < 10) {
      min = `0${min}`;
    }

    var time = hour + ":" + min;

    return time;
  }
     function displayWeather(response) {
      console.log(response);
      setWeatherDate({
        cityVal: response.name,
        dateElem: `<br><hr> ${ConvertTime(response.dt*1000)}`,
        degrees: Math.round(response.main.temp),
        wind: `${Math.round(response.wind.speed)} km/h`,
        humidity: `${response.main.humidity} %`,
        description: response.weather[0].description,
        lowTemp: Math.round(response.main.temp_min),
        highTemp: Math.round(response.main.temp_max),
        icon: response.weather[0].icon,
        sunrise: ConvertTime(Math.round(response.sys.sunrise)),
        sunset: ConvertTime(Math.round(response.sys.sunset)),
        feels:`${Math.round(response.main.feels_like)}°C`,
        coord: response.data.coord,
        date: new Date(response.data.dt * 1000),
        ready: true,
      });
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log("submit");
      searchCity();
    }

    function searchCity(){
  
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
    
      
    }
    function handleCityChange(event) {
      setCity(event.target.value);
      console.log(city);
    }
  
  if (weatherDate.ready) {
  return (
    <div className="App">
    <br />
    <div className="content">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit} class="form1" id="forminput">
                <div class="row">
                    <div class="col-6"><input id="search" class="search" type="search" placeholder="Search" /></div>
                    <div class="col-1"></div>
                    <div class="col-2"> <input type="submit" onChange={handleCityChange} class="submit" value="" /></div>
                   
                    <div class="col-2"><input type="" class="submit" id="current" value="Current" /></div>
                </div>
                
               
                
      </form>
      <Citydate value={weatherDate} />
      
    </div>
  </div>
  );
 } else {
  
  searchCity();
  return "Loading...";
}
}