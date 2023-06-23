
import "./Footer.css";


export default function Footer() {
 
    return(
        <footer>
           <div>
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
            <span className='footerlnk '>
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
             <span className='footerlnk'>
          hosted on Netlify
          </span>
          
        </a>
        
        </div>
        
        <div className='socials'>
        <p> @- All rights reserved</p>
        <a href="https://instagram.com/di_slavovna?igshid=YmMyMTA2M2Y="
          ><img  src='https://img.icons8.com/?size=512&id=32292&format=png' alt="instagram"/>
          </a>
        <a href="https://www.linkedin.com/in/diana-nesterenko-4bb532221/"
          ><img  src='https://img.icons8.com/?size=512&id=447&format=png' alt="linkedin"/>
          </a>
        <a href="https://t.me/di_slavovna"
          ><img  src='https://img.icons8.com/?size=512&id=9R1sV3QvY18K&format=png' alt="telegram"/>
          </a>
        </div>

      </footer>
    );
}