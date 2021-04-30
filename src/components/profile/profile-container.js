import React from 'react';
import { connect } from 'react-redux';

import Profile from './profile';
import { addPostAC, updatePostTextAC, getStatusTC, updateStatusTC } from '../../redux/profile-reducer';
import { Component } from 'react';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = 16618;
    this.props.getStatusTh(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
