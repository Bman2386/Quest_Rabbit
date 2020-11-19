import React from 'react'
import { Link } from 'react-router-dom';
import Calendar from './calendar'
const PartThree = props => {
    const {values, handleChange, back, submit} = props;
    const logo = window.logo;

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
            <p>Select a time to start your quest</p>
            <table className="calendar">
                <tr>
                    <th className="p">Monday</th>
                    <th className="p">Tuesday</th>
                    <th className="p">Wednesday</th>
                    <th className="p">Thursday</th>
                    <th className="p">Friday</th>
                    <th className="p">Saturday</th>
                    <th className="p">Sunday</th>
                </tr>

            </table>
            <button onClick={() => back()}>Back</button><br />
            <button onclick={() => submit()}>Submit</button>
        </div>
    )

}

export default PartThree;
// Fri, 13 Nov 2020 23:26:35 UTC +00:00