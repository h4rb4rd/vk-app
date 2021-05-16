import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';

import './friend.css';

const Friend = ({ friend, followTh, unfollowTh, inProgress }) => {
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

export default Friend;
