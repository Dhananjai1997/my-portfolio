import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Dhananjay Yadav</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/Dhananjai1997" className="footer__social-link"  target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-github-alt"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/dhananjay-yadav-7115332b6/" className="footer__social-link"  target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-linkedin"></i>
                </a>

{/*                 <a href="https://www.behance.net/dhananjaiyadav97" className="footer__social-link"  target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-behance"></i>
                </a> */}
            </div>

            <span className="footer__copy">
                &#169; Dhananjay Yadav.  All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
