import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './my-posts';
import { addPostAC, updatePostTextAC } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    postTextData: state.profile.postTextData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (e) => {
      let text = e.target.value;
      dispatch(updatePostTextAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
