import React from 'react';
import tributeImg from '../../images/tribute-page.PNG';

const TributePage = ({tribute}) => ( 
    <div className="tribute-page">
        <div className={`row ${tribute} bg-light m-0`}>
            <div className="txt col-12 col-md-6">
                <p>tribute page <br />-<br/>The page is a tribute in life to Nikola Tesla and has the timeline where it shows us what he did in life</p>
            </div>
            <div className="img col-12 col-md-6 p-0">
                <img className="img-fluid" src={tributeImg} alt="tribute" />
            </div>  
            <div className="col-12 d-flex align-items-center justify-content-center height-btn">
                <div className="btn-page">
                    <a href="https://juantorres8718.github.io/Tribute-Page/" rel="noopener noreferrer" target="_blank" className="btn-danger">Click here and look the completed page "Tribute Page"</a>
                </div>
            </div>
        </div>
    </div>
 )

 
export default TributePage;