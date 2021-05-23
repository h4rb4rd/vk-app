import React, { useState } from 'react';
import './profile-info.css';

import ProfileStatus from './profile-status';
import avatar from '../../../assets/images/userAva.png';
import FileUpload from '../../file-upload';

const ProfileInfo = ({ status, profile, updateStatusTh, savePhotoTh }) => {
  const [editMode, setEditMode] = useState(false);
  const editModeOn = () => {
    setEditMode(true);
  };

  const editModeOff = () => {
    setEditMode(false);
  };

  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      savePhotoTh(e.target.files[0]);
    }
  };
  return (
    <div className="profile__user profile-user">
      {/* avatar */}
      <div className="profile-user__avatar" onMouseEnter={editModeOn} onMouseLeave={editModeOff}>
        <a href="#">
          <img src={profile.photos.large || avatar} alt="avatar" />
        </a>
        {editMode && <FileUpload onPhotoChange={onPhotoChange} text={'Update photo'} />}
      </div>
      {/* status */}
      <ProfileStatus status={status} updateStatusTh={updateStatusTh} />
      {/* info */}
      <div className="profile__info profile-info">
        <ul className="profile-info__list">
          <li>
            <p className="profile-info__item">
              <span>Username: </span>
              'Tony'
            </p>
          </li>
          <li>
            <p className="profile-info__item">
              <span>Date of Birth: </span>
              '04.04.1965'
            </p>
          </li>
          <li>
            <p className="profile-info__item">
              <span>City: </span>
              'New York'
            </p>
          </li>
          <li>
            <p className="profile-info__item">
              <span>Education: </span>
              'Community College'
            </p>
          </li>
          <li>
            <p className="profile-info__item">
              <span>Web Site: </span>
              'Tony'
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
