import { rerender } from '../render';

// const rerender = () => {
//   console.log('state');
// };
const state = {
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
};
let idMax = 100;
let idMax2 = 100;

export const onPostTextUpdate = (text) => {
  state.profile.postTextData = text;
  rerender(state);
};
export const onMessageTextUpdate = (text) => {
  state.messages.messageTextData = text;
  rerender(state);
};

export const onAddPost = () => {
  const newObj = {
    id: idMax++,
    postText: state.profile.postTextData,
    like: 0,
  };
  state.profile.postData.push(newObj);
  state.profile.postTextData = '';
  rerender(state);
};

export const onAddMessage = () => {
  const newObj = {
    id: idMax2++,
    messageText: state.messages.messageTextData,
  };
  state.messages.userMessageData.push(newObj);
  state.messages.messageTextData = '';
  rerender(state);
};
export default state;
