import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../../app/assets/images/QuestRabbit.jpg'

export default ({ currentUser, logout }) => {
  const logo = window.logo
const display = currentUser ? (
    <div className="nav-bar">
      <img src={logo} />
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="nav-bar">
      <img src={logo} alt="logo"/>
      <Link className="btn" to="/intermediary">Log in</Link>
    </div>
  );
  return (
    <header >
      <div>
        {display}
      </div>
    </header>
  )
}
