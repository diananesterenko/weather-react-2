import React from "react";


export default function Citydate(props){
    return( 
        <section class="weather-markers ">
    

        <div class="col2 row">
            <div class="col-5" id="markersLabel">
                <i class="fa-solid fa-wind" style="color: #212121;"></i>
                <span >Wind</span>
                
               
            </div>
            <div class="col-7">
                <div class="value" id="wind">3</div>
            </div>
        </div>
       
        <div class="col2 row" >
            <div class="col-5" id="markersLabel">
                <i class="fa-solid fa-droplet" style="color: #212121;"></i>
                <span >Humidity</span>
                
            </div>
            <div class="col-7">
                <div class="value" id="humidity">0</div>
            </div>
            
            
        </div>
        <div class="col2 row" >
            <div class="col-5" id="markersLabel">
                <i class="fa-solid fa-temperature-three-quarters" style="color: #212121;"></i>
                <span >Feels like</span>
                
            </div>
            <div class="col-7">
                <div class="value" id="feels">0</div>
            </div>
            
            
        </div>
        
        
         
        <div class="col2 row">
            <div class="col-5" id="markersLabel">
                <i class="fa-solid fa-sun" style="color: #212121;"></i>
                <span >Sunrise</span>
                
            </div>
            <div class="col-7">
                <div class="value" id="sunrise">05:27</div>
            </div>



          
        </div>
       
        <div class="col2 row">
            <div class="col-5" id="markersLabel">
                <i class="fa-regular fa-moon" style="color: #212121;"></i>
                <span >Sunset</span>
                
            </div>
            <div class="col-7">
                <div class="value" id="sunset">21:32</div>
            </div>


            
        </div>
        
        
    </section>
    )
}