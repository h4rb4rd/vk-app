import React from 'react';
import { Form, Field } from 'react-final-form';
import './my-posts.css';
import Post from './post';

const MyPostsForm = ({ addPost }) => {
  return (
    <Form
      onSubmit={(formData) => {
        addPost(formData.profilePost);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="profile__form profile-form">
          <label className="profile-form__label">My Posts</label>
          <Field component="textarea" name="profilePost" placeholder="Enter Your Message" className="profile-form__textarea" />
          <button className="profile-form__button">Add post</button>
        </form>
      )}
    ></Form>
  );
};

const MyPosts = ({ postData, addPost }) => {
  return (
    <div>
      {/* form */}
      <MyPostsForm addPost={addPost} />

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
