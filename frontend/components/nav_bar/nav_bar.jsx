import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <p>Quest Rabbit</p>
      <Link className="btn" to="/signup">Sign Up</Link>
      <br/>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  )
}
