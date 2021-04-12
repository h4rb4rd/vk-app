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
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setFriends(res.data.items);
        this.props.setUsersCount(res.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setFriends(res.data.items);
      });
  };
  render() {
    const {
      friends,
      follow,
      unfollow,
      pageSize,
      totalCount,
      currentPage,
    } = this.props;

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

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

        {/* <button className="friends__btn">Get Friends</button> */}
        <div className="friends__pagination">
          {pages.map((pageNumber) => {
            return (
              <span
                onClick={() => {
                  this.onPageChange(pageNumber);
                }}
                key={pageNumber}
                className={currentPage === pageNumber ? 'selected-page' : ''}
              >
                {pageNumber}
              </span>
            );
          })}
          {/* <span className="selected-page">1</span>&nbsp;
          <span>2</span>&nbsp;
          <span>3</span>&nbsp;
          <span>4</span>&nbsp;
          <span>5</span> */}
        </div>
      </main>
    );
  }
}
