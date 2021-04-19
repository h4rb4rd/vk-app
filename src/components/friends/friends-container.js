import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from './friends';
import {
  followAC,
  unfollowAC,
  setFriendsAC,
  setPageAC,
  setUsersCountAC,
  toggleIsFetchingAC,
  toggleInProgressAC,
} from '../../redux/friends-reducer';
import { friendsApi } from '../../dal/api';

class FriendsApiComponent extends Component {
  componentDidMount() {
    const { currentPage, pageSize, toggleIsFetching, setFriends, setUsersCount } = this.props;
    toggleIsFetching(true);
    friendsApi.getFriends(currentPage, pageSize).then((data) => {
      toggleIsFetching(false);
      setFriends(data.items);
      setUsersCount(data.totalCount);
    });
  }
  onPageChange = (page) => {
    const { setPage, pageSize, toggleIsFetching, setFriends } = this.props;
    setPage(page);
    toggleIsFetching(true);
    friendsApi.getFriends(page, pageSize).then((data) => {
      toggleIsFetching(false);
      setFriends(data.items);
    });
  };
  render() {
    const { friends, follow, unfollow, pageSize, totalCount, currentPage, isFetching, inProgress, toggleInProgress } = this.props;

    return (
      <Friends
        friends={friends}
        follow={follow}
        unfollow={unfollow}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
        isFetching={isFetching}
        inProgress={inProgress}
        toggleInProgress={toggleInProgress}
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
    inProgress: state.friends.inProgress,
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
    toggleInProgress: (inProgress, userId) => {
      dispatch(toggleInProgressAC(inProgress, userId));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsApiComponent);
export default FriendsContainer;
