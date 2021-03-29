import React from 'react';
import './message-item.css';

const MessageItem = (props) => {
  return (
    <div className="dialogs-message__item">
      {/* friend-message */}
      <div className="dialogs-message__friend friend-message">
        <div className="friend-message__ava">
          <a href="#">
            <img
              src="https://www.shareicon.net/data/512x512/2016/05/26/771189_man_512x512.png"
              alt="ava"
            />
          </a>
          <p className="friend-message__name">Andrew</p>
        </div>
        <p className="friend-message__text">{props.friendMessage}</p>
      </div>
      {/* user-message */}
      <p className="dialogs-message__user user-message">user message 1</p>
    </div>
  );
};
export default MessageItem;
