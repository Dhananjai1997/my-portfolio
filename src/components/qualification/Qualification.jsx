import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState , setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    };


  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}

                    onClick={() => toggleTab(1)}
                >
                    
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                </div>

                <div 
                
                    className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}

                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">Kurukshetra University - Kurukshetra</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2021 - 2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">B.voc - Web Development</h3>
                            <span className="qualification__subtitle">J.C. Bose University Of Science And Technology, YMCA -Faridabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2018-2021</i>
                            </div>
                        </div>

                        
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development - Angular</h3>
                            <span className="qualification__subtitle">Robozx PVT LTD</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">June 2023 - Jan 2024</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Advanced Java</h3>
                            <span className="qualification__subtitle">Solitier - Infosys</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div> */}

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer Intern</h3>
                            <span className="qualification__subtitle">CAL Info - Kurukshetra</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">June 2023 - Sept 2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Frontend Development - Training</h3>
                            <span className="qualification__subtitle">Solitier Infosys - Mohali</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Core Java - Training</h3>
                            <span className="qualification__subtitle">Cetpa PVT LTD - Noida</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2020</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
