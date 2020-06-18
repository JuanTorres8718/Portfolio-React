import React from 'react';
import technicalImg from '../../images/technical-documentation.PNG';

const Technical = ({technical}) => ( 
    <div className="technical-documentation">
        <div className={`row ${technical} bg-light m-0`}>
            <div className="txt col-12 col-md-6">
                <p>technical documentation<br />-<br/>The page is a documentation where it explains what CSS is, how is its syntax and implementation in HTML</p>
            </div>
            <div className="img col-12 col-md-6 p-0">
                <img className="img-fluid" src={technicalImg} alt="technical" />
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center height-btn">
                <div className="btn-page">
                    <a href="https://juantorres8718.github.io/Technical-Documentation/" rel="noopener noreferrer" target="_blank" className="btn-danger">Click here and look the completed page "Technical Documentation"</a>
                </div>
            </div>
        </div>
    </div>
 )

 
export default Technical;