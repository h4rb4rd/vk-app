import { profileApi } from '../dal/api';

const Actions = {
  SET_USER_PROFILE: 'friend_prof/SET_USER_PROFILE',
  SET_STATUS: 'friend_prof/SET_STATUS',
};

const initialState = {
  profile: null,
  postData: [
    { id: 1, postText: 'Welcome to my page', like: 3 },
    { id: 2, postText: 'How are you?', like: 1 },
  ],
  status: '',
};

const friendProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case Actions.SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
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
export const setStatusAC = (status) => {
  return {
    type: Actions.SET_STATUS,
    status,
  };
};

export const getStatusTC = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getStatus(userId);
    dispatch(setStatusAC(res.data));
  };
};
export default friendProfileReducer;
