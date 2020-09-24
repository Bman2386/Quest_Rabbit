import React from 'react';

export default () => {
const hero = window.hero
    return (
  <div className="home">
    <div className="hero-img-frame">
      <img className="hero-image" src={hero} />
      <form className="splash-form">
      <h1>Help when you need it, at your fingertips</h1>
      <p>Get help from hundreds of trusted adventurers for everything from errands to slaying a dragon.</p>
         <div>
            <input 
                    type="text"
                    placeholder="I need help with..."
                    className="hero-search-bar"
                    />
                    <button>Get help today</button>
        </div> 
        
      </form>
    </div> 
  </div>
    )
}

