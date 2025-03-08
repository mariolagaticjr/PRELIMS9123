import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Main user state with nested settings object
  const [user, setUser] = useState({
    name: 'Mario Lagatic G Jr.',
    settings: {
      darkMode: false
    }
  });

  // Function to update user name
  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        darkMode: !user.settings.darkMode
      }
    });
  };

  return (
    <Router>
      <div className={`container-fluid min-vh-100 ${user.settings.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <nav className="navbar navbar-expand navbar-light mb-4">
          <div className="container">
            <span className="navbar-brand">User Profile App</span>
            <div className="navbar-nav">
              <Link to="/" className={`nav-link ${user.settings.darkMode ? 'text-light' : ''}`}>Home</Link>
              <Link to="/profile" className={`nav-link ${user.settings.darkMode ? 'text-light' : ''}`}>Profile</Link>
              <Link to="/settings" className={`nav-link ${user.settings.darkMode ? 'text-light' : ''}`}>Settings</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home darkMode={user.settings.darkMode} />
            </Route>
            <Route path="/profile">
              <Profile 
                user={user} 
                updateName={updateName} 
                darkMode={user.settings.darkMode} 
              />
            </Route>
            <Route path="/settings">
              <Settings 
                darkMode={user.settings.darkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;