import React from 'react';
import { connect } from 'react-redux';

import Profile from './profile';
import { addPostAC, updatePostTextAC, getStatusTC, updateStatusTC } from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    postTextData: state.profile.postTextData,
    status: state.profile.status,
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
    getStatusTh: (userId) => {
      dispatch(getStatusTC(userId));
    },
    updateStatusTh: (status) => {
      dispatch(updateStatusTC(status));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default MyPostsContainer;
