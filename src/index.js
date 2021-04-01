import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';
import store from './redux/store';

const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        onAddPost={store.onAddPost.bind(store)}
        onPostTextUpdate={store.onPostTextUpdate.bind(store)}
        onAddMessage={store.onAddMessage.bind(store)}
        onMessageTextUpdate={store.onMessageTextUpdate.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
rerender(store.getState());

store.subscribe(rerender);
