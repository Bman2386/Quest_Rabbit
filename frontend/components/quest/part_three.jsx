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
    {label: "12pm", value:12},
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
    const {values, handleChange, back, submit, today, monthDays, addCurrentMonth, subCurrentMonth, handleHour, adv} = props;
    const logo = window.logo;
    const date = today.date;
    const month = today.month;
    const days = monthDays();
    const { quest_name, category_id, details, start_time, adventurer_id } = values

    const categoryShow = (category) => {
        switch (category) {
            case '1':
            return 'Fetch';
            case '2':
            return 'Craft';
            case '3':
            return 'Escort';
            case '4':
            return 'Slay';
            default:
            return 'Need to select Category'
        }
    }

    const advShow = (adventurer) => {
        const first = adv[0].id;
        const name = adv[adventurer - first].username;
        return (
        name
        )
    }

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
            <button onClick={() => back()}>Back</button><br />
            <p className="orders">Select a date/time to start your quest</p>
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
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tues</div>
                                <div>Wed</div>
                                <div>Thur</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div className="days">
                                {days}
                            </div>
               </div>
            <div className="quest-name">
                <p className="p">Start Time:</p> 
            <Select 
            className="selected-hour" 
            options={Hours} 
            placeholder = "Select an Hour"
            name={values.start_time} 
            onChange={(event) => handleHour(event)}/>
               <ul className="quest-details">
                    <li className="orders">Quest Name: {quest_name}</li>
                    <li className="orders">Category: {categoryShow(category_id)}</li>
                    <li className="orders">Details: {details}</li>
                    <li className="orders">Start Time: {`${start_time}`}</li>
                    <li className="orders">Adventurer: {advShow(adventurer_id)}</li>
               </ul>
               <Link to='/' className='button-submit' onClick={() => submit()}>Submit</Link>
            </div>
            
        </div>
       
        </div>
    )

}

export default PartThree;
// Fri, 13 Nov 2020 23:26:35 UTC +00:00