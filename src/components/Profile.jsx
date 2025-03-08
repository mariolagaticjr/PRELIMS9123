import React from 'react';
import UserInfo from './UserInfo';
import ProfilePicture from './ProfilePicture';

function Profile({ user, updateName, darkMode }) {
  // Handle name change
  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  return (
    <div className={`profile-container ${darkMode ? 'bg-dark text-light' : ''}`}>
      <h2 className="mb-4">User Profile</h2>
      
      <div className="row">
        <div className="col-md-4">
          <ProfilePicture darkMode={darkMode} />
        </div>
        <div className="col-md-8">
          <UserInfo name={user.name} darkMode={darkMode} />
          
          <div className={`card mb-3 ${darkMode ? 'bg-secondary text-light' : 'bg-white'}`}>
            <div className="card-body">
              <h3 className="card-title">Edit Profile</h3>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  value={user.name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;