import * as axios from 'axios';
import React, { Component } from 'react';
import './friends.css';

import avatar from '../../assets/images/avatar.png';

const Friend = ({
  friend: { id, photo, name, status, followed },
  follow,
  unfollow,
}) => {
  return (
    <div className="friends__container">
      {/* user */}

      <div className="friends__user friends-user">
        <div className="friends-user__ava">
          <a href="#">
            <img src={photo != null ? photo : avatar} alt="ava" />
          </a>
        </div>
        <div className="friends-user__buttons">
          {followed ? (
            <button
              className="friends-user__button"
              type="button"
              onClick={() => {
                unfollow(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="friends-user__button"
              type="button"
              onClick={() => {
                follow(id);
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

export default class Friends extends Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users/')
      .then((res) => {
        this.props.setFriends(res.data.items);
      });
  }

  render() {
    const { friends, follow, unfollow } = this.props;
    return (
      <main className="friends">
        {friends.map((friend) => {
          return (
            <Friend
              friend={friend}
              key={friend.id}
              follow={follow}
              unfollow={unfollow}
            />
          );
        })}

        <button className="friends__btn">Get Friends</button>
      </main>
    );
  }
}
