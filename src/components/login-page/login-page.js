import React from 'react';
import { Redirect } from 'react-router-dom';

import './login-page.css';
const LoginPage = ({ onLogin, isLogged }) => {
  if (isLogged) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className="login-page">
      <p className="login-page__name">Войти!</p>
      <button
        className="login-page__button"
        onClick={() => {
          onLogin(isLogged);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
