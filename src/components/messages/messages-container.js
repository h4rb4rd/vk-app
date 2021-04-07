import React from 'react';
import { connect } from 'react-redux';

import Messages from './messages';
import {
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/messages-reducer';

const mapStateToProps = (state) => {
  return {
    messageData: state.messages.messageData,
    friendData: state.messages.friendData,
    userMessageData: state.messages.userMessageData,
    messageTextData: state.messages.messageTextData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (e) => {
      let text = e.target.value;
      dispatch(updateMessageTextAC(text));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
export default MessagesContainer;
