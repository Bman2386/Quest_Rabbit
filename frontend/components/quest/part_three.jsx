import React from 'react'
import { Link } from 'react-router-dom';
import {today, monthDays} from './calendar'

const PartThree = props => {
    const {values, handleChange, back, submit} = props;
    const logo = window.logo;
    const date = today.date;
    const month = today.month;
    const days = monthDays()
    
    // debugger
    
    return (
        
        <div className="quest-container">
            <ul className='bar1'>
                <Link to='/' className="home">
                    <img src={logo} className="logo"/>
                </Link>
                <li className='grey-out'>1</li>
                <div className='lineN'></div>
                <li className='grey-out'>2</li>
                <div className='lineN'></div>
                <li className='currentN'>3</li>
            </ul>
            <ul className='bar2'>
                <li className='line'>Describe your Quest</li>
                <li className='line'>Browse Adventurers</li>
                <li className='current'>Choose date {'&'} Time</li>
            </ul>
            <hr/>
            <p className="p">Select a date/time to start your quest</p>
           <div className="cal-container">
               <div className="calendar">
                <div className="month">
                                <button><i className="fa fa-angle-left"></i></button>
                                <div className="date">
                                        <h1>{month}</h1>
                                        <p>{`${date}`}</p>
                                </div>
                                <button><i className="fa fa-angle-right"></i></button>  
                            </div>
                            <div className="weekdays">
                                <div>Sunday</div>
                                <div>Monday</div>
                                <div>Tuesday</div>
                                <div>Wednesday</div>
                                <div>Thursday</div>
                                <div>Friday</div>
                                <div>Saturday</div>
                            </div>
                            <div className="days">
                                {days}
                            </div>
               </div>
               
               {/* <div>{days()}</div> */}
           </div>
            <button onClick={() => back()}>Back</button><br />
            <button onClick={() => submit()}>Submit</button>
        </div>
    )

}

export default PartThree;
// Fri, 13 Nov 2020 23:26:35 UTC +00:00