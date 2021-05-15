import profileReducer, { addPostAC, deletePostAC } from './profile-reducer';

const state = {
  postData: [
    { id: 1, postText: "It's my first post", like: 7 },
    { id: 2, postText: 'Hi, how are you?', like: 3 },
  ],
};

it('add new post without crashing', () => {
  const action = addPostAC('test post text');
  const newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(3);
});

it('check new post text', () => {
  const action = addPostAC('test post text');
  const newState = profileReducer(state, action);

  expect(newState.postData[2].postText).toBe('test post text');
});

it('delete post without crashing', () => {
  const action = deletePostAC(1);
  const newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(1);
});
