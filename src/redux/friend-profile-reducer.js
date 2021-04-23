import { friendsApi } from '../dal/api';

const Actions = {
  SET_USER_PROFILE: 'SET_USER_PROFILE',
};

const initialState = {
  profile: null,
  postData: [
    { id: 1, postText: 'Welcome to my page', like: 3 },
    { id: 2, postText: 'How are you?', like: 1 },
  ],
};

const friendProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_PROFILE:
      return { ...state, profile: action.profile };
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
  return (dispatch) => {
    friendsApi.getFriendProfile(userId).then((res) => {
      dispatch(setFriendProfileAC(res.data));
    });
  };
};

export default friendProfileReducer;
