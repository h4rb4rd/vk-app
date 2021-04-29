import { profileApi } from '../dal/api';

const Actions = {
  UPDATE_POST_TEXT: 'UPDATE-POST-TEXT',
  ADD_POST: 'ADD-POST',
  SET_STATUS: 'SET_STATUS',
};

const initialState = {
  postData: [
    { id: 1, postText: "It's my first post", like: 7 },
    { id: 2, postText: 'Hi, how are you?', like: 3 },
  ],
  postTextData: '',
  status: '',
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
    case Actions.SET_STATUS:
      return { ...state, status: action.status };
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
export const setStatusAC = (status) => {
  return {
    type: Actions.SET_STATUS,
    status,
  };
};

export const getStatusTC = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((res) => {
      dispatch(setStatusAC(res.data));
    });
  };
};
export const updateStatusTC = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};
export default profileReducer;
