import React from 'react';
import { NavLink } from 'react-router-dom';
import './friends.css';

import avatar from '../../assets/images/avatar.png';
import Preloader from '../preloader';
import * as axios from 'axios';

const Friend = ({ friend: { id, photo, name, status, followed }, follow, unfollow }) => {
  return (
    <div className="friends__container">
      {/* user */}

      <div className="friends__user friends-user">
        <div className="friends-user__ava">
          <NavLink to={`/friend-profile/${id}`}>
            <img src={photo != null ? photo : avatar} alt="ava" />
          </NavLink>
        </div>
        <div className="friends-user__buttons">
          {followed ? (
            <button
              className="friends-user__button"
              type="button"
              onClick={() => {
                axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                    withCredentials: true,
                    headers: { 'API-KEY': 'f97b406a-88ca-4783-98f1-647fa4d66e82' },
                  })
                  .then((res) => {
                    if (res.data.resultCode == 0) {
                      unfollow(id);
                    }
                  });
                // unfollow(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="friends-user__button"
              type="button"
              onClick={() => {
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                    {},
                    { withCredentials: true, headers: { 'API-KEY': 'f97b406a-88ca-4783-98f1-647fa4d66e82' } },
                  )
                  .then((res) => {
                    if (res.data.resultCode == 0) {
                      follow(id);
                    }
                  });
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
          <div className="friends-data__name">{name}</div>
          <div className="friends-data__status">{status}</div>
        </div>
      </div>
    </div>
  );
};

const Friends = ({ friends, follow, unfollow, currentPage, onPageChange, totalCount, pageSize, isFetching }) => {
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
            return <Friend friend={friend} key={friend.id} follow={follow} unfollow={unfollow} />;
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
