const Actions = {
  UPDATE_MESSAGE_TEXT: 'UPDATE-MESSAGE-TEXT',
  ADD_MESSAGE: 'ADD-MESSAGE',
};

const initialState = {
  friendData: [
    { id: 11, name: 'Andrew' },
    { id: 12, name: 'Dmitry' },
    { id: 13, name: 'Sasha' },
    { id: 14, name: 'Valera' },
    { id: 15, name: 'Ivan' },
  ],
  messageData: [
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
  ],
  userMessageData: [],
  messageTextData: '',
};

const messagesReducer = (state = initialState, action) => {
  let idMax = 100;

  switch (action.type) {
    case Actions.UPDATE_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.messageTextData = action.text;
      return stateCopy;
    }
    case Actions.ADD_MESSAGE: {
      const newObj = {
        id: idMax++,
        messageText: state.messageTextData,
      };
      let stateCopy = { ...state };
      stateCopy.userMessageData = [...state.userMessageData];
      stateCopy.userMessageData.push(newObj);
      stateCopy.messageTextData = '';
      return stateCopy;
    }
    default:
      return state;
  }
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

export default messagesReducer;
