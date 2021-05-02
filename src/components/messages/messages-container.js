import React from 'react';
import { connect } from 'react-redux';

import Messages from './messages';
import { addMessageAC } from '../../redux/messages-reducer';

const mapStateToProps = (state) => {
  return {
    messageData: state.messages.messageData,
    friendData: state.messages.friendData,
    userMessageData: state.messages.userMessageData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (messageText) => {
      dispatch(addMessageAC(messageText));
    },
  };
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
