import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import {
  onAddPost,
  onPostTextUpdate,
  onAddMessage,
  onMessageTextUpdate,
} from './redux/store';
export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        onAddPost={onAddPost}
        onPostTextUpdate={onPostTextUpdate}
        onAddMessage={onAddMessage}
        onMessageTextUpdate={onMessageTextUpdate}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
