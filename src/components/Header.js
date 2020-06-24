import React from 'react';


const Header = ({icon}) => ( 
    <div className="fixed-top">
        <nav className="navbar color-d navbar-expand-lg d-flex justify-content-between">
            <a className="navbar-brand" href="#title-init"><img src={icon} width="70" className="d-inline-block align-top" alt=""/></a>
            <div className="justify-content-end mr-3 " id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                        <a className="nav-link texto" href="#about">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link texto" href="#project">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link texto" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
 )

 
export default Header;