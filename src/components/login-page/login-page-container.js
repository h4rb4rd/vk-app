import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './login-page';
import { onLoginAC } from '../../redux/login-page-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { loginTC } from '../../redux/auth-reducer';

const LoginPageContainer = ({ onLogin, isLogged, loginTh, error, captchaUrl }) => {
  return (
    <LoginPage
      onLogin={onLogin}
      isLogged={isLogged}
      loginTh={loginTh}
      error={error}
      captchaUrl={captchaUrl}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.loginPage.isLogged,
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (isLogged) => {
      dispatch(onLoginAC(isLogged));
    },
    loginTh: (email, password, rememberMe, captcha) => {
      dispatch(loginTC(email, password, rememberMe, captcha));
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(LoginPageContainer);
