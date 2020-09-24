import React from 'react';

export default ({ user }) => (
  <header className="nav-bar">
    <p>QuestRabbit</p>
    <h4>Welcome { user.username }!</h4>
  </header>
);
