import React from 'react';
import './messages.css';

import NavItem from './nav-item';
import MessageItem from './message-item';

const Messages = ({ messagesData }) => {
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
