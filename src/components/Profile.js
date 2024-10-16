// src/components/Profile.js
import React from 'react';
import '../css/Profile.css'; // Import the CSS file

const Profile = () => {
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div className="profile-container">
      <h2>Business Profile</h2>
      <div className="profile-item">
        <strong>Business Name:</strong> {profileData.businessName}
      </div>
      <div className="profile-item">
        <strong>Email:</strong> {profileData.email}
      </div>
      <div className="profile-item">
        <strong>Address:</strong> {profileData.address}
      </div>
      <div className="profile-item">
        <strong>Phone:</strong> {profileData.phone}
      </div>
      <div className="profile-item">
        <strong>Website:</strong> {profileData.website}
      </div>
    </div>
  );
};

export default Profile;