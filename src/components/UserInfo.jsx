import React from 'react';

function UserInfo({ name, darkMode }) {
  return (
    <div className={`card mb-3 ${darkMode ? 'bg-secondary text-light' : 'bg-white'}`}>
      <div className="card-body">
        <h3 className="card-title">User Information</h3>
        <p className="card-text">
          <strong>Name:</strong> {name}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;