import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const Session =({login, signUp, submit, clear, error, values, back, adv, id})=> {
     const { quest_name, category_id, details, start_time, adventurer_id, creator_id } = values
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [realm, setRealm] = useState('');
    const [starSign, setStarSign] = useState('');
    const [familyCrest, setFamilyCrest]= useState('');
    const [formType, setFormType] = useState(null);

    const history = useHistory();
    const formPhoto = window.formPhoto;

    const submitQuest= () => {
        clear();
        submit();
        history.push('/');
    }
    

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
                    onChange={e=> setUserName(e.target.value)}
                    placeholder='username'
                    />
                    <input 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder='password'
                    />
                    <button onClick={loginUser}>Log In</button>
                    <button onClick={loginGuest}>Demo as Guest</button>
                </form>
                </div>
                
            )
        } else if (formType === 'submit') {
            return (
                <div className='quest-name'>
                   <ul className = "quest-details" >
                        <li className="label">Your Quest</li>
                        <li className="orders">Quest Name: {quest_name}</li>
                        <li className="orders">Category: {categoryShow(category_id)}</li>
                        <li className="orders">Details: {details}</li>
                        <li className="orders">Start Time: {`${start_time}`}</li>
                        <li className="orders">Adventurer: {advShow(adventurer_id)}</li>
                    </ul >
                <button onClick={back}>Back</button>
                <button className='button-submit' onClick={submitQuest}>Submit</button> 
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
                    <div>Signup Form</div>
                    <input
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                        placeholder='username'
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='password'
                    />
                    <input 
                        value={familyCrest}
                        onChange={e=>setFamilyCrest(e.target.value)}
                        placeholder='Family Crest ex, Smith'
                    />
                    <input 
                        value={realm}
                        onChange={e=> setRealm(e.target.value)}
                        placeholder='Realm ex, Earth'
                    />
                    <input 
                        value={starSign}
                        onChange={e=> setStarSign(e.target.value)}
                        placeholder='Star Sign ex, Libra'
                    
                    />
                    <button onClick={signUpUser}>Signup</button>
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
    const loginUser = () => {
        const user = {
            username: username,
            password: password
        }
        login(user);
    }

    const loginGuest = () => {
        login({username: 'Guest', password: 'hunter12'}); 
    }

    const signUpUser = () => {
        const user = {
            username: username,
            password: password,
            adventurer: false,
            avg_rating: 0,
            total_ratings: 0,
            elite: false,
            pitch: 'null',
            family_crest: familyCrest,
            realm:  realm,
            star_sign: starSign
        }
        signUp(user);
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
        <div>
            {formType ? form(): 
            <div className="session-form">
                <img src={formPhoto} className="form-photo" />
                <form className="inter-form" id="form1">
                <button className="btn-1" onClick={()=> setFormType('login')}>Log In</button>
                <button className="btn-2" onClick={()=> setFormType('sign up')}>Sign Up</button>
                </form> 
            </div>
            }
        </div>
    )
};

export default Session;