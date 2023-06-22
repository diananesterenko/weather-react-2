import React, { useState, useEffect } from "react";
import './WeatherForecast.css';


import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.daily);
    
                console.log(response.daily);
    setLoaded(true);
  }
  function load() {
    const apiKey= `2f0dea016bed96ccfde24c9fe8409b1f`;
    let lat = props.coords.lat;

    let lon = props.coords.lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => handleResponse(data))
  console.log('url for week')
  console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    return "Loading";
  }
  if (loaded) {
    return (
        
      <div className="WeatherForecast">
        <div className="row">
       
          {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                console.log('dailyForecast')
                console.log(dailyForecast)
                  return (
                    
                      <div className="col col2 " id= '#week-forecast' key="index">
                        
                          <WeatherForecastDay value={dailyForecast} />
                      </div>
                  );
              } else {
                  return null;
              }
          })}
        </div>
      </div>
    );
  } else {
    load();
   
    return "Loading";
  }
}