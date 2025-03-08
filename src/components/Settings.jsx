import React, { useState } from 'react';

function Settings({ darkMode, toggleDarkMode }) {
  // Local state for settings changes
  const [localSettings, setLocalSettings] = useState({
    darkMode: darkMode
  });

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    // Update local state
    setLocalSettings({
      ...localSettings,
      darkMode: !localSettings.darkMode
    });
    
    // Update parent state
    toggleDarkMode();
  };

  return (
    <div className={`settings-container ${darkMode ? 'bg-dark text-light' : ''}`}>
      <h2 className="mb-4">Settings</h2>
      
      <div className={`card ${darkMode ? 'bg-secondary text-light' : 'bg-white'}`}>
        <div className="card-body">
          <h3 className="card-title mb-4">Appearance</h3>
          
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeToggle"
              checked={localSettings.darkMode}
              onChange={handleDarkModeToggle}
            />
            <label className="form-check-label" htmlFor="darkModeToggle">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;