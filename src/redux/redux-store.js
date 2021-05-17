import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import friendProfileReducer from './friend-profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';
import loginPageReducer from './login-page-reducer';
import appReducer from './app-reducer';

const reducers = combineReducers({
  profile: profileReducer,
  friendProfile: friendProfileReducer,
  messages: messagesReducer,
  friends: friendsReducer,
  auth: authReducer,
  loginPage: loginPageReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
