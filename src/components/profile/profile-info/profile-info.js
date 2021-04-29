import React from 'react';
import './profile-info.css';

import ProfileStatus from './profile-status';

const ProfileInfo = ({ status, updateStatusTh }) => {
  return (
    <div className="profile__user profile-user">
      {/* avatar */}
      <div className="profile-user__avatar">
        <a href="#">
          <img src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png" alt="avatar" />
        </a>
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
