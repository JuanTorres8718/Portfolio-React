import React from 'react';
import technicalImg from '../../images/technical-documentation.PNG';
import tributeImg from '../../images/tribute-page.PNG';
import pomodoroImg from '../../images/pomodoro.png';
import calculatorImg from '../../images/calculadora.png';
import gitnnovaImg from '../../images/gitnnova.png';
import palindromeImg from '../../images/palindrome.png';
import randomImg from '../../images/random.png';
import surveyFormImg from '../../images/survey-from.png';
import portfolioVanillaImg from '../../images/portfolio-vanilla.png';
import markdownImg from '../../images/markdown.png';
import eduappImg from '../../images/eduapp.png';


const ProjectsComponent = () => {
    return ( 
        <div className="row col-11 m-auto pt-4">
            <div className="col-12 text-center">
                <h2 className="text-dark" id="project">Some Projects</h2>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/pomodoro-Clock/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={pomodoroImg} className="img-cards" alt="pomodoro" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pomodoro</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://eduapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={eduappImg} className="img-cards" alt="eduapp" />
                        <div className="card-body text-center">
                            <h5 className="card-title">EduApp</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://gitinnova.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={gitnnovaImg} className="img-cards" alt="gitinnova" />
                        <div className="card-body text-center">
                            <h5 className="card-title">GitInnova(API GitHub)</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://heroku-markdown-previewer.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={markdownImg} className="img-cards" alt="markdown" />
                        <div className="card-body text-center">
                            <h5 className="card-title">MarkDown</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://heroku-random-quote.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={randomImg} className="img-cards" alt="random" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Random-quote</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://heroku-fcc-calculator.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={calculatorImg} className="img-cards" alt="calculator" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Calculator</h5>
                        </div>
                    </div>
                </a>)
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/Technical-Documentation/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={technicalImg} className="img-cards" alt="technical" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Technical Documentation</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/Survey-Form/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={surveyFormImg} className="img-cards" alt="survey" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Survey Form</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/Tribute-Page/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={tributeImg} className="img-cards" alt="tribute" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Tribute Page</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/Palindrome-Checker/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={palindromeImg} className="img-cards" alt="palindrome" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Palindrome</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://juantorres8718.github.io/Portfolio-Webpage/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={portfolioVanillaImg} className="img-cards" alt="portfolio" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Portfolio vanilla</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default ProjectsComponent;