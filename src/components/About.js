import React from 'react';
import photo from '../images/foto-perfil.jpg'

const About = () =>(
    <div className={`row bg-color vh-100`}>
        <img className="img-profile" src={photo} alt="profile" />
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <h1>About</h1>
        </div>
        <div className="info-contact d-flex justify-content-center flex-column col-12 col-md-6 bg-light text-dark h3 m-0">
            <p>I am a front-end designe from Medellín</p>
            <p>The programming is something that i like
                also, I like to take on new challenges and learn from them</p>
            <strong>Front-End</strong>
            <p>Starting with basic websites where i learn use HTML,CSS and JavaScript in the SENA, then two months ago I won a scholarship which is a reactJS focused front-end web development bootcamp</p>
        </div>
    </div>    
  )
 
export default About;