import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './app.css';

import HeaderContainer from '../header';
import Aside from '../aside';
import ProfileContainer from '../profile';
import FriendProfileContainer from '../friend-profile';
import Friends from '../friends';
import MessagesContainer from '../messages';
import LoginPageContainer from '../login-page';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeAppTC } from '../../redux/app-reducer';
import { compose } from 'redux';
import Preloader from '../preloader';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/redux-store';

class App extends Component {
  componentDidMount() {
    this.props.initializeAppTh();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <>
        <Route render={() => <LoginPageContainer />} exact path="/" />
        <div className="app-wrapper">
          <HeaderContainer />
          <Aside />
          <Route render={() => <ProfileContainer />} path="/profile" />
          <Route render={() => <FriendProfileContainer />} path="/friend-profile/:userId" />
          <Route render={() => <Friends />} path="/friends" />
          <Route render={() => <MessagesContainer />} path="/messages" />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initializeAppTh: () => {
      dispatch(initializeAppTC());
    },
  };
};
const AppContainer = compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);

const SocialApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SocialApp;
