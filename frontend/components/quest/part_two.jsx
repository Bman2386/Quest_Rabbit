import React from 'react';
import { Link } from 'react-router-dom';

const PartTwo = props => {
    const { values, select, back, adv, selectAdv, adv1, reviews} = props;
    const logo = window.logo;

    const isElite = (elite) =>{
        if (elite === true){
            return 'Elite Adventurer'
        } else {
            return ''
        }
    }

    const list = () => {
        const names = adv.map(ad => 
            <div className="hero-container" key={ad.id}>
              <p  className="p">{ad.username}</p>
            <p className="p">{isElite(ad.elite)}</p>
            <p className="p">Rating: {ad.avg_rating}</p> 
            <p className="p">Total Reviews: {ad.total_ratings}</p>
            <hr/>
            <p className="p">How I can Help:</p>
            <p className="p">{ad.pitch}</p> 
            <button onClick={() => selectAdv(ad.id)}>See Reviews</button>
              <button value={values.adventurer_id} type="submit" className="select2" onClick={() => select(ad.id)}>Select and Continue</button>
           </div>
        
        ) 

        const allReviews = () => {
        
           const allR= ()=>{
               if(reviews.length > 0 && adv1){
                   debugger
                const num = reviews.map(review =>{
                    const arr = [];
                    if (review.extract.adventurer_id === adv1.id){
                        arr.push(review)
                    }
                    return arr
                });
                if (num.length > 0){
                 
                    const advReviews = num.map(review =>
                  <div key={review[0].extract.id}>
                    <div>Review By: {`${review[0].extract.user_id}`}</div>
                    <div>Rating: {`${review[0].extract.rating}`}</div>
                    <div>body: {`${review[0].extract.body}`}</div>  
                  </div>
            )
            return advReviews
        } else {
            return (
                <div>No Reviews Yet</div>
            )
        }}} 
            if (reviews.length > 0){
             
            return allR();
            } else {
                return (
                    <div>No Reviews Yet</div>
                )
            }
            
            
        } 
        const adReviews = () =>{
           
            return (
                <div>
                    Adventurer info:
            <div>{`${adv1.username}`}</div>
            <div>{`${adv1.pitch}`}</div>
            <button value={values.adventurer_id} type="submit" className="select2" onClick={() => select(adv1.id)}>Select and Continue</button>
                    <div>Reviews:</div>
                    {allReviews()}
                </div>
            )
                
        }
        return values.review === true ? adReviews() : names
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