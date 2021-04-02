const Actions = {
  UPDATE_POST_TEXT: 'UPDATE-POST-TEXT',
  UPDATE_MESSAGE_TEXT: 'UPDATE-MESSAGE-TEXT',
  ADD_POST: 'ADD-POST',
  ADD_MESSAGE: 'ADD-MESSAGE',
};

export const updatePostTextAC = (text) => {
  return {
    type: Actions.UPDATE_POST_TEXT,
    text,
  };
};
export const updateMessageTextAC = (text) => {
  return {
    type: Actions.UPDATE_MESSAGE_TEXT,
    text,
  };
};
export const addPostAC = () => {
  return {
    type: Actions.ADD_POST,
  };
};
export const addMessageAC = () => {
  return {
    type: Actions.ADD_MESSAGE,
  };
};

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

  subscribe(observer) {
    this._rerender = observer;
  },

  _rerender() {
    console.log('state update');
  },

  _onPostTextUpdate(text) {
    this._state.profile.postTextData = text;
    this._rerender(this._state);
  },

  _onMessageTextUpdate(text) {
    this._state.messages.messageTextData = text;
    this._rerender(this._state);
  },

  _onAddPost() {
    const newObj = {
      id: this.idMax++,
      postText: this._state.profile.postTextData,
      like: 0,
    };
    this._state.profile.postData.push(newObj);
    this._state.profile.postTextData = '';
    this._rerender(this._state);
  },

  _onAddMessage() {
    const newObj = {
      id: this.idMax++,
      messageText: this._state.messages.messageTextData,
    };
    this._state.messages.userMessageData.push(newObj);
    this._state.messages.messageTextData = '';
    this._rerender(this._state);
  },

  dispatch(action) {
    switch (action.type) {
      case Actions.UPDATE_POST_TEXT:
        return this._onPostTextUpdate(action.text);
      case Actions.UPDATE_MESSAGE_TEXT:
        return this._onMessageTextUpdate(action.text);
      case Actions.ADD_POST:
        return this._onAddPost();
      case Actions.ADD_MESSAGE:
        return this._onAddMessage();
      default:
        return this.state;
    }
  },
};

export default store;
