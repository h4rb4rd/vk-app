import React from 'react';
import { connect } from 'react-redux';

import Profile from './profile';
import { addPostAC, getStatusTC, updateStatusTC } from '../../redux/profile-reducer';
import { Component } from 'react';

class ProfileContainer extends Component {
  componentDidMount() {
    // let userId = 16618;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
