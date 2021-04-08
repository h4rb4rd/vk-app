const Actions = {
  UPDATE_POST_TEXT: 'UPDATE-POST-TEXT',
  ADD_POST: 'ADD-POST',
};

const initialState = {
  postData: [
    { id: 1, postText: "It's my first post", like: 7 },
    { id: 2, postText: 'Hi, how are you?', like: 3 },
  ],
  postTextData: '',
};

let idMax = 100;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_POST_TEXT:
      return { ...state, postTextData: action.text };

    case Actions.ADD_POST:
      const newObj = {
        id: idMax++,
        postText: state.postTextData,
        like: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newObj],
        postTextData: '',
      };

    default:
      return state;
  }
};

export const updatePostTextAC = (text) => {
  return {
    type: Actions.UPDATE_POST_TEXT,
    text,
  };
};

export const addPostAC = () => {
  return {
    type: Actions.ADD_POST,
  };
};

export default profileReducer;
