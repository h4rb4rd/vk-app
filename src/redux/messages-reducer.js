const Actions = {
  UPDATE_MESSAGE_TEXT: 'UPDATE-MESSAGE-TEXT',
  ADD_MESSAGE: 'ADD-MESSAGE',
  id: 100,
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

let idMax = 100;

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_MESSAGE_TEXT:
      return { ...state, messageTextData: action.text };
    case Actions.ADD_MESSAGE:
      const newObj = {
        id: idMax++,
        messageText: state.messageTextData,
      };
      return {
        ...state,
        userMessageData: [...state.userMessageData, newObj],
        messageTextData: '',
      };
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
