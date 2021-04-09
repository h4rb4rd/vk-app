import React from 'react';
import { connect } from 'react-redux';

import Friends from './friends';
import {
  followAC,
  unfollowAC,
  setFriendsAC,
} from '../../redux/friends-reducer';

const mapStateToProps = (state) => {
  return {
    friends: state.friends.friendsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    setFriends: (friends) => {
      dispatch(setFriendsAC(friends));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
