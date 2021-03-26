import React from 'react';
import './profile.css';

import MyPosts from './my-posts';

const Profile = () => {
  return (
    <main className="profile">
      {/* image */}
      <div className="profile__image">
        <img
          src="https://linkedinbackground.com/download/Night-City.jpg"
          alt="img"
        />
      </div>
      {/* content */}
      <div className="profile__content">
        {/* user (ava+description)*/}
        <div className="profile__user profile-user">
          {/* avatar */}
          <div className="profile-user__avatar">
            <a href="#">
              <img
                src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                alt="avatar"
              />
            </a>
          </div>
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
        {/* posts */}
        <MyPosts />
      </div>
    </main>
  );
};

export default Profile;
