const Actions = {
  SET_IS_LOGGED: 'SET_IS_LOGGED',
};

const initialState = {
  isLogged: false,
};

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_IS_LOGGED:
      return {
        ...state,
        isLogged: !action.isLogged,
      };

    default:
      return state;
  }
};

export const onLoginAC = (isLogged) => {
  return {
    type: Actions.SET_IS_LOGGED,
    isLogged,
  };
};

export default loginPageReducer;
