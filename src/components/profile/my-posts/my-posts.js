import React from 'react';
import './my-posts.css';
import Post from './post';

const MyPosts = () => {
  return (
    <>
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
        <Post postText="It's my first post" likes="7" />
        <Post postText="Hi, how are you?" likes="3" />
      </div>
    </>
  );
};
export default MyPosts;
