// src/components/UserProfile.js
import React from 'react';
import '../css/UserProfile.css'; // Import the CSS file

function UserProfile() {
  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 1234 Main Street, Anytown, USA</p>
      </div>
    </div>
  );
}

export default UserProfile;