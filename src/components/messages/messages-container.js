import React from 'react';

import Messages from './messages';

import {
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/messages-reducer';

const MessagesContainer = ({
  messagesData: { friendData, messageData, userMessageData, messageTextData },
  dispatch,
}) => {
  const addMessage = () => {
    dispatch(addMessageAC());
  };
  const updateMessageText = (e) => {
    let text = e.target.value;
    dispatch(updateMessageTextAC(text));
  };
  return (
    <Messages
      friendData={friendData}
      messageData={messageData}
      userMessageData={userMessageData}
      messageTextData={messageTextData}
      addMessage={addMessage}
      updateMessageText={updateMessageText}
    />
  );
};

export default MessagesContainer;
