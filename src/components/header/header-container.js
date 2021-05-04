import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getAuthUserDataTC, logoutTC } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserDataTh();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAuthUserDataTh: () => {
      dispatch(getAuthUserDataTC());
    },
    logoutTh: () => {
      dispatch(logoutTC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
