import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import Header from '../header';
import Aside from '../aside';
import Profile from '../profile';
import Friends from '../friends';
import Messages from '../messages';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Aside />
        <Route component={Profile} path="/profile" />
        <Route component={Friends} path="/friends" />
        <Route component={Messages} path="/messages" />
      </div>
    </BrowserRouter>
  );
};

export default App;
