import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';

const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  friends: friendsReducer,
});

const store = createStore(reducers);

export default store;
