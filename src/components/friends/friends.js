import React from 'react';
import './friends.css';

import Preloader from '../preloader';
import Pagination from '../pagination';
import Friend from './friend';

const Friends = ({
  friends,
  followTh,
  unfollowTh,
  currentPage,
  onPageChange,
  totalCount,
  pageSize,
  isFetching,
  inProgress,
}) => {
  return (
    <main className="friends">
      {isFetching ? <Preloader /> : null}

      {!isFetching
        ? friends.map((friend) => {
            return (
              <Friend
                friend={friend}
                key={friend.id}
                followTh={followTh}
                unfollowTh={unfollowTh}
                inProgress={inProgress}
              />
            );
          })
        : null}

      {/* <button className="friends__btn">Get Friends</button> */}
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={onPageChange}
        pageSize={pageSize}
      />
    </main>
  );
};
export default Friends;
