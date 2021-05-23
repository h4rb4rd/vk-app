import React from 'react';
import { connect } from 'react-redux';

import Profile from './profile';
import {
  addPostAC,
  getStatusTC,
  updateStatusTC,
  savePhotoTC,
  getFriendProfileTC,
} from '../../redux/profile-reducer';
import { Component } from 'react';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getFriendProfileTh(this.props.userId);
    this.props.getStatusTh(this.props.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    status: state.profile.status,
    userId: state.auth.id,
    profile: state.profile.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostAC(postText));
    },
    getStatusTh: (userId) => {
      dispatch(getStatusTC(userId));
    },
    updateStatusTh: (status) => {
      dispatch(updateStatusTC(status));
    },
    savePhotoTh: (file) => {
      dispatch(savePhotoTC(file));
    },
    getFriendProfileTh: (userId) => {
      dispatch(getFriendProfileTC(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
