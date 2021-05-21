import React from 'react';
import './friend-profile.css';
import avatar from '../../assets/images/avatar.png';

import Preloader from '../preloader';
import backgroundImg from '../../assets/images/citybg.jpg';

const FriendProfileInfo = ({ profile, status }) => {
  console.log(status);
  return (
    <div className="friend-profile__user friend-user">
      {/* avatar */}
      <div className="profile-user__avatar">
        <a href="#">
          <img src={profile.photos.large != null ? profile.photos.large : avatar} alt="ava" />
        </a>
      </div>
      <div className="friend-profile__status friend-status">
        <span className="friend-status__text">{status}</span>
      </div>
      {/* info */}
      <div className="friend-user__info friend-info">
        <ul className="friend-info__list">
          <li>
            <p className="friend-info__item">
              <span>Username: </span>
              {profile.fullName}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>ID: </span>
              {profile.userId}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>VK: </span>
              {profile.contacts.vk}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>Description: </span>
              {profile.lookingForAJobDescription}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>Web Site: </span>
              {profile.contacts.website}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FriendPost = ({ postText, likes }) => {
  return (
    <p className="friend-profilee__post friend-post">
      {postText}
      <span>
        {likes} <a href="#" className="profile-post__like"></a>
      </span>
    </p>
  );
};

const FriendProfile = ({ postData, profile, status }) => {
  return (
    <main className="friend-profile">
      {/* image */}
      <div className="friend-profile__image">
        <img src={backgroundImg} alt="img" />
      </div>
      {/* content */}
      {profile ? (
        <div className="friend-profile__content">
          {/* user (ava+description)*/}

          <FriendProfileInfo profile={profile} status={status} />
          {/* posts */}
          <div>
            <h2 className="friend-profile__title">Recent Posts</h2>
            {/* posts */}
            <div className="friend-profile-profile__posts">
              {postData.map((data) => {
                return <FriendPost postText={data.postText} likes={data.like} key={data.id} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default FriendProfile;
