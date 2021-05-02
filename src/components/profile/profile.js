import React from 'react';
import './profile.css';

import ProfileInfo from './profile-info';
import MyPosts from './my-posts';

const Profile = ({ postData, addPost, status, updateStatusTh }) => {
  return (
    <main className="profile">
      {/* image */}
      <div className="profile__image">
        <img src="https://linkedinbackground.com/download/Night-City.jpg" alt="img" />
      </div>
      {/* content */}
      <div className="profile__content">
        {/* user (ava+description)*/}
        <ProfileInfo status={status} updateStatusTh={updateStatusTh} />
        {/* posts */}
        <MyPosts postData={postData} addPost={addPost} />
      </div>
    </main>
  );
};

export default Profile;
