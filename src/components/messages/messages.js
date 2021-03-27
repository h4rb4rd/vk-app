import React from 'react';

import './messages.css';

const Messages = () => {
  return (
    <main className="messages">
      {/* nav */}
      <nav className="messages__nav messages-nav">
        <h3 className="messages__title">Dialogs</h3>
        <ul className="messages-nav__list">
          <li className="messages-nav__item">
            <a href="#" className="messages-nav__link active">
              Andrew
            </a>
          </li>
        </ul>
      </nav>
      {/* dialogs */}
      <div className="messages__dialogs dialogs">
        <div className="dialogs__message dialogs-message">
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
            <p className="friend-message__text">friend message 1</p>
          </div>
          {/* user-message */}
          <p className="dialogs-message__user user-message">user message 1</p>
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
