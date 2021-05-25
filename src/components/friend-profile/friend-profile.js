import React from 'react';
import './friend-profile.css';
import avatar from '../../assets/images/avatar.png';

import Preloader from '../preloader';
import backgroundImg from '../../assets/images/citybg.jpg';

const FriendProfileInfo = ({ profile, status }) => {
  return (
    <div className="friend-profile__user friend-user">
      {/* avatar */}
      <div className="profile-user__avatar">
        <a href="#">
          <img src={profile.photos.large || profile.photos.small || avatar} alt="ava" />
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
              <span>Name:</span>
              {profile.fullName}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>Looking for a job:</span>
              {profile.lookingForAJob ? 'yes' : 'no'}
            </p>
          </li>
          <li>
            <p className="friend-info__item">
              <span>Professional skills:</span>
              {profile.lookingForAJobDescription}
            </p>
          </li>
        </ul>
        <h3 className="contacts__title">Contacts:</h3>
        <ul className="friend-info__list ">
          {Object.keys(profile.contacts).map((key) => {
            return <FriendContacts contactTitle={key} contactValue={profile.contacts[key]} />;
          })}
        </ul>
      </div>
    </div>
  );
};
const FriendContacts = ({ contactTitle, contactValue }) => {
  return (
    <li>
      {contactValue && (
        <p className="friend-info__item">
          <span>{contactTitle}:</span>
          {contactValue}
        </p>
      )}
    </li>
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
