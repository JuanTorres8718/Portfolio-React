import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Header = ({icon}) => ( 
    <div className="fixed-top">
        <nav className="navbar navbar-expand-lg color-d">
            <a className="navbar-brand" href="#title-init"><img src={icon} width="70" className="d-inline-block align-top" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon style={{color: 'white'}} icon={faGripLines} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                        <a className="nav-link texto" href="#about">Acerca</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link texto" href="#project">Proyectos</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link texto" href="#abilities">Habilidades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link texto" href="#contact-me">Contacto</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
    
 )

 
export default Header;