import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logoutTC } from '../../redux/auth-reducer';

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutTh: () => {
      dispatch(logoutTC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
