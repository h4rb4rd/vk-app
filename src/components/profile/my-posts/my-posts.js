import React from 'react';
import './my-posts.css';
import Post from './post';

import { addPostAC, updatePostTextAC } from '../../../redux/store';

const MyPosts = ({ postData, postTextData, dispatch }) => {
  // ==============
  const addPost = () => {
    dispatch(addPostAC());
  };
  const updatePostText = (e) => {
    let text = e.target.value;
    dispatch(updatePostTextAC(text));
  };
  // ==============

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
          value={postTextData}
          onChange={updatePostText}
        />
        <button
          type="button"
          className="profile-form__button"
          onClick={addPost}
        >
          Add post
        </button>
      </form>
      {/* posts */}
      <div className="profile__posts">
        {postData.map((data) => {
          return (
            <Post postText={data.postText} likes={data.like} key={data.id} />
          );
        })}
      </div>
    </div>
  );
};
export default MyPosts;
