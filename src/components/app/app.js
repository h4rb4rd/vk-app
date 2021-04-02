import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import Header from '../header';
import Aside from '../aside';
import Profile from '../profile';
import Friends from '../friends';
import Messages from '../messages';

const App = (props) => {
  const profilePage = () => (
    <Profile profileData={props.state.profile} dispatch={props.dispatch} />
  );
  const friendsPage = () => <Friends />;
  const messagesPage = () => (
    <Messages messagesData={props.state.messages} dispatch={props.dispatch} />
  );

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Aside />
        <Route render={profilePage} path="/profile" />
        <Route render={friendsPage} path="/friends" />
        <Route render={messagesPage} path="/messages" />
      </div>
    </BrowserRouter>
  );
};

export default App;
