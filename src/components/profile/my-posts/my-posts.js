import React from 'react';
import './my-posts.css';
import Post from './post';

const MyPosts = ({ postData, postTextData, addPost, updatePostText }) => {
  return (
    <div>
      {/* form */}
      <form className="profile__form profile-form">
        <label className="profile-form__label">My Posts</label>
        <textarea
          placeholder="Enter Your Message"
          className="profile-form__textarea"
          value={postTextData}
          onChange={updatePostText}
        />
        <button type="button" className="profile-form__button" onClick={addPost}>
          Add post
        </button>
      </form>
      {/* posts */}
      <div className="profile__posts">
        {postData.map((data) => {
          return <Post postText={data.postText} likes={data.like} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default MyPosts;
