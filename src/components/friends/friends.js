import React from 'react';
import './friends.css';

const Friends = () => {
  return (
    <main className="friends">
      <div className="friends__container">
        {/* user */}
        <div className="friends__user friends-user">
          <div className="friends-user__ava">
            <a href="#">
              <img
                src="https://www.shareicon.net/data/512x512/2016/05/26/771189_man_512x512.png"
                alt="ava"
              />
            </a>
          </div>
          <div className="friends-user__buttons">
            {/* <button className="friends-user__button" type="button">
              Unfollow
            </button> */}

            <button className="friends-user__button" type="button">
              Follow
            </button>
          </div>
        </div>
        {/* data */}
        <div className="friends__data friends-data">
          {/* info */}
          <div className="friends-data-info">
            <div className="friends-data-name">Andrew</div>
            <div className="friends-data-status">
              i am looking for a Job right now...
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Friends;
