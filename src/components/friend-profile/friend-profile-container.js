import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendProfile from './friend-profile';
import { getFriendProfileTC } from '../../redux/friend-profile-reducer';
import { withRouter } from 'react-router';

class FriendProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getFriendProfileTh(userId);
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
    getFriendProfileTh: (userId) => {
      dispatch(getFriendProfileTC(userId));
    },
  };
};
let FriendProfileUrlComponent = withRouter(FriendProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(FriendProfileUrlComponent);
