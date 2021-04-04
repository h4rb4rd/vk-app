import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

const store = {
  _state: {
    profile: {
      postData: [
        { id: 1, postText: "It's my first post", like: 7 },
        { id: 2, postText: 'Hi, how are you?', like: 3 },
      ],
      postTextData: '',
    },

    messages: {
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
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerender = observer;
  },

  _rerender() {
    console.log('state update');
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._rerender(this._state);
  },
};

export default store;
