import React from 'react';
import { NavLink } from 'react-router-dom';
import './friends.css';

import avatar from '../../assets/images/avatar.png';
import Preloader from '../preloader';

const Friend = ({ friend, followTh, unfollowTh, inProgress }) => {
  console.log(followTh);
  return (
    <div className="friends__container">
      {/* user */}

      <div className="friends__user friends-user">
        <div className="friends-user__ava">
          <NavLink to={`/friend-profile/${friend.id}`}>
            <img src={friend.photo != null ? friend.photo : avatar} alt="ava" />
          </NavLink>
        </div>
        <div className="friends-user__buttons">
          {friend.followed ? (
            <button
              disabled={inProgress.some((id) => id === friend.id)}
              className="friends-user__button"
              type="button"
              onClick={() => {
                unfollowTh(friend.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={inProgress.some((id) => id === friend.id)}
              className="friends-user__button"
              type="button"
              onClick={() => {
                followTh(friend.id);
                // follow(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      {/* data */}
      <div className="friends__data friends-data">
        {/* info */}
        <div className="friends-data-info">
          <div className="friends-data__name">{friend.name}</div>
          <div className="friends-data__status">{friend.status}</div>
        </div>
      </div>
    </div>
  );
};

const Friends = ({ friends, followTh, unfollowTh, currentPage, onPageChange, totalCount, pageSize, isFetching, inProgress }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <main className="friends">
      {isFetching ? <Preloader /> : null}

      {!isFetching
        ? friends.map((friend) => {
            return <Friend friend={friend} key={friend.id} followTh={followTh} unfollowTh={unfollowTh} inProgress={inProgress} />;
          })
        : null}

      {/* <button className="friends__btn">Get Friends</button> */}
      <div className="friends__pagination">
        {pages.map((pageNumber) => {
          return (
            <span
              onClick={() => {
                onPageChange(pageNumber);
              }}
              key={pageNumber}
              className={currentPage === pageNumber ? 'selected-page' : ''}
            >
              {pageNumber}
            </span>
          );
        })}
      </div>
    </main>
  );
};
export default Friends;
