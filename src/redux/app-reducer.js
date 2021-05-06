import { getAuthUserDataTC } from './auth-reducer';

const Actions = {
  SET_INITIALIZED: 'SET_INITIALIZED',
};

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_INITIALIZED:
      return { ...state, initialized: true };

    default:
      return state;
  }
};
export const setInitializedAC = () => {
  return {
    type: Actions.SET_INITIALIZED,
  };
};
export const initializeAppTC = () => (dispatch) => {
  const promise = dispatch(getAuthUserDataTC());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedAC());
  });
};

export default appReducer;
