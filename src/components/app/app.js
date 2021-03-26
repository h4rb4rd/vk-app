import React from 'react';
import './app.css';

import Header from '../header';
import Aside from '../aside';
import Profile from '../profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
};

export default App;
