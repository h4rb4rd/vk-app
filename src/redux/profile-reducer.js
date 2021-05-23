import { profileApi } from '../dal/api';

const Actions = {
  ADD_POST: 'profile/ADD-POST',
  SET_STATUS: 'profile/SET_STATUS',
  DELETE_POST: 'profile/DELETE_POST',
  SAVE_PHOTO_SUCCESS: 'SAVE_PHOTO_SUCCESS',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
};

const initialState = {
  profile: null,
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
    case Actions.SAVE_PHOTO_SUCCESS: {
      debugger;
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    case Actions.SET_USER_PROFILE:
      return { ...state, profile: action.profile };
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
export const savePhotoAC = (photos) => {
  return {
    type: Actions.SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const getStatusTC = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getStatus(userId);
    dispatch(setStatusAC(res.data));
  };
};
export const updateStatusTC = (status) => {
  return async (dispatch) => {
    const res = await profileApi.updateStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  };
};

export const savePhotoTC = (file) => {
  return async (dispatch) => {
    const res = await profileApi.savePhoto(file);
    if (res.data.resultCode === 0) {
      dispatch(savePhotoAC(res.data.data.photos));

      console.log(res.data);
    }
  };
};

export const deletePostAC = (postId) => {
  return {
    type: Actions.DELETE_POST,
    postId,
  };
};

export const setFriendProfileAC = (profile) => {
  return {
    type: Actions.SET_USER_PROFILE,
    profile,
  };
};
export const getFriendProfileTC = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getFriendProfile(userId);
    dispatch(setFriendProfileAC(res.data));
  };
};

export default profileReducer;
