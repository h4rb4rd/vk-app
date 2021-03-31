import React from 'react';
import './profile.css';

import ProfileInfo from './profile-info';
import MyPosts from './my-posts';

const Profile = ({ profileData, onAddPost, onPostTextUpdate }) => {
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
        <MyPosts
          postData={profileData.postData}
          postTextData={profileData.postTextData}
          onAddPost={onAddPost}
          onPostTextUpdate={onPostTextUpdate}
        />
      </div>
    </main>
  );
};

export default Profile;
