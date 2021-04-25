import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './login-page';
import { onLoginAC } from '../../redux/login-page-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const LoginPageContainer = ({ onLogin, isLogged }) => {
  return <LoginPage onLogin={onLogin} isLogged={isLogged} />;
};

const AuthRedirectComponent = withAuthRedirect(LoginPageContainer);

const mapStateToProps = (state) => {
  return {
    isLogged: state.loginPage.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (isLogged) => {
      dispatch(onLoginAC(isLogged));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
