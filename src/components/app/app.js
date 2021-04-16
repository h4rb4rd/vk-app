import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import HeaderContainer from '../header';
import Aside from '../aside';
import Profile from '../profile';
import FriendProfileContainer from '../friend-profile';
import Friends from '../friends';
import MessagesContainer from '../messages';

const App = (props) => {
  const profilePage = () => <Profile store={props.store} />;
  const friendProfilePage = () => <FriendProfileContainer />;
  const friendsPage = () => <Friends />;
  const messagesPage = () => <MessagesContainer store={props.store} />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Aside />
        <Route render={profilePage} path="/profile" />
        <Route render={friendProfilePage} path="/friend-profile/:userId" />
        <Route render={friendsPage} path="/friends" />
        <Route render={messagesPage} path="/messages" />
      </div>
    </BrowserRouter>
  );
};

export default App;
