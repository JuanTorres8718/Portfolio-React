import React from 'react';
import icon from '../images/icon.jpg';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ProjectsComponent from './projects/ProjectsComponent'
import HabilitiesComponent from './habilities/HabilitiesComponent'
import '../styles/Content.css';


const Content = () => {

    return ( 
        <div className="content-fluid font">    
            <Header 
                icon = {icon}
            />
            <main>
                <div className="title" id="title-init">
                    <span className="texto" style={{color: '#fff'}}>Hola soy Juan David Torres. <br/>
                    Desarrollador web</span>
                </div>
                <div className="container-fluid" id="about">
                <About />
                </div>
                <div className="projects container-fluid p-0 bg-light">
                    <hr className="m-0 line-hr" id="contact" />
                     <ProjectsComponent />
                    <hr className="m-0 line-hr" id="contact" />
                </div>
                <div className="abilities container-fluid bg-light p-0">
                    <HabilitiesComponent />
                    <hr className="m-0 line-hr" id="contact" />
                </div>
                <div className="container-fluid " >
                    <Contact/>   
                </div>
            </main>
            <footer className="color-d information">
                <img className="rounded mx-auto d-block" src={icon} alt="Logo" />
                <p className="text-center text-light">Todos los derechos reservados &copy; Copyright- Juan David Torres </p>
            </footer>
        </div>
     );
}
 
export default Content;