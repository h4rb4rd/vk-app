import React from 'react';
import './profile.css';

import ProfileInfo from './profile-info';
import MyPosts from './my-posts';
import backgroundImg from '../../assets/images/citybg.jpg';
import Preloader from '../preloader';

const Profile = ({
  postData,
  addPost,
  status,
  profile,
  updateStatusTh,
  savePhotoTh,
  saveProfileDataTh,
  error,
}) => {
  return (
    <main className="profile">
      {/* image */}
      <div className="profile__image">
        <img src={backgroundImg} alt="img" />
      </div>
      {/* content */}
      {profile ? (
        <div className="profile__content">
          {/* user (ava+description)*/}
          <ProfileInfo
            status={status}
            profile={profile}
            updateStatusTh={updateStatusTh}
            savePhotoTh={savePhotoTh}
            saveProfileDataTh={saveProfileDataTh}
          />
          {/* posts */}
          <MyPosts postData={postData} addPost={addPost} />
        </div>
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default Profile;
