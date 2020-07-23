import React from 'react';
import bootstrapImg from '../../images/bootstrap.png'
import cssImg from '../../images/css.png'
import gitImg from '../../images/git.png'
import htmlImg from '../../images/html.png'
import javascriptImg from '../../images/javascript.png'
import laravelImg from '../../images/laravel.png'
import mysqlImg from '../../images/mysql.png'
import phpImg from '../../images/php.png'
import reactImg from '../../images/react.png'



const HabilitiesComponent = () => {
    return ( 
        <div className="row col-11 m-auto pt-4">
            <div className="col-12 text-center">
                <h2 className="text-dark" id="abilities">Abilities</h2>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={htmlImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={cssImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={javascriptImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={reactImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={laravelImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={bootstrapImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={phpImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={gitImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <div className="card">
                    <img src={mysqlImg} className="img-cards" alt="pomodoro" />
                </div>
            </div>
        </div>
     );
}
 
export default HabilitiesComponent;