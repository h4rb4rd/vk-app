import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
});

const store = createStore(reducers);

export default store;
