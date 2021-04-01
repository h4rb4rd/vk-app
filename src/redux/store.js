let idMax = 100;

const store = {
  idMax: 100,

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
  _rerender() {
    console.log('state update');
  },

  subscribe(observer) {
    this._rerender = observer;
  },

  onPostTextUpdate(text) {
    this._state.profile.postTextData = text;
    this._rerender(this._state);
  },

  onMessageTextUpdate(text) {
    this._state.messages.messageTextData = text;
    this._rerender(this._state);
  },

  onAddPost() {
    const newObj = {
      id: this.idMax++,
      postText: this._state.profile.postTextData,
      like: 0,
    };
    this._state.profile.postData.push(newObj);
    this._state.profile.postTextData = '';
    this._rerender(this._state);
  },

  onAddMessage() {
    const newObj = {
      id: this.idMax++,
      messageText: this._state.messages.messageTextData,
    };
    this._state.messages.userMessageData.push(newObj);
    this._state.messages.messageTextData = '';
    this._rerender(this._state);
  },
};

export default store;
