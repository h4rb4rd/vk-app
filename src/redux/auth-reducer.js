import { authApi } from '../dal/api';

const Actions = {
  SET_USER_DATA: 'auth/SET_USER_DATA',
  SET_DATA_ERROR: 'auth/SET_DATA_ERROR',
  REMOVE_DATA_ERROR: 'auth/REMOVE_DATA_ERROR',
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_DATA:
      return { ...state, ...action.data };
    case Actions.SET_DATA_ERROR:
      return { ...state, error: action.error };
    case Actions.REMOVE_DATA_ERROR:
      return { ...state, error: null };
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
  return async (dispatch) => {
    const res = await authApi.getMe();
    const { id, email, login } = res.data.data;
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(id, email, login, true));
    }
  };
};

const setDataErrorAC = (error) => {
  return {
    type: Actions.SET_DATA_ERROR,
    error,
  };
};
const removeDataErrorAC = () => {
  return {
    type: Actions.REMOVE_DATA_ERROR,
  };
};

export const loginTC = (email, password, rememberMe) => {
  return async (dispatch) => {
    const res = await authApi.login(email, password, rememberMe);
    if (res.data.resultCode === 0) {
      dispatch(removeDataErrorAC());
      dispatch(getAuthUserDataTC());
    } else {
      const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error';
      console.log(typeof message);
      dispatch(setDataErrorAC(message));
    }
  };
};
export const logoutTC = () => {
  return async (dispatch) => {
    const res = await authApi.logout();
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(null, null, null, false));
    }
  };
};
export default authReducer;
