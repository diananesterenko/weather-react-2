import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDegree from "./WeatherDegree";

export default function Citydate(props){
    return( 
    <section class="city-date">
    <h2 id="city">{props.value.cityVal}</h2>
    <div class="row city-date-main">
        <div class="col-5 iconAndDiscr" >
            
            <WeatherIcon
              className="iconmain2"
              value={props.value.icon}
              size={250}
              size2={150}
            />
            <p id="description">{props.value.description}</p>
        </div>
        <div class="col-1"></div>
        <div class="col-6 weatherdate2colmn">
            <div class="date">
            <div class="row degree-line" >
                <WeatherDegree celsius={props.value.temp} />
               
            </div> 
                <div class="row">
                <div class="row"><p id="day"></p></div>        
                <FormatedDate date={props.value.date} />
                
                
                </div>
           
            </div>
            <div class="tempLowHigh">
                <div class="row">
                    
                    <div class="col-5">
                       <span id="lowTemp">7</span> {props.value.lowTemp}<span> °</span>
                       <p>Low</p>
                    </div>
                    <div class="col-5">
                        <span id="highTemp">17</span> {props.value.highTemp} <span> °</span>
                        <p>High</p>
                     </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
)
}