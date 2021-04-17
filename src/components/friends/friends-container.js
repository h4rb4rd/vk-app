import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Friends from './friends';
import { followAC, unfollowAC, setFriendsAC, setPageAC, setUsersCountAC, toggleIsFetchingAC } from '../../redux/friends-reducer';

class FriendsApiComponent extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(res.data.items);
        this.props.setUsersCount(res.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.setPage(page);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((res) => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(res.data.items);
    });
  };
  render() {
    const { friends, follow, unfollow, pageSize, totalCount, currentPage, isFetching } = this.props;

    return (
      <Friends
        friends={friends}
        follow={follow}
        unfollow={unfollow}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
        isFetching={isFetching}
        onPageChange={this.onPageChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends.friendsData,
    pageSize: state.friends.pageSize,
    totalCount: state.friends.totalCount,
    currentPage: state.friends.currentPage,
    isFetching: state.friends.isFetching,
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsApiComponent);
export default FriendsContainer;
