import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDegree from "./WeatherDegree";
import './WeatherDegree.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Citydate(props){
    return( 
    <section className="city-date">
    <h2 id="city">{props.value.cityVal}</h2>
    <div className="row city-date-main">
        <div className="col-5 iconAndDiscr" >
            
            <WeatherIcon
             classNameName="iconmain2"
             id='weather-icon'
              value={props.value.icon}
              size={250}
              size2={150}
            />
            <p id="description">{props.value.description}</p>
        </div>
        <div className="col-1"></div>
        <div className="col-6 weatherdate2colmn">
            <div className="date">
            <div className="row degree-line" >
                <WeatherDegree celsius={props.value.degrees} />
               
            </div> 
                <div className="row">
                <div className="row"><p id="day"></p></div>        
                <FormatedDate date={props.value.date} />
                
                
                </div>
           
            </div>
            <div className="tempLowHigh">
                <div className="row">
                    
                    <div className="col-5">
                       <span id="lowTemp">{props.value.lowTemp}</span> <span> °</span>
                       <p>Low</p>
                    </div>
                    <div className="col-5">
                        <span id="highTemp"></span> {props.value.highTemp} <span> °</span>
                        <p>High</p>
                     </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
)
}