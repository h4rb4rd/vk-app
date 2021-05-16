const Actions = {
  ADD_MESSAGE: 'message/ADD-MESSAGE',
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
};

let idMax = 100;

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_MESSAGE:
      const newObj = {
        id: idMax++,
        messageText: action.messageText,
      };
      return {
        ...state,
        userMessageData: [...state.userMessageData, newObj],
      };
    default:
      return state;
  }
};

export const addMessageAC = (messageText) => {
  return {
    type: Actions.ADD_MESSAGE,
    messageText,
  };
};

export default messagesReducer;
