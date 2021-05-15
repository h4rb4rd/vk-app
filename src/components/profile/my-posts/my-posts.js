import React from 'react';
import { Form, Field } from 'react-final-form';
import './my-posts.css';
import Post from './post';
import { required, maxLength, composeValidators } from '../../../utils/validators';

const MyPostsForm = ({ addPost }) => {
  return (
    <Form
      onSubmit={(formData) => {
        addPost(formData.profilePost);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="profile__form profile-form">
          <Field name="profilePost" validate={composeValidators(required, maxLength(35))}>
            {({ input, meta }) => (
              <div className="profile-form__container">
                <label className="profile-form__label">My Posts</label>
                <input {...input} type="textarea" placeholder="Enter Your Message" className="profile-form__textarea" />
                {meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
          <button className="profile-form__button">Add post</button>
        </form>
      )}
    ></Form>
  );
};

const MyPosts = React.memo(({ postData, addPost }) => {
  console.log('Render');
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
});
export default MyPosts;
