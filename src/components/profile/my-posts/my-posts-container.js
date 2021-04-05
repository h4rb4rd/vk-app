import React from 'react';

import MyPosts from './my-posts';
import { addPostAC, updatePostTextAC } from '../../../redux/profile-reducer';

const MyPostsContainer = ({ postData, postTextData, dispatch }) => {
  const addPost = () => {
    dispatch(addPostAC());
  };
  const updatePostText = (e) => {
    let text = e.target.value;
    dispatch(updatePostTextAC(text));
  };
  return (
    <MyPosts
      postData={postData}
      postTextData={postTextData}
      addPost={addPost}
      updatePostText={updatePostText}
    />
  );
};
export default MyPostsContainer;
