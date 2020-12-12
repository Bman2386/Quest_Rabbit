import React from 'react';
import { Link } from 'react-router-dom';

const PartTwo = props => {
    const { values, select, back, selectAdv, adv, reviews} = props;
    const logo = window.logo;
    const star = window.star;
    const hercules = window.hercules;
    const isaac_newton = window.isaac_newton;
    const goblin_slayer = window.goblin_slayer;
    
    const isElite = (elite) =>{
        if (elite === true){
            return 'Elite Adventurer'
        } else {
            return ''
        }
    }

    const rating = rating => {
        const num = <img src={star} className='star'/>
        const use = Number(rating);
       
        switch (use) {
            case 1:
            return num;
            case 2:
            return (
                <div className='rating'>
                    {num}{num}
                </div>
                );
            case 3:
            return (
                <div className='rating'>
                    {num}{num}{num}
                </div>
                );
            case 4:
            return(
                <div className='rating'>
                    {num}{num}{num}{num}
                </div>
                );
            case 5:
            return (
                <div className='rating'>
                    {num}{num}{num}{num}{num}
                </div>
                );                
            default:
            return ''
        }
    }

    const hero = (name) => {
        switch (name) {
            case 'Hercules':
                return (
                    <img src={hercules} className='adv-img'/>
                )
            case 'Goblin Slayer':
            return <img src={goblin_slayer} className='adv-img'/>
            case 'Isaac Newton':
            return <img src={isaac_newton} className='adv-img' />
            default:
            return '';
        }
    }

    const list = () => {
        const names = adv.map(ad => 
            <div className="hero-container" key={ad.id}>
                <div className='top-hero'>
                    {hero(ad.username)}
              <div className='hero-details'>
                   <p  className="hero-name">{ad.username}</p>
                  <p className="p">{isElite(ad.elite)}</p>
            <p className="rating-container">Rating: {rating(ad.avg_rating)}</p> 
            <p className="p">Total Reviews: {ad.total_ratings}</p>
            <hr/>
            <p className="p">How I can Help:</p>
            <p className="p">{ad.pitch}</p> 
              </div>
                </div>
            <button onClick={() => selectAdv(ad.id)}>See Reviews</button>
              <button value={values.adventurer_id} type="submit" className="select2" onClick={() => select(ad.id)}>Select and Continue</button>
           </div>
        
        ) 

        const allReviews = () => {
        
           const allR = ()=>{
              
               if(reviews.length > 0){
                const num = reviews.map(review =>{
                    const arr = [];
                    if (review.extract.adventurer_id === values.selected.id){
                        arr.push(review)
                       
                    }
                   return arr;
                    
                });
                const reviewsArr = num.map(el => {
                    
                    if (el.length < 0){
                        num.pop(el)
                    }
                    return num
                })
                if (reviewsArr.length > 0 && values.selected){
                   
                    const advReviews = num.map(review => {
                        if (review[0]){
                            return (
                               <div key={review[0].extract.id} className='quest-name'>
                    <div className='p'>Review By: User#{`${review[0].extract.user_id}`}</div>
                    <div className='rating-container'>Rating: {rating(review[0].extract.rating)}</div>
                    <div className='p'>body: {`${review[0].extract.body}`}</div>  
                  </div> 
                            )
                        }
                    }
                  
            )
        
            return advReviews
        } else {
            return (
                <div>No Reviews Yet</div>
            )
        }}} 
            if (reviews.length > 0 && values.selected){
             
            return allR();
            } else {
                return (
                    <div className='form'>No Reviews Yet</div>
                )
            }
            
            
        } 
        const adReviews = () =>{
            return (
                <div className='quest-form'>
                    Adventurer info:
                    <div>{hero(values.selected.username)}</div>
            <div className='p'>{`${values.selected.username}`}</div>
            <div className='p'>{`${values.selected.pitch}`}</div>
            <button value={values.adventurer_id} type="submit" className="select2" onClick={() => select(values.selected.id)}>Select and Continue</button>
                    <div className='p'>Reviews:</div>
                    {allReviews()}
                </div>
            )
                
        }
        return values.review === true ? adReviews() : names
    }

    return (
        <div className="quest-container">
             <ul className='bar1'>
             <Link to='/'>
                    <img src={logo} className="logo2"/>
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
            <div className='back'>
                   <button onClick={back}>Back</button> 
                </div>
            <div className='quest-form'>
                  
            {list()} 
            </div>
            
            
        </div>
    )
}

export default PartTwo;