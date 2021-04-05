import React from 'react';
import './profile.css';

import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts';

const Profile = ({ profileData, dispatch }) => {
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
        <ProfileInfo />
        {/* posts */}
        <MyPostsContainer
          postData={profileData.postData}
          postTextData={profileData.postTextData}
          dispatch={dispatch}
        />
      </div>
    </main>
  );
};

export default Profile;
