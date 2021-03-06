import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth) {
        return <Redirect to="/profile" />;
      }
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
};
