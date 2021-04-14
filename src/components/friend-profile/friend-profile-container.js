import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import FriendProfile from './friend-profile';
import { setFriendProfileAC } from '../../redux/friend-profile-reducer';

class FriendProfileContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
      this.props.setFriendProfile(res.data);
    });
  }
  render() {
    const { profile, postData } = this.props;
    return (
      <div>
        <FriendProfile {...this.props} profile={profile} postData={postData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.friendProfile.postData,
    profile: state.friendProfile.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFriendProfile: (profile) => {
      dispatch(setFriendProfileAC(profile));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendProfileContainer);
