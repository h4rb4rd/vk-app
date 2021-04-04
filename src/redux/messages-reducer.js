const Actions = {
  UPDATE_MESSAGE_TEXT: 'UPDATE-MESSAGE-TEXT',
  ADD_MESSAGE: 'ADD-MESSAGE',
};

export const updateMessageTextAC = (text) => {
  return {
    type: Actions.UPDATE_MESSAGE_TEXT,
    text,
  };
};
export const addMessageAC = () => {
  return {
    type: Actions.ADD_MESSAGE,
  };
};

const messagesReducer = (state, action) => {
  let idMax = 100;

  switch (action.type) {
    case Actions.UPDATE_MESSAGE_TEXT:
      state.messageTextData = action.text;
      return state;
    case Actions.ADD_MESSAGE:
      const newObj = {
        id: idMax++,
        messageText: state.messageTextData,
      };
      state.userMessageData.push(newObj);
      state.messageTextData = '';
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
