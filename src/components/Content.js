import React,{useState, useEffect} from 'react';
import icon from '../images/icon.jpg';
import Header from './Header';
import About from './About';
import TributePage from './projects/TributePage';
import Technical from './projects/Technical';
import Calculator from './projects/Calculator';
import Pomodoro from './projects/Pomodoro';
import Contact from './Contact';
import '../styles/Content.css';


const Content = () => {

    const [classCard, setClassCard] = useState({
            about: 'hidden',
            contact: 'hidden',
            tribute: 'hidden',
            technical: 'hidden',
            calculator: 'hidden',
            pomodoro: 'hidden'
    });

    const handleAnimation = () => {      
        if (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop< 700) {           
         setClassCard({about: 'about'}) 
        }else if(document.documentElement.scrollTop > 700 && document.documentElement.scrollTop< 1300){
            setClassCard({
                about: 'about',
                tribute: 'visible'}) 
        }else if(document.documentElement.scrollTop > 1300 && document.documentElement.scrollTop< 2050){
            setClassCard({
                about: 'about',
                tribute: 'visible',
                technical: 'visible'}) 
        }else if(document.documentElement.scrollTop > 2050 && document.documentElement.scrollTop< 2780){
            setClassCard({
                about: 'about',
                tribute: 'visible',
                technical: 'visible',
                calculator: 'visible'}) 
        }else if(document.documentElement.scrollTop > 2780 && document.documentElement.scrollTop< 3500){
            setClassCard({
                about: 'about',
                tribute: 'visible',
                technical: 'visible',
                calculator: 'visible',
                pomodoro: 'visible'})
        }else if(document.documentElement.scrollTop > 3500 && document.documentElement.scrollTop< 5000){
            setClassCard({
                about: 'about',
                tribute: 'visible',
                technical: 'visible',
                calculator: 'visible',
                pomodoro: 'visible',
                contact: 'contact'}) 
        }else if(document.documentElement.scrollTop <100){
            setClassCard({
                about: 'hidden',
                contact: 'hidden',
                tribute: 'hidden',
                technical: 'hidden',
                calculator: 'hidden',
                pomodoro: 'hidden'
            }) 
        }
        
    };

    useEffect(() => {
        window.onscroll = () => handleAnimation(); 
    }, [])

    return ( 
        <div className="content-fluid font">    
            <Header 
                icon = {icon}
            />
            <main>
                <div className="title" id="title-init">
                    <span className="texto" style={{color: '#fff'}}>Hey i´m Juan David Torres. <br/>
                    i´m front-end designer</span>
                </div>
                <div className="container-fluid" id="about">
                <About 
                    about= {classCard.about}
                />
                </div>
                <div className="projects container-fluid p-0">
                    <div className="d-flex align-items-center justify-content-center bg-dark height-project" id="project">
                        <h1 className=" m-0">Work</h1>
                    </div>
                    <TributePage 
                        tribute= {classCard.tribute}
                    />
                   <hr className="m-0 line-hr" />
                    <Technical 
                        technical= {classCard.technical}
                    />
                   <hr className="m-0 line-hr" />
                    <Calculator 
                        calculator= {classCard.calculator}
                    />
                   <hr className="m-0 line-hr" />
                    <Pomodoro 
                        pomodoro= {classCard.pomodoro}
                    />
                   <hr className="m-0 line-hr" />
                </div>
                <div className="container-fluid " id="contact">
                    <Contact 
                        contact= {classCard.contact}
                    />   
                </div>
            </main>
            <footer className="color-d information">
                <img className="rounded mx-auto d-block" src={icon} alt="Logo" />
                <p className="text-center text-light">All rights reserved &copy; Copyright- Juan David Torres </p>
            </footer>
        </div>
     );
}
 
export default Content;