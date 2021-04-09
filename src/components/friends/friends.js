import React from 'react';
import './friends.css';

const Friend = ({
  friend: { id, avatar, name, status, followed },
  follow,
  unfollow,
}) => {
  return (
    <div className="friends__container">
      {/* user */}

      <div className="friends__user friends-user">
        <div className="friends-user__ava">
          <a href="#">
            <img src={avatar} alt="ava" />
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

const Friends = ({ friends, follow, unfollow, setFriends }) => {
  if (friends.length === 0) {
    setFriends([
      {
        id: 11,
        avatar:
          'https://www.shareicon.net/data/512x512/2016/05/26/771189_man_512x512.png',
        followed: false,
        name: 'Andrew',
        status: 'i am looking for a Job right now...',
        location: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
      {
        id: 12,
        avatar:
          'https://www.shareicon.net/data/512x512/2016/05/26/771191_man_512x512.png',
        followed: false,
        name: 'Dmitry',
        status: 'Hello',
        location: {
          country: 'Russia',
          city: 'Moscow',
        },
      },
      {
        id: 13,
        avatar:
          'https://www.shareicon.net/data/512x512/2016/05/24/770032_people_512x512.png',
        followed: false,
        name: 'Sasha',
        status: 'I like football',
        location: {
          country: 'Ukrane',
          city: 'Kiev',
        },
      },
      {
        id: 14,
        avatar:
          'https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png',
        followed: false,
        name: 'Valera',
        status: 'I am free to help you to create good Video Production',
        location: {
          country: 'United States',
          city: 'Philadelphia',
        },
      },
      {
        id: 15,
        avatar:
          'https://www.shareicon.net/data/2016/05/24/770117_people_512x512.png',
        followed: false,
        name: 'Valera',
        status: 'Good evening',
        location: {
          country: 'Poland',
          city: 'krakow',
        },
      },
    ]);
  }
  console.log(friends);
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

      <button className="friends__btn">show more</button>
    </main>
  );
};
export default Friends;
