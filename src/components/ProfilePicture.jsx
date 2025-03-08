import React from 'react';
import lagatic from './lagatic.jpg'; 

function ProfilePicture({ pictureUrl, darkMode }) {
  return (
    <div className={`card mb-3 ${darkMode ? 'bg-secondary text-light' : 'bg-white'}`}>
      <div className="card-body text-center">
        <h3 className="card-title">Profile Picture</h3>
        <img 
          src={pictureUrl || lagatic} 
          alt="Profile" 
          className="rounded-circle" 
          style={{ width: '150px', height: '150px' }} 
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
