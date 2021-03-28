import React from 'react';
import { NavLink } from 'react-router-dom';
import './messages.css';

const NavItem = (props) => {
  return (
    <li className="messages-nav__item">
      <NavLink to={`/messages/${props.id}`} className="messages-nav__link ">
        {props.name}
      </NavLink>
    </li>
  );
};

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
const Messages = () => {
  const messagesData = {
    friendData: [
      { id: 11, name: 'Andrew' },
      { id: 12, name: 'Dmitry' },
      { id: 13, name: 'Sasha' },
      { id: 14, name: 'Valera' },
      { id: 15, name: 'Ivan' },
    ],
    MessageData: [
      {
        id: 11,
        message: 'I am normal pBlAblabl I can have text and everything',
      },
      {
        id: 12,
        message: 'I am a personal popover and I can have text and everything',
      },
      {
        id: 13,
        message: 'I am normal pBlAblabl I can have text and everything',
      },
      {
        id: 14,
        message: ' I am a personal popover and I can have text and everything',
      },
      {
        id: 15,
        message: 'I am normal pBlAblabl I can have text and everything',
      },
      {
        id: 16,
        message: ' I am a personal popover and I can have text and everything',
      },
    ],
  };

  return (
    <main className="messages">
      {/* nav */}
      <nav className="messages__nav messages-nav">
        <h3 className="messages__title">Dialogs</h3>
        <ul className="messages-nav__list">
          {messagesData.friendData.map((data) => {
            return <NavItem name={data.name} key={data.id} id={data.id} />;
          })}
        </ul>
      </nav>
      {/* dialogs */}
      <div className="messages__dialogs dialogs">
        <div className="dialogs__container">
          {/* dialog item*/}
          {messagesData.MessageData.map((data) => {
            return <MessageItem friendMessage={data.message} key={data.id} />;
          })}
        </div>
        <form action="#" className="dialogs__form dialogs-form">
          <textarea className="dialogs-form__textarea"></textarea>
          <button type="button" className="dialogs-form__button">
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Messages;
