import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import friendProfileReducer from './friend-profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';
import loginPageReducer from './login-page-reducer';

const reducers = combineReducers({
  profile: profileReducer,
  friendProfile: friendProfileReducer,
  messages: messagesReducer,
  friends: friendsReducer,
  auth: authReducer,
  loginPage: loginPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
