import React from 'react';
import './messages.css';

import NavItem from './nav-item';
import MessageItem from './message-item';
import { Form, Field } from 'react-final-form';
import { required, maxLength, composeValidators } from '../../utils/validators';
import { reset } from 'redux-form';

const MessagesForm = ({ addMessage }) => {
  return (
    <Form
      onSubmit={(formData) => {
        addMessage(formData.myMessage);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="dialogs__form dialogs-form">
          <Field name="myMessage" validate={composeValidators(required, maxLength(35))}>
            {({ input, meta }) => (
              <div className="dialogs-form__container">
                <input {...input} type="textarea" placeholder="Enter Your Message" className="dialogs-form__textarea" />
                {meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
          <button className="dialogs-form__button">Send</button>
        </form>
      )}
    ></Form>
  );
};
const Messages = ({ friendData, messageData, userMessageData, addMessage }) => {
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
        {/* form */}
        <MessagesForm addMessage={addMessage} />
      </div>
    </main>
  );
};

export default Messages;
