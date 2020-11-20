import React from 'react';
import { Link } from 'react-router-dom';

const PartTwo = props => {
    const { values, select, back, adv } = props;
    const logo = window.logo;
    const list = () => {
        const names = adv.map(ad => 
            <div className="hero-container" key={ad.id}>
              <p  className="p">{ad.username}</p>
              <p className="p">(reviews coming soon)</p>  
              <button value={values.adventurer_id} type="submit" className="select2" onClick={() => select(ad.id)}>Select</button>
           </div>
        
        ) 
        return names
    }

    return (
        <div className="quest-container">
             <ul className='bar1'>
             <Link to='/' className="home">
                    <img src={logo} className="logo"/>
                </Link>
                <li className='grey-out'>1</li>
                <div className='lineN'></div>
                <li className='currentN'>2</li>
                <div className='lineN'></div>
                <li className='grey-out'>3</li>
            </ul>
            <ul className='bar2'>
                <li className='line'>Describe your Quest</li>
                <li className='current'>Browse Adventurers</li>
                <li className='line'>Choose date {'&'} Time</li>
            </ul>
            <hr/>
            <button onClick={back} className="back-button">Back</button>
            {list()}
            
        </div>
    )
}

export default PartTwo;