import React from 'react';
import { Link } from 'react-router-dom';

const PartOne = (props) => {
    const {values, handleChange, next} = props;
    const logo = window.logo;

    return(
        <div className="quest-container">
             
            <ul className='bar1'>
                <Link to='/' className="home">
                    <img src={logo} className="logo"/>
                </Link>
                <li className='currentN'>1</li>
                <div className='lineN'></div>
                <li className='grey-out'>2</li>
                <div className='lineN'></div>
                <li className='grey-out'>3</li>
            </ul>
            <ul className='bar2'>
                <li className='current'>Describe your Quest</li>
                <li className='line'>Browse Adventurers</li>
                <li className='line'>Choose date {'&'} Time</li>
            </ul>
            <hr/>
            <div className="quest-form">
                <div className="quest-name">
                  <label htmlFor="quest_name" className="label">
                Quest Name
            </label>
            <input 
            type="text"
            value={values.quest_name}
            onChange={handleChange('quest_name')}
            className="input"
            >
            </input>  
                </div>
            <div className="quest-name">
                <label htmlFor="Category" className="label">Category of your Quest:</label>
                <select className="select" name={values.category_id} onChange={handleChange('category_id')}>
                        <option value="1" >Fetch</option>
                        <option value="2" >Craft</option>
                        <option value="3" >Escort</option>
                        <option value="4" >Slay</option>
                </select>    
            </div>
            <div className="quest-name">
                <label htmlFor="details" className="label">Details:</label>
                <p className="p">Start the conversation by telling your adventurer details about your quest.
                    Be sure to specify things like magic being required to complete the quest.
                </p>
                <textarea 
                        value={values.details}
                        className="textarea"
                        onChange={handleChange('details')}
                        />
            </div>    
           <br />
            <button onClick={() => next()}>Next</button>
            </div>
            
        </div>
    )
}

export default PartOne;