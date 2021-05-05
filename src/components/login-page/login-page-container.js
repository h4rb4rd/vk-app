import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './login-page';
import { onLoginAC } from '../../redux/login-page-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { loginTC } from '../../redux/auth-reducer';

const LoginPageContainer = ({ onLogin, isLogged, loginTh, error }) => {
  return <LoginPage onLogin={onLogin} isLogged={isLogged} loginTh={loginTh} error={error} />;
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.loginPage.isLogged,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (isLogged) => {
      dispatch(onLoginAC(isLogged));
    },
    loginTh: (email, password, rememberMe) => {
      dispatch(loginTC(email, password, rememberMe));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(LoginPageContainer);
