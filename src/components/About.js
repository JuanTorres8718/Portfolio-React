import React from 'react';
import photo from '../images/foto-perfil.jpg'

const About = () =>(
    <div className={`row bg-color height-about`}>
        <img className="img-profile" src={photo} alt="profile" />
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <h1>Acerca</h1>
        </div>
        <div className="info-contact d-flex justify-content-center flex-column col-12 col-md-6 bg-light text-dark h3 m-0">
            <p className="margin-p">Soy un desarrollador web, resido en Medellín</p>
            <p>Me encanta la programación, asumir nuevos desafíos y aprender de ellos.</p>
            <p>Inicié mi pasión comenzando con sitios web básicos donde aprendí a usar HTML, CSS y JavaScript en el SENA, hace dos meses gané una beca en Academia Geek, un bootcamp intensivo en desarrollo web front-end enfocado en reactJS.</p>
        </div>
    </div>    
  )
 
export default About;