import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';

const Hours = [
    {label: "1am", value:1},
    {label: "2am", value:2},
    {label: "3am", value:3},
    {label: "4am", value:4},
    {label: "5am", value:5},
    {label: "6am", value:6},
    {label: "7am", value:7},
    {label: "8am", value:8},
    {label: "9am", value:9},
    {label: "10am", value:10},
    {label: "11am", value:11},
    {label: "12am", value:12},
    {label: "1pm", value:13},
    {label: "2pm", value:14},
    {label: "3pm", value:15},
    {label: "4pm", value:16},
    {label: "5pm", value:17},
    {label: "6pm", value:18},
    {label: "7pm", value:19},
    {label: "8pm", value:20},
    {label: "9pm", value:21},
    {label: "10pm", value:22},
    {label: "11pm", value:23},
    {label: "12am", value:0}
];
// import {today, monthDays} from './calendar'

const PartThree = props => {
    const {values, handleChange, back, submit, today, monthDays, addCurrentMonth, subCurrentMonth, handleHour} = props;
    const logo = window.logo;
    const date = today.date;
    const month = today.month;
    const days = monthDays();
    const { quest_name, category_id, details, start_time, adventurer_id } = values

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
                                <button onClick={() => subCurrentMonth()}><i className="fa fa-angle-left"></i></button>
                                <div className="date">
                                        <h1>{month}</h1>
                                        <p>{`${date}`}</p>
                                </div>
                                <button onClick={() => addCurrentMonth()}><i className="fa fa-angle-right"></i></button>  
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
            <div>
            <Select 
            className="selected-hour" 
            options={Hours} 
            placeholder = "Select an Hour"
            name={values.start_time} 
            onChange={(event) => handleHour(event)}/>
            </div>
           </div>
           <div>
               <ul>
                    <li>Quest Name: {quest_name}</li>
                    <li>Category: {category_id}</li>
                    <li>Details: {details}</li>
                    <li>Start Time: {`${start_time}`}</li>
                    <li>Adventurer: {adventurer_id}</li>
               </ul>
           </div>
            <button onClick={() => back()}>Back</button><br />
            <br/>
            <Link to='/' className='button' onClick={() => submit()}>Submit</Link>
        </div>
    )

}

export default PartThree;
// Fri, 13 Nov 2020 23:26:35 UTC +00:00