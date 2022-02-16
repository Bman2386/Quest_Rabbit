import React from 'react';
import { Link } from 'react-router-dom';

const Session =({loginUser, signUpUser, submitQuest, error, values, back, adv, id, session, handleChange, setFormType, loginGuest})=> {
    const { quest_name, category_id, details, start_time, adventurer_id} = values;
    const {username, password, realm, starSign, familyCrest, formType} = session
    
    const formPhoto = window.formPhoto;

    const form = () => {
        if (formType === 'login'){
            return (
                <div className="session-form">
                    <img src={formPhoto} className="form-photo" />
                    <form className='inter-form'>
                    {id ? setFormType('submit') : ''}
                    <div>Login Form</div>
                      {error ? renderError() : ''}
                    <input
                    value={username}
                    onChange={handleChange('username')}
                    placeholder='username'
                    />
                    <input 
                    value={password}
                    type='password'
                    onChange={handleChange('password')}
                    placeholder='password'
                    />
                    <button onClick={(e)=>loginUser(e)}>Log In</button>
                    <button onClick={(e)=>loginGuest(e)}>Demo as Guest</button>
                    <button onClick={(e)=>setFormType('sign up',e)}>Change to Sign Up Form</button>
                </form>
                </div>
                
            )
        } else if (formType === 'submit') {
            return (
                <div className='quest-name'>
                    <div className='back'>
                        <button onClick={() => back()}>Back</button><br />
                    </div>
                   <ul className = "quest-details" >
                        <li className="label">Your Quest</li>
                        <li className="orders">Quest Name: {quest_name}</li>
                        <li className="orders">Category: {categoryShow(category_id)}</li>
                        <li className="orders">Details: {details}</li>
                        <li className="orders">Start Time: {`${start_time}`}</li>
                        <li className="orders">Adventurer: {advShow(adventurer_id)}</li>
                    </ul >
                
                <Link to='/' className='button-submit' onClick={()=>submitQuest()}>Submit</Link> 
                </div>
                
            )
        }
        else {
            return (
                <div className="session-form">
                    <img src={formPhoto} className="form-photo" />
                    <form className='inter-form'>
                    {error ? renderError() : ''}
                    {id ? setFormType('submit') : ''}
                    <input
                        value={username}
                        onChange={handleChange('username')}
                        placeholder='username'
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={handleChange(password)}
                        placeholder='password'
                    />
                    <input 
                        value={familyCrest}
                        onChange={handleChange('familyCrest')}
                        placeholder='Family Crest ex, Smith'
                    />
                    <input 
                        value={realm}
                        onChange={handleChange('realm')}
                        placeholder='Realm ex, Earth'
                    />
                    <input 
                        value={starSign}
                        onChange={handleChange('starSign')}
                        placeholder='Star Sign ex, Libra'
                    
                    />
                    <button onClick={(e)=>signUpUser(e)}>Signup</button>
                    <button onClick={(e)=>setFormType('login', e)}>Change to Login Form</button>
                </form>
                </div>
                
            )
        }
    }

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
   

    const renderError = () => {
        return(
        <ul>
            {error.map((e, i) => (
                <li
                    key={`error-${i}`}
                    className="error"
                >
                    {e}
                </li>
            ))}
        </ul>
      );
    }


    return (
        <div className='quest-container'>
            <div className='top-bar'>
                <Link to='/' >
                    <img src={logo} className="logo2" />
                </Link>
                <div className='bars'>
                    <ul className='bar1'>
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
                </div>
            </div>
            <hr />
            {formType ? form(): 
            <div className="session-form">
                <img src={formPhoto} className="form-photo" />
                <form className="inter-form" id="form1">
                <button className="btn-1" value='login' onClick={handleChange('formType')}>Log In</button>
                <button className="btn-2" value='sign up'onClick={handleChange('formType')}>Sign Up</button>
                </form> 
            </div>
            }
        </div>
    )
};

export default Session;