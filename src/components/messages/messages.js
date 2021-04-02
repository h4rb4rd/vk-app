import React from 'react';
import './messages.css';

import NavItem from './nav-item';
import MessageItem from './message-item';

import { addMessageAC, updateMessageTextAC } from '../../redux/store';

const Messages = ({
  messagesData: { friendData, messageData, userMessageData, messageTextData },
  dispatch,
}) => {
  // ==============
  const addMessage = () => {
    dispatch(addMessageAC());
  };
  const updateMessageText = (e) => {
    let text = e.target.value;
    dispatch(updateMessageTextAC(text));
  };
  // ==============
  return (
    <main className="messages">
      {/* nav */}
      <nav className="messages__nav messages-nav">
        <h3 className="messages__title">Dialogs</h3>
        <ul className="messages-nav__list">
          {friendData.map((data) => {
            return <NavItem name={data.name} key={data.id} id={data.id} />;
          })}
        </ul>
      </nav>
      {/* dialogs */}
      <div className="messages__dialogs dialogs">
        <div className="dialogs__container">
          {/* dialog item*/}
          {messageData.map((data) => {
            return <MessageItem friendMessage={data.message} key={data.id} />;
          })}
          {/* user-message  ?*/}
          {userMessageData.map((data) => {
            return (
              <p className="dialogs-message__user user-message" key={data.id}>
                {data.messageText}
              </p>
            );
          })}
        </div>
        <form className="dialogs__form dialogs-form">
          <textarea
            placeholder="Enter Your Message"
            className="dialogs-form__textarea"
            value={messageTextData}
            onChange={updateMessageText}
          />
          <button
            type="button"
            className="dialogs-form__button"
            onClick={addMessage}
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Messages;
