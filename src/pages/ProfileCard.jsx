import React from "react";
import "../App.css";

const ProfileCard = ({ user, onClose }) => {
  const { name, email, profileImage, profileLink } = user;

  return (
    <div className="profile-card">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img src={profileImage} alt={name} className="profile-image" />
      <h3>{name}</h3>
      <p>{email}</p>
      <a href={profileLink} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default ProfileCard;
