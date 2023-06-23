
import './App.css';

import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import Footer from './Footer';
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
        coord: response.coord,
        date: new Date(response.dt * 1000),
        ready: true,
      });
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log("submit");
      searchCity();
    }
    function searchLocation(position){
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`);
    }
    function searchCity(){
  
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
    
      
    }
    function handleCityChange(event) {
      setCity(event.target.value);
      console.log('chaaangeee');
      console.log(city);
    }
    function displayCurrentWeather(){
      console.log('current');
      navigator.geolocation.getCurrentPosition(searchLocation);
    }
  if (weatherDate.ready) {
  return (
    <article>
    <div className="weather-app">
    <br />
    <div className="content">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="form1" id="forminput">
                <div className="row">
                    <div className="col-6"><input id="search" className="search" onChange={handleCityChange} type="search" placeholder="Search" /></div>
                    <div className="col-1"></div>
                    <div className="col-2"> <input type="submit"  className="submit" value="" /></div>
                   
                    <div className="col-2"><input type="" className="submit" id="current" value="Current" onClick={displayCurrentWeather}/></div>
                </div>
                
               
                
      </form>
      <Citydate value={weatherDate} />
      <Weathermarkers value={weatherDate} />
      <hr />
      <WeatherForecast coords={weatherDate.coord} />
      
    </div>
    
  </div>
  <Footer/>
  </article>
  );
 } else {
  
  searchCity();
  return "Loading...";
}
}