import React from "react";
import FormatedDate from "./FormatedDate";
import "./Citydate.css";

export default function Weathermarkers(props){
    return( 
        <section className="weather-markers ">
    

        <div className="col2 row">
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-wind" style= {{color: '#212121'}}></i>
                <span >Wind</span>
                
               
            </div>
            <div className="col-7">
                <div className="value" id="wind">{props.value.wind} </div>
            </div>
        </div>
       
        <div className="col2 row" >
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-droplet" style= {{color: '#212121'}}></i>
                <span >Humidity</span>
                
            </div>
            <div className="col-7">
                <div className="value" id="humidity">{props.value.humidity}</div>
            </div>
            
            
        </div>
        <div className="col2 row" >
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                <span >Feels like</span>
                
            </div>
            <div className="col-7">
                <div className="value" id="feels">{props.value.feels}</div>
            </div>
            
            
        </div>
        
        
         
        <div className="col2 row">
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-sun" style= {{color: '#212121'}}></i>
                <span >Sunrise</span>
                
            </div>
            <div className="col-7">
                <div className="value" id="sunrise">{props.value.sunrise}</div>
            </div>



          
        </div>
       
        <div className="col2 row">
            <div className="col-5" id="markersLabel">
                <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                <span >Sunset</span>
                
            </div>
            <div className="col-7">
                <div className="value" id="sunset">{props.value.sunset}</div>
            </div>


            
        </div>
        
        
    </section>
    )
}