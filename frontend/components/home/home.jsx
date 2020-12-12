import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
const hero = window.hero;
const star = window.star;
const apple = window.apple;
const play = window.play;
const stars = <img src={star} className='star2'/>
    return (
  <div className="home">
    <div className="hero-img-frame">
      <img className="hero-image" src={hero} />
      <form className="splash-form" id="form1">
      <h1>Help when you need it, at your fingertips</h1>
      <p>Get help from hundreds of trusted adventurers for everything from errands to slaying a dragon.</p>
         <div className="bar">
            <input 
                    type="text"
                    placeholder="I need help with..."
                    className="hero-search-bar"
                    />
                    <Link to="/quest" className="button">Get help today</Link>
        </div> 
        <div className='links'>
        <Link className='btn-4' to="/categories/1">Fetch</Link>
        <Link className='btn-4' to="/categories/2">Craft</Link>
        <Link className='btn-4' to="/categories/3">Escort</Link>
        <button className='btn-3'>See more...</button>
        </div>
      </form>
    </div> 
    <div className='underdog'>
    <div className='underdog'>{stars}{stars}{stars}{stars}<img src={star} className='star2' id='margin-right'/> 1.1+ Million Reviews</div>
      <div className='underdog'>
        <div className='ikea-logo'> 
        <div className='ikea'>IKEA</div>
        </div> Partnered with IKEA</div>
      <div className='store'> 
        <img src={apple} className='apple'/> 
        <div className='fake-logo'>
          <div className='small'>Available in the</div> Magic Store</div>
        </div>
        
      <div className='store'>
        <img src={play} className='go'/>
        <div className='fake-logo'>
           <div className='small'>GET IT ON</div>
           Floogle Play
        </div>
         </div>
      </div>
    
  </div>
    )
}

