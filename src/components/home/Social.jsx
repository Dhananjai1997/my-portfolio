import React from "react"
import "./home.css"

const Social = () =>{
    return(
        <div className="home__social">
    
            <a href="https://github.com/Dhananjai1997" className="home__social-icon"  target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/dhananjay-yadav-7115332b6/" className="home__social-icon"  target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

{/*             <a href="https://www.behance.net/dhananjaiyadav97" className="home__social-icon"  target="_blank" rel="noopener noreferrer">
                <i className="uil uil-behance"></i>
            </a> */}

        </div>
    )
}

export default Social;
