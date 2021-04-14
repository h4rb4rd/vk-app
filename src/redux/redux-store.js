import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import friendProfileReducer from './friend-profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';

const reducers = combineReducers({
  profile: profileReducer,
  friendProfile: friendProfileReducer,
  messages: messagesReducer,
  friends: friendsReducer,
});

const store = createStore(reducers);

export default store;
