import React from 'react'
import { Link } from 'react-router-dom';

// import {today, monthDays} from './calendar'

const PartThree = props => {
    const {values, changeDate, back, submit, today, monthDays, addCurrentMonth, subCurrentMonth, handleHour, adv} = props;
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

    const startTime = new Date(values.start_time);
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
                <div className='select'>
                    <select onChange={event => handleHour(event)} value={values.start_time}>
                            <option value="">Hour</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                       </select>
                       <select onChange={event => changeDate(event, 'convert')} value={values.start_time}>
                            <option value="">am/pm</option>
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>
                       </select>
                       <select onChange={event => changeDate(event, 'minute')} value={values.start_time}>
                            <option value="">Minute</option>
                            <option value={0}>00</option>
                            <option value={15}>15</option>
                            <option value={30}>30</option>
                            <option value={45}>45</option>
                       </select>
                </div>
            
               <ul className="quest-details">
                    <li className="orders">Quest Name: {quest_name}</li>
                    <li className="orders">Category: {categoryShow(category_id)}</li>
                    <li className="orders">Details: {details}</li>
                    <li className="orders">Start Time: {`${startTime}`}</li>
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