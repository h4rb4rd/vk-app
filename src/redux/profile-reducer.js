import { profileApi } from '../dal/api';

const Actions = {
  ADD_POST: 'ADD-POST',
  SET_STATUS: 'SET_STATUS',
  DELETE_POST: 'DELETE_POST',
};

const initialState = {
  postData: [
    { id: 1, postText: "It's my first post", like: 7 },
    { id: 2, postText: 'Hi, how are you?', like: 3 },
  ],
  status: '',
};

let idMax = 100;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_POST:
      const newObj = {
        id: idMax++,
        postText: action.postText,
        like: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newObj],
      };
    case Actions.DELETE_POST:
      return { ...state, postData: state.postData.filter((post) => post.id !== action.postId) };
    case Actions.SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostAC = (postText) => {
  return {
    type: Actions.ADD_POST,
    postText,
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

export const deletePostAC = (postId) => {
  return {
    type: Actions.DELETE_POST,
    postId,
  };
};

export default profileReducer;
