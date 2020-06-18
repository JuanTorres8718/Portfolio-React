import React from 'react';
import calculatorImg from '../../images/calculadora.png';

const Calculator = ({calculator}) => (  
    <div className="calculator">
        <div className={`row ${calculator} bg-light m-0`}>
            <div className="txt col-12 col-md-6">
                <p>calculator<br />-<br/>The page is a simple calculator with the basic operations</p>
            </div>
            <div className="col-12 col-md-6 p-0">
                <div className="img-calculator ">
                    <img className="img-fluid" src={calculatorImg} alt="calculator" />
                </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center height-btn">
                <div className="btn-page">
                    <a href="https://heroku-fcc-calculator.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn-danger">Click here and look the completed page "Calculator"</a>
                </div>
            </div>
        </div>
    </div>
)

 
export default Calculator;