import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from './friends';
import { followTC, unfollowTC, setPageAC, toggleInProgressAC, getFriendsTC } from '../../redux/friends-reducer';

class FriendsApiComponent extends Component {
  componentDidMount() {
    const { currentPage, pageSize, getFriendsTh } = this.props;
    getFriendsTh(currentPage, pageSize);
  }
  onPageChange = (page) => {
    const { setPage, pageSize, getFriendsTh } = this.props;
    setPage(page);
    getFriendsTh(page, pageSize);
  };
  render() {
    const { friends, followTh, unfollowTh, pageSize, totalCount, currentPage, isFetching, inProgress } = this.props;
    // console.log(this.props);
    return (
      <Friends
        friends={friends}
        followTh={followTh}
        unfollowTh={unfollowTh}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
        isFetching={isFetching}
        inProgress={inProgress}
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
    followTh: (friendId) => {
      dispatch(followTC(friendId));
    },
    unfollowTh: (friendId) => {
      dispatch(unfollowTC(friendId));
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    toggleInProgress: (inProgress, userId) => {
      dispatch(toggleInProgressAC(inProgress, userId));
    },
    getFriendsTh: (currentPage, pageSize) => {
      dispatch(getFriendsTC(currentPage, pageSize));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsApiComponent);
export default FriendsContainer;
