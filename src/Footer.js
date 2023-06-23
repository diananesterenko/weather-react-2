import React, { useState } from "react";
import "./Footer.css";
export default function Footer() {
 
    return(
        <footer>
            <div className='radar'>
         <a href='https://www.accuweather.com/ru/ua/national/weather-radar'  target="_blank"
            rel="noopener noreferrer">Weather world radar</a>
            </div>
            <span className='footertxt'>
        This project was coded by
     
          Diana Nesterenko
        
        and is{" "}
        </span>
        <a
          href="https://github.com/diananesterenko/weather-react-2"
          target="_blank"
          rel="noopener noreferrer"
        >
            <span className='footertxt'>
          open-sourced on GitHub
          </span>
        </a>{" "}
        <span className='footertxt'>
        and{" "}
        </span>
        <a
          href="https://suspicious-beaver-111c4d.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
             <span className='footertxt'>
          hosted on Netlify
          </span>
        </a>
      </footer>
    );
}