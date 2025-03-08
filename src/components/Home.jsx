import React from 'react';
import { Link } from 'react-router-dom';

function Home({ darkMode }) {
  return (
    <div className={`jumbotron p-5 rounded ${darkMode ? 'bg-secondary text-light' : 'bg-light'}`}>
      <h1 className="display-4">Welcome to User Profile App!</h1>
      <p className="lead">
        This application demonstrates React components, state management, and routing.
      </p>
      <hr className="my-4" />
      <p>
        Visit your profile to view and update your information, or go to settings to toggle dark mode.
      </p>
      <Link to="/profile" className="btn btn-primary">View Profile</Link>
    </div>
  );
}

export default Home;