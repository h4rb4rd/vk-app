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
      return { ...state, ...action.data };
    default:
      return state;
  }
};
export const setUserDataAC = (id, email, login, isAuth) => {
  return {
    type: Actions.SET_USER_DATA,
    data: {
      id,
      email,
      login,
      isAuth,
    },
  };
};
export const getAuthUserDataTC = () => {
  return (dispatch) => {
    authApi.getMe().then((res) => {
      const { id, email, login } = res.data.data;
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(id, email, login, true));
      }
    });
  };
};
export const loginTC = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
      }
    });
  };
};
export const logoutTC = () => {
  return (dispatch) => {
    authApi.logout().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
      }
    });
  };
};
export default authReducer;
