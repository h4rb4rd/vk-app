import { authApi } from '../dal/api';

const Actions = {
  SET_USER_DATA: 'SET_USER_DATA',
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
export const setUserDataAC = (id, email, login) => {
  return {
    type: Actions.SET_USER_DATA,
    data: {
      id,
      email,
      login,
    },
  };
};
export const getAuthUserDataTC = () => {
  return (dispatch) => {
    authApi.getMe().then((res) => {
      const { id, email, login } = res.data.data;
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(id, email, login));
      }
    });
  };
};
export default authReducer;
