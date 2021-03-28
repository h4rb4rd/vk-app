import React from 'react';
import './my-posts.css';
import Post from './post';

const MyPosts = () => {
  const profileData = {
    postData: [
      { id: 1, postText: "It's my first post", like: 7 },
      { id: 2, postText: 'Hi, how are you?', like: 3 },
    ],
  };

  return (
    <div>
      {/* form */}
      <form className="profile__form profile-form">
        <label className="profile-form__label" htmlFor="profile-form">
          My Posts
        </label>
        <textarea
          placeholder="Enter Your Message"
          className="profile-form__textarea"
        />
        <button type="button" className="profile-form__button">
          Add post
        </button>
      </form>
      {/* posts */}
      <div className="profile__posts">
        {profileData.postData.map((data) => {
          return (
            <Post postText={data.postText} likes={data.like} key={data.id} />
          );
        })}
      </div>
    </div>
  );
};
export default MyPosts;
