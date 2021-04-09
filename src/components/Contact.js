import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => ( 
    <div className={`row bg-color margin-contact`}>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <h1 id="contact-me">Contacto</h1>
        </div>
        <div className="info-contact col-12 col-md-6 bg-light text-dark h3 d-flex justify-content-center flex-column m-0">
            <p>Si deseas que trabajemos en la creación de una experiencia increíble para las personas, contáctame.</p>
            <p>Estoy disponible para proyectos independientes.</p>
            <strong>Juan David Torres</strong>
            <a href="/">jdtorres8718@gmail.com</a>
            <div className="row icons-contact">
                <div className="col-1">
                   <a href="https://www.linkedin.com/in/juan-david-torres-675773173/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <div className="col-1">
                    <a href="https://github.com/JuanTorres8718" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    </div>
 )

 
export default Contact;