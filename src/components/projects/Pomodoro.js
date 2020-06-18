import React from 'react';
import pomodoroImg from '../../images/pomodoro.png';

const Pomodoro = ({pomodoro}) => ( 
    <div className="pomodoro">
        <div className={`row ${pomodoro} bg-light m-0`}>
            <div className="txt col-12 col-md-6">
                <p>pomodoro<br />-<br/>This page is a pomodoro digital clock, where you have a session and rest, also at the end it has an alarm where it sounds when the timer ends</p>
            </div>
            <div className="img-pomodoro col-12 col-md-6 p-0">
                <img className="img-fluid" src={pomodoroImg} alt="pomodoro" />  
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center height-btn">
                <div className="btn-page">
                    <a href="https://juantorres8718.github.io/pomodoro-Clock/" rel="noopener noreferrer" target="_blank" className="btn-danger">Click here and look the completed page "Pomodoro"</a>
                </div>
            </div>
        </div> 
    </div>
 )

 
export default Pomodoro;