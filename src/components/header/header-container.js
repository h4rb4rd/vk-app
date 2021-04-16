import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './header';
import { setUserDataAC } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, { withCredentials: true }).then((res) => {
      debugger;
      const { id, email, login } = res.data.data;
      if (res.data.resultCode === 0) {
        this.props.setUserData(id, email, login);
      }
    });
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
    setUserData: (id, email, login) => {
      dispatch(setUserDataAC(id, email, login));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
