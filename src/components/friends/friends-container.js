import React from 'react';
import { connect } from 'react-redux';

import Friends from './friends';
import {
  followAC,
  unfollowAC,
  setFriendsAC,
  setPageAC,
  setUsersCountAC,
} from '../../redux/friends-reducer';

const mapStateToProps = (state) => {
  return {
    friends: state.friends.friendsData,
    pageSize: state.friends.pageSize,
    totalCount: state.friends.totalCount,
    currentPage: state.friends.currentPage,
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
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    setUsersCount: (count) => {
      dispatch(setUsersCountAC(count));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
