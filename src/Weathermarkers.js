import React from "react";

import "./Weathermarkers.css";

export default function Weathermarkers(props){
    return( 
        <section className="weather-markers ">
    

        <div className="col2 row">
            <div className="col-5" id="markersLabel">
      
                
                <span > Wind <img className='wind' src='https://img.icons8.com/?size=512&id=105029&format=png' alt="wind"/></span>
                
                
               
            </div>
            <div className="col-7">
                <div className="value" id="wind">{props.value.wind} </div>
            </div>
        </div>
       
        <div className="col2 row" >
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-droplet" style= {{color: '#212121'}}></i>
                <span >Humidity<img className='humidity' src='https://img.icons8.com/?size=512&id=sqkiO6Akiuxj&format=png' alt="humidity"/></span>
                
            </div>
            <div className="col-7">
                <div className="value" id="humidity">{props.value.humidity}</div>
            </div>
            
            
        </div>
        <div className="col2 row" >
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                <span >Feels like <img className='feels' src='https://img.icons8.com/?size=512&id=37802&format=png' alt="feels"/></span>
                
            </div>
            <div className="col-7">
                <div className="value" id="feels">{props.value.feels}</div>
            </div>
            
            
        </div>
        
        
         
        <div className="col2 row">
            <div className="col-5" id="markersLabel">
                <i className="fa-solid fa-sun" style= {{color: '#212121'}}></i>
                <span >Sunrise <img className='sunrise' src='https://img.icons8.com/?size=512&id=lDDjS4BvtYQu&format=png' alt="sunrise"/></span>
                
            </div>
            <div className="col-7">
                <div className="value" id="sunrise">{props.value.sunrise}</div>
            </div>



          
        </div>
       
        <div className="col2 row">
            <div className="col-5" id="markersLabel">
                <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                <span >Sunset <img className='sunrise' src='https://img.icons8.com/?size=512&id=3455&format=png' alt="sunset"/></span>
                
            </div>
            <div className="col-7">
                <div className="value" id="sunset">{props.value.sunset}</div>
            </div>


            
        </div>
        
        
    </section>
    )
}